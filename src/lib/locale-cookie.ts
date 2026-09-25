export const LOCALE_COOKIE = 'NEXT_LOCALE'

/** Remember an explicit language choice for a year. Read by next-intl's proxy. */
export function rememberLocale(locale: string): void {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`
}

export function hasLocaleCookie(): boolean {
  return document.cookie.split('; ').some((c) => c.startsWith(`${LOCALE_COOKIE}=`))
}
