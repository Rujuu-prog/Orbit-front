import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    const url = request.nextUrl.clone();

    // トークンがない場合、/signInにリダイレクト
    if (!token) {
        // if (url.pathname === '/' || url.pathname.startsWith('/todo')) {
        //     url.pathname = '/signIn';
        //     return NextResponse.redirect(url);
        // }
        if (url.pathname.startsWith('/todo')) {
            url.pathname = '/signIn';
            return NextResponse.redirect(url);
        }
    }

    // トークンがある場合、/から/todoにリダイレクト
    if (token && url.pathname === '/') {
        url.pathname = '/todo';
        return NextResponse.redirect(url);
    }

    // 他のリクエストはそのまま続行
    return NextResponse.next();
}

// middlewareを適用するパスを指定
export const config = {
    matcher: ['/', '/todo/:path*'],  // /と/todo以下のすべてのルートに適用
};
