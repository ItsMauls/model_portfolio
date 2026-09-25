import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  // English has no prefix; Indonesian lives under /id.
  localePrefix: 'as-needed',
  // No automatic redirect by Accept-Language: we show a dismissible hint
  // instead (see <LocaleHint>) so a shared link always lands where it points.
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]
