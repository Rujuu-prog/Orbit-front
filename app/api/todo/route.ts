import axios, { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/app/api/apiEndpoints";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        // クッキーからトークンを取得
        const cookieHeader = request.headers.get('cookie');
        if (!cookieHeader) {
            return NextResponse.json({ error: 'Unauthorized: No token found' }, { status: 401 });
        }

        // クッキーから 'token' を抽出
        const cookies = new Map(cookieHeader.split(';').map(cookie => {
            const [name, ...rest] = cookie.trim().split('=');
            return [name, rest.join('=')];
        }));
        const token = cookies.get('token');

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized: Token not found' }, { status: 401 });
        }

        // クエリパラメータを設定
        const params = {
            limit: 10,
            offset: 0
        };

        // APIエンドポイントにGETリクエストを送信
        const response = await axios.get(API_ENDPOINTS.TASKS, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,  // Bearerトークンをヘッダーに追加
            },
            params: params,  // クエリパラメータを設定
        });

        // レスポンスを返却
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching tasks:', error);

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
            }, { status: 500 });
        }
    }
}
