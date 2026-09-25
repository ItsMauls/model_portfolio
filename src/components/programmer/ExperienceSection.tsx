import { useTranslations } from 'next-intl'
import type { ExperienceEntry } from '@/lib/programmer-content'

const HIGHLIGHT_COUNT = 2

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const t = useTranslations('programmer.experience')

  return (
    <li className="group relative border-2 border-(--color-ink) bg-(--color-surface) p-5 shadow-[6px_6px_0_var(--color-accent)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-accent)] sm:p-6">
      <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-condensed text-xl font-bold tracking-tight uppercase">{entry.company}</h3>
        <span className="font-mono text-xs font-semibold text-(--color-muted)">{entry.period}</span>
      </div>
      <div className="relative mt-1.5 flex flex-wrap items-center gap-2 text-sm text-(--color-muted)">
        <span className="font-semibold text-(--color-accent)">{entry.role}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{entry.location}</span>
        {entry.current && (
          <span className="rounded-(--radius-pill) border border-(--color-ink) bg-(--color-accent) px-2.5 py-0.5 text-xs font-bold text-(--color-on-accent) shadow-[2px_2px_0_var(--color-ink)]">
            {t('current')}
          </span>
        )}
      </div>

      <ul className="relative mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-(--color-accent)">
        {entry.bullets.slice(0, HIGHLIGHT_COUNT).map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </li>
  )
}

export function ExperienceSection({ items }: { items: ExperienceEntry[] }) {
  const t = useTranslations('programmer.experience')

  return (
    <section
      id="experience"
      className="programmer-panel panel-paper flex min-h-dvh w-full shrink-0 flex-col justify-center overflow-y-auto border-t-2 border-(--color-ink) px-(--spacing-gutter) py-(--spacing-section-sm) sm:px-10 sm:py-(--spacing-section)"
    >
      <h2 className="font-condensed text-3xl font-bold tracking-tight text-(--color-ink) uppercase sm:text-5xl">
        {t('title')}
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </ul>
    </section>
  )
}
