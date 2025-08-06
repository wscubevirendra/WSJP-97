import { NextResponse } from 'next/server';

// Middleware to protect admin routes
export function middleware(req) {
    console.log(req.nextUrl)
    const { pathname } = req.nextUrl;

    console.log(req.cookies.get('admin_token'))

    // Protect routes starting with /admin
    if (pathname.startsWith('/admin')) {
        const admin_token = req.cookies.get('admin_token');
        if (!admin_token) {
            return NextResponse.redirect(new URL('/admin-login', req.url));
        }
    }
    return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
    matcher: '/admin/:path*',
};
