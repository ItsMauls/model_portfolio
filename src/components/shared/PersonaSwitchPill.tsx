import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Monogram } from './Monogram'

/**
 * Persistent pill, bottom-right of both persona pages. The only affordance
 * that admits the two portfolios belong to one person.
 */
export async function PersonaSwitchPill({ to }: { to: 'programmer' | 'model' }) {
  const t = await getTranslations('common')
  const label = to === 'model' ? t('switchToModel') : t('switchToProgrammer')

  return (
    <Link
      href={`/${to}`}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 rounded-(--radius-pill) border border-(--color-line) bg-(--color-surface) py-2.5 pr-4 pl-3 text-sm shadow-lg transition-transform duration-200 ease-(--ease-out-soft) hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <Monogram className="h-3.5 w-5 text-(--color-accent)" />
      <span>{label}</span>
      <span aria-hidden="true" className="text-(--color-muted)">
        &rarr;
      </span>
    </Link>
  )
}
