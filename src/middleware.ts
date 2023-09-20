import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const ispublicPath = path === '/signin' || path === '/signup'
  let token = ''

  if (process.env.NODE_ENV === 'production') {
    token =
      request.cookies.get(`${process.env.NEXTAUTH_SESSION_COOKIE_DEV}`)
        ?.value || ''
  } else {
    token =
      request.cookies.get(`${process.env.NEXTAUTH_SESSION_COOKIE_PROD}`)
        ?.value || ''
  }

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
