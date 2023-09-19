import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const ispublicPath = path === '/signin' || path === '/signup'

  const token = request.cookies.get('next-auth.session-token')?.value || ''

  if (ispublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!ispublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }
}

// See matching prefixes
export const config = {
  matcher: ['/', '/signin', '/signup']
}
