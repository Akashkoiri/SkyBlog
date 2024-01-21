import { NextResponse } from 'next/server'


export async function middleware(req) {
    const { pathname } = req.nextUrl
    if (pathname.startsWith(`/api/`)) {
        if (!req.headers.get("referer")?.includes(process.env.NEXTAUTH_URL)) {
            return NextResponse.json({ message: "Unauthenticated user" }, { status: 401 });
        }
    }
    return NextResponse.next()
}


export const config = {
    matcher: ['/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)'],
}