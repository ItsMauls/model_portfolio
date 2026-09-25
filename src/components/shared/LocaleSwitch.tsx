'use client'

import { useLocale, useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing'
import { usePathname, useRouter } from '@/i18n/navigation'
import { rememberLocale } from '@/lib/locale-cookie'

const LABEL: Record<string, string> = { en: 'EN', id: 'ID' }

/**
 * EN / ID switch that stays on the current page. `usePathname` from
 * next-intl returns the locale-stripped path, so pushing it with a new
 * locale is enough.
 */
export function LocaleSwitch({ className = '' }: { className?: string }) {
  const t = useTranslations('common')
  const active = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function select(locale: (typeof routing.locales)[number]) {
    // Remember the choice so <LocaleHint> stops asking.
    rememberLocale(locale)
    router.replace(pathname, { locale })
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-(--radius-pill) border border-(--color-line) p-0.5 ${className}`}
      role="group"
      aria-label={t('language')}
    >
      {routing.locales.map((locale) => {
        const current = locale === active
        return (
          <button
            key={locale}
            type="button"
            lang={locale}
            onClick={() => select(locale)}
            aria-current={current ? 'true' : undefined}
            className={`rounded-(--radius-pill) px-2.5 py-1 font-mono text-xs tracking-wide transition-colors ${
              current
                ? 'bg-(--color-accent) text-(--color-on-accent)'
                : 'text-(--color-muted) hover:text-(--color-ink)'
            }`}
          >
            <span aria-hidden="true">{LABEL[locale]}</span>
            <span className="sr-only">{locale === 'en' ? t('english') : t('indonesian')}</span>
          </button>
        )
      })}
    </div>
  )
}
