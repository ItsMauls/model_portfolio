import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { SESSION_COOKIE, verifySessionToken } from './lib/auth'

const intlMiddleware = createMiddleware(routing)

const adminPattern = /^\/(id\/)?admin(\/.*)?$/
const loginPattern = /^\/(id\/)?admin\/login\/?$/

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (adminPattern.test(pathname) && !loginPattern.test(pathname)) {
    const token = request.cookies.get(SESSION_COOKIE)?.value
    if (!verifySessionToken(token)) {
      const loginPath = pathname.startsWith('/id/') ? '/id/admin/login' : '/admin/login'
      return NextResponse.redirect(new URL(loginPath, request.url))
    }
  }

  return intlMiddleware(request)
}

export const config = {
  // Everything except API routes, Next internals, and files with an extension.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
