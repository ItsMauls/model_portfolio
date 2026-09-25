import { routing } from '@/i18n/routing'

/**
 * Canonical origin. Vercel injects VERCEL_PROJECT_PRODUCTION_URL on every
 * deployment, so previews get correct absolute URLs without extra config.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`

  return 'http://localhost:3000'
}

/** Prefix a path for a locale. English has no prefix (`localePrefix: 'as-needed'`). */
export function localePath(locale: string, path: string): string {
  const clean = path === '/' ? '' : path
  return locale === routing.defaultLocale ? clean || '/' : `/${locale}${clean}`
}

/**
 * `alternates` for a page: canonical for the current locale, plus hreflang
 * for en, id and x-default. `path` is the unprefixed route, e.g. '/programmer'.
 */
export function alternatesFor(path: string, currentLocale: string) {
  const base = siteUrl()
  const languages: Record<string, string> = {}

  for (const locale of routing.locales) {
    languages[locale] = `${base}${localePath(locale, path)}`
  }
  languages['x-default'] = `${base}${localePath(routing.defaultLocale, path)}`

  return { canonical: `${base}${localePath(currentLocale, path)}`, languages }
}
