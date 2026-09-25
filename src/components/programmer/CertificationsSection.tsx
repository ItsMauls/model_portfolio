import { useTranslations } from 'next-intl'
import { certifications } from '@/lib/programmer-content'
import type { CertificationEntry } from '@/lib/programmer-content'
import { linkedinUrl } from './SocialIcons'

function CertCard({ cert, className = '' }: { cert: CertificationEntry; className?: string }) {
  return (
    <li
      className={`flex shrink-0 flex-col overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) shadow-[4px_4px_0_var(--color-accent)] ${className}`}
    >
      {cert.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/certificates/${cert.image}`}
          alt={`${cert.title} certificate`}
          loading="lazy"
          className="aspect-[4/3] w-full border-b-2 border-(--color-ink) object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-1 p-3 text-center text-xs">
        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="font-bold underline decoration-(--color-accent) decoration-2 underline-offset-2 hover:text-(--color-accent)"
          >
            {cert.title} <span aria-hidden="true">&#8599;</span>
          </a>
        ) : (
          <span className="font-bold">{cert.title}</span>
        )}
        <span className="text-(--color-muted)">{cert.issuer}</span>
      </div>
    </li>
  )
}

// Auto-sliding row (see .marquee-track in globals.css); list is duplicated so the loop is seamless.
function CertRow({ items, reverse }: { items: CertificationEntry[]; reverse?: boolean }) {
  const track = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <ul className={`marquee-track flex w-max gap-4 ${reverse ? 'marquee-track-reverse' : ''}`}>
        {track.map((cert, index) => (
          <CertCard key={`${cert.issuer}-${cert.title}-${index}`} cert={cert} className="w-72" />
        ))}
      </ul>
    </div>
  )
}

// Only the featured certs show by default; the rest are still real, just tucked behind the LinkedIn link.
export function CertificationsSection() {
  const t = useTranslations('programmer.education')
  const featured = certifications.filter((cert) => cert.featured)
  const mid = Math.ceil(featured.length / 2)
  const row1 = featured.slice(0, mid)
  const row2 = featured.slice(mid)

  return (
    <section
      id="certifications"
      className="programmer-panel panel-paper flex min-h-dvh w-full shrink-0 flex-col justify-center overflow-y-auto border-t-2 border-(--color-ink) px-(--spacing-gutter) py-(--spacing-section-sm) sm:px-10 sm:py-(--spacing-section)"
    >
      <h2 className="font-condensed text-3xl font-bold tracking-tight uppercase sm:text-5xl">
        {t('certificationsHeading')}
      </h2>

      {/* Mobile: auto-sliding rows. Desktop: static grid, like before the mobile split. */}
      <div className="mt-6 flex flex-col gap-4 sm:mt-8 lg:hidden">
        <CertRow items={row1} />
        <CertRow items={row2} reverse />
      </div>

      <ul className="mt-6 hidden grid-cols-5 gap-4 sm:mt-8 lg:grid">
        {featured.map((cert) => (
          <CertCard key={`${cert.issuer}-${cert.title}`} cert={cert} />
        ))}
      </ul>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-(--color-accent) decoration-2 underline-offset-2 hover:text-(--color-accent) sm:mt-8"
      >
        {t('moreOnLinkedin')} <span aria-hidden="true">&#8599;</span>
      </a>
    </section>
  )
}
