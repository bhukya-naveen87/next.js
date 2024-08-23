import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const userType = request.cookies.get("user_type");

    if (request.nextUrl.pathname === '/logout') {
        response.cookies.set('user_type', '', { expires: new Date(0), path: '/' });
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (request.nextUrl.pathname !== "/login" && !userType) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (request.nextUrl.pathname === "/login" && userType) {
        return NextResponse.redirect(new URL('/home', request.url))
    }
    // Add Cache-Control headers to prevent caching of protected pages


    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|favicon.ico).*)"]
}
