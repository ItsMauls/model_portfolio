'use client'

import { useState, useSyncExternalStore } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { hasLocaleCookie, rememberLocale } from '@/lib/locale-cookie'

// The condition is read once after hydration and never changes during a
// visit, so the store never notifies.
const noSubscribe = () => () => {}

function browserPrefersIndonesian(): boolean {
  if (hasLocaleCookie()) return false
  return navigator.languages.some((l) => l.toLowerCase().startsWith('id'))
}

/**
 * Offers Indonesian to visitors whose browser prefers it, instead of
 * redirecting them. Deliberately client-side: reading the Accept-Language
 * header on the server would opt every page out of static rendering, and
 * `navigator.languages` reflects the same preference.
 */
export function LocaleHint() {
  const t = useTranslations('localeHint')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [dismissed, setDismissed] = useState(false)

  const prefersId = useSyncExternalStore(noSubscribe, browserPrefersIndonesian, () => false)

  if (locale !== 'en' || dismissed || !prefersId) return null

  function choose(next: 'en' | 'id') {
    rememberLocale(next)
    setDismissed(true)
    if (next === 'id') router.replace(pathname, { locale: 'id' })
  }

  return (
    <div
      role="status"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-(--color-line) bg-(--color-surface) px-4 py-3 text-sm shadow-lg sm:inset-x-auto sm:left-6"
    >
      <p className="grow">{t('message')}</p>
      <button
        type="button"
        lang="id"
        onClick={() => choose('id')}
        className="font-medium text-(--color-accent) underline underline-offset-4"
      >
        {t('action')}
      </button>
      <button
        type="button"
        onClick={() => choose('en')}
        className="text-(--color-muted) hover:text-(--color-ink)"
      >
        {t('dismiss')}
      </button>
    </div>
  )
}
