import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { EmailButton, githubUrl, GithubIcon, IconButton, linkedinUrl, LinkedinIcon, whatsappUrl, WhatsappIcon } from './SocialIcons'

export function ProgrammerHero() {
  const t = useTranslations('programmer')
  const tContact = useTranslations('programmer.contact')

  return (
    <section
      id="hero"
      className="programmer-panel panel-sunset flex h-dvh w-full shrink-0 flex-row items-center justify-center gap-4 overflow-y-auto px-(--spacing-gutter) pt-14 sm:gap-6 sm:px-10 sm:pt-28 lg:items-stretch lg:justify-between lg:gap-12"
    >
      <div className="order-2 flex min-w-0 flex-col items-start gap-2 lg:order-none lg:self-center">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <EmailButton label={tContact('email')} size="sm" />
          {whatsappUrl && (
            <IconButton href={whatsappUrl} label={tContact('whatsapp')} size="sm">
              <WhatsappIcon />
            </IconButton>
          )}
          <IconButton href={linkedinUrl} label={tContact('linkedin')} size="sm">
            <LinkedinIcon />
          </IconButton>
          <IconButton href={githubUrl} label={tContact('github')} size="sm">
            <GithubIcon />
          </IconButton>
        </div>

        <h1 className="hero-glitch text-retro-80s font-condensed leading-[1.05] font-bold tracking-wide uppercase">
          <span className="block text-[clamp(1.1rem,6vw,2rem)] sm:text-[clamp(1.75rem,5vw,3rem)] lg:text-[clamp(2.25rem,10vw,7rem)] lg:whitespace-nowrap">
            {t('hero.nameLine1')}
          </span>
          <span className="block text-[clamp(1.1rem,6vw,2rem)] tracking-[0.04em] sm:text-[clamp(1.75rem,5vw,3rem)] lg:text-[clamp(2.25rem,10vw,7rem)]">
            {t('hero.nameLine2')}
          </span>
        </h1>
        <p className="hero-glitch inline-flex w-fit -rotate-2 items-center border-2 border-(--color-ink) bg-(--color-ink) px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-(--color-accent) uppercase shadow-[3px_3px_0_var(--color-accent)] sm:text-sm lg:text-base">
          {t('hero.role')}
        </p>
      </div>

      {/* Contained portrait, flush against the section's bottom edge, with a periodic glitch flicker. */}
      <div className="hero-glitch hero-portrait order-1 relative h-44 w-40 max-w-full shrink-0 self-end sm:h-64 sm:w-56 lg:order-none lg:h-[57.6rem] lg:w-[46.8rem]">
        <Image
          src="/images/personal/maulana-programmer.png"
          alt={t('metaTitle')}
          fill
          priority
          sizes="(min-width: 1024px) 749px, (min-width: 640px) 224px, 160px"
          className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
        />
      </div>
    </section>
  )
}
