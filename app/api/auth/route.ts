import axios, {AxiosError} from "axios";
import {API_ENDPOINTS} from "@/app/api/apiEndpoints";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        // Basic認証のヘッダーを作成
        // const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
        // console.log("authHeader: "+authHeader)
        console.dir("username: "+ username);//  [object Request]
        console.dir("password: "+ password);// [object Object]
        // APIエンドポイントにPOSTリクエストを送信
        const response = await axios.post(API_ENDPOINTS.TOKEN, {}, {
            auth: {
                'username': username,
                'password': password
            }
        });
        console.log(response)

        const token = response.data.token;
        const responseHeaders = new Headers();
        responseHeaders.append('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`);

        return NextResponse.redirect(new URL('/todo', request.url), { headers: responseHeaders });
    } catch (error) {
        console.error('Error fetching token:', error);
        if (error instanceof AxiosError && error.response) {
            return NextResponse.json({
                error: error.message,
                status: error.response.status,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            }, { status: error.response.status });
        } else {
            // AxiosErrorでない場合、一般的なエラーメッセージを返す
            return NextResponse.json({
                error: 'An unexpected error occurred'
            }, { status: 500 }); // 500はサーバーエラーとして適切なデフォルト値です
        }
    }
}
