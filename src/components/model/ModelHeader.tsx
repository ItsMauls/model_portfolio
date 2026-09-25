import { useTranslations } from 'next-intl'

/** Header for the model persona: wordmark + tagline top-left, nav stacked top-right — mirrors the editorial reference layout. */
export function ModelHeader() {
  const t = useTranslations('model')

  return (
    <header className="sticky top-0 z-40 flex items-start justify-between bg-(--color-bg)/90 px-(--spacing-gutter) pt-7 pb-5 backdrop-blur-md sm:px-10">
      <div className="flex flex-col">
        <a href="#hero" className="font-display text-3xl italic sm:text-4xl">
          {t('hero.name')}
        </a>
        <span className="mt-2 text-[11px] tracking-wide text-(--color-muted)">{t('hero.role')}</span>
      </div>

      <nav className="flex flex-col items-end space-y-1 text-sm sm:text-base">
        <a href="#work" className="transition-colors hover:text-(--color-accent)">
          {t('nav.work')}
        </a>
        <a href="#photo" className="transition-colors hover:text-(--color-accent)">
          {t('nav.photo')}
        </a>
        <a href="#say-hello" className="transition-colors hover:text-(--color-accent)">
          {t('nav.sayHello')}
        </a>
      </nav>
    </header>
  )
}
