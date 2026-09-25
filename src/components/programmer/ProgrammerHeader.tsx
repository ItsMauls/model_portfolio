import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

/** Header for the programmer persona: wordmark top-left, section nav top-right. */
export function ProgrammerHeader() {
  const t = useTranslations('programmer')

  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-(--spacing-gutter) py-5 sm:px-10">
      <Link
        href="/"
        className="text-xl font-black tracking-[0.2em] text-(--color-accent) italic sm:text-2xl sm:tracking-[0.3em] lg:text-3xl"
      >
        M.I.A
      </Link>

      <nav className="flex items-center gap-3 sm:gap-6">
        <div className="hidden items-center gap-6 font-mono text-sm lg:flex">
          <a href="#experience" className="transition-colors hover:text-(--color-accent)">
            {t('nav.experience')}
          </a>
          <a href="#projects" className="transition-colors hover:text-(--color-accent)">
            {t('nav.projects')}
          </a>
          <a href="#skills" className="transition-colors hover:text-(--color-accent)">
            {t('nav.skills')}
          </a>
        </div>
        <Link
          href="/model"
          className="border-2 border-(--color-ink) bg-(--color-accent) px-2.5 py-1 text-xs font-semibold text-white shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[3px_6px_0_var(--color-ink)] sm:px-3 sm:py-1.5 sm:text-sm sm:shadow-[4px_4px_0_var(--color-ink)] sm:hover:shadow-[4px_8px_0_var(--color-ink)]"
        >
          {t('nav.freelanceModel')}
        </Link>
      </nav>
    </header>
  )
}
