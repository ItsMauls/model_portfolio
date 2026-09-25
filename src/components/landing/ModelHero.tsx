import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

/** Right half of the split hero: the freelance model path. */
export function ModelHero() {
  const t = useTranslations('landing')

  return (
    <Link
      href="/model"
      className="hero-link-model group flex h-full min-w-0 flex-col justify-center overflow-hidden py-8 lg:items-end lg:py-4"
    >
      <div className="w-full max-w-[340px] lg:mr-4">
        <span className="mb-2 flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-[#ea580c] uppercase sm:text-xs">
          {t('availableFor')}
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ea580c]" />
        </span>
        <span className="flex items-center text-3xl font-extrabold tracking-tight text-white transition-transform duration-200 group-hover:translate-x-1.5 sm:text-4xl md:text-5xl lg:text-neutral-900">
          {t('model.headline')}
        </span>
      </div>
    </Link>
  )
}
