import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * Pure crypto helpers with no `next/headers` import, so they're safe to call
 * from `proxy.ts` (which reads cookies off the raw request) as well as from
 * server actions and pages (which use `lib/session.ts`).
 */

export const SESSION_COOKIE = 'admin_session'
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7

function sign(value: string): string {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error('AUTH_SECRET is not set')
  return createHmac('sha256', secret).update(value).digest('hex')
}

export function createSessionToken(): string {
  const payload = String(Date.now())
  return `${payload}.${sign(payload)}`
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false

  let expected: string
  try {
    expected = sign(payload)
  } catch {
    return false
  }

  if (expected.length !== signature.length) return false
  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return false

  const age = Date.now() - Number(payload)
  return age >= 0 && age <= MAX_AGE_MS
}

export function checkAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  return Boolean(expected) && password === expected
}
