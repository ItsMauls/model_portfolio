import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

/** Left half of the split hero: the software developer path. */
export function DeveloperHero() {
  const t = useTranslations('landing.developer')

  return (
    <Link
      href="/programmer"
      className="hero-link-dev group flex h-full min-w-0 flex-col justify-center overflow-hidden pt-20 pb-8 lg:py-4"
    >
      <h1 className="font-condensed text-[42px] leading-[0.88] font-bold tracking-tighter text-white uppercase sm:text-[76px] md:text-[92px] lg:text-[98px] xl:text-[112px]">
        {t('line1')}
        <br />
        {t('line2')}
      </h1>
      <p className="max-w-sm pt-2 text-xs leading-relaxed text-white/90 sm:max-w-md sm:text-base">
        {t('tagline')}
      </p>
      <span className="mt-4 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-wide text-neutral-900 shadow-lg shadow-black/15 transition-all duration-200 group-hover:translate-x-1.5 group-hover:shadow-xl sm:mt-9 sm:px-7 sm:text-sm">
        {t('cta')}
      </span>
    </Link>
  )
}
