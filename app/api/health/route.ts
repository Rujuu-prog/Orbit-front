import axios from "axios";
import {API_ENDPOINTS} from "@/app/api/apiEndpoints";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        // APIエンドポイントにGETリクエストを送信
        const response = await axios.get(API_ENDPOINTS.HEALTH, {});
        console.log(response)

        return NextResponse.json({ message: 'Health check passed' });
    } catch (error) {
        console.error('Error fetching token:', error);
        return NextResponse.json({ error: 'Sign-in failed' }, { status: 401 });
    }
}
