import * as rootParams from 'next/root-params'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from './routing'

/**
 * Resolving the locale from `next/root-params` rather than `requestLocale`
 * is what keeps every page statically rendered under Next 16 - the legacy
 * path marks the render dynamic.
 */
export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const fromParams = await rootParams.locale()
    if (!hasLocale(routing.locales, fromParams)) notFound()
    locale = fromParams
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
