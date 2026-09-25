import { useTranslations } from 'next-intl'

// TODO: replace with real booking email and Instagram handle.
const bookingEmail = 'booking@example.com'
const instagramUrl = 'https://instagram.com/'

export function ContactSection() {
  const t = useTranslations('model.contact')

  return (
    <section
      id="say-hello"
      className="border-t border-(--color-line) px-(--spacing-gutter) py-(--spacing-section) sm:px-10"
    >
      <h2 className="font-display text-4xl italic sm:text-6xl">{t('title')}</h2>
      <p className="mt-3 max-w-(--container-measure) text-(--color-muted)">{t('subtitle')}</p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium tracking-widest uppercase">
        <a href={`mailto:${bookingEmail}`} className="underline underline-offset-4 hover:text-(--color-accent)">
          {t('booking')}
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-(--color-accent)"
        >
          {t('instagram')}
        </a>
      </div>
    </section>
  )
}
