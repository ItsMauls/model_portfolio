import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { email, githubUrl, GithubIcon, IconButton, linkedinUrl, LinkedinIcon, whatsappUrl, WhatsappIcon, EmailIcon } from './SocialIcons'

export function ProgrammerHero() {
  const t = useTranslations('programmer')
  const tContact = useTranslations('programmer.contact')

  return (
    <section
      id="hero"
      className="programmer-panel panel-sunset flex h-dvh w-full shrink-0 flex-col items-center justify-center gap-2 overflow-y-auto px-(--spacing-gutter) pt-16 sm:justify-between sm:gap-4 sm:px-10 sm:pt-28 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12"
    >
      <div className="flex flex-col items-start gap-2 sm:gap-6 lg:self-center">
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          <IconButton href={`mailto:${email}`} label={tContact('email')} size="sm">
            <EmailIcon />
          </IconButton>
          <IconButton href={whatsappUrl} label={tContact('whatsapp')} size="sm">
            <WhatsappIcon />
          </IconButton>
          <IconButton href={linkedinUrl} label={tContact('linkedin')} size="sm">
            <LinkedinIcon />
          </IconButton>
          <IconButton href={githubUrl} label={tContact('github')} size="sm">
            <GithubIcon />
          </IconButton>
        </div>

        <h1 className="hero-glitch text-retro-80s font-condensed leading-[1.05] font-bold tracking-wide uppercase">
          <span className="block text-[clamp(1.75rem,9vw,7rem)] whitespace-nowrap">{t('hero.nameLine1')}</span>
          <span className="block text-[clamp(1.75rem,9vw,7rem)] tracking-[0.04em]">{t('hero.nameLine2')}</span>
        </h1>
        <p className="hero-glitch inline-flex w-fit -rotate-2 items-center border-2 border-(--color-ink) bg-(--color-ink) px-3 py-1.5 text-sm font-bold tracking-[0.15em] text-(--color-accent) uppercase shadow-[3px_3px_0_var(--color-accent)] sm:text-base">
          {t('hero.role')}
        </p>
      </div>

      {/* Contained portrait, flush against the section's bottom edge, with a periodic glitch flicker. */}
      <div className="hero-glitch relative h-48 w-44 shrink-0 self-end sm:h-[43.2rem] sm:w-xl lg:h-[57.6rem] lg:w-[46.8rem]">
        <Image
          src="/images/personal/maulana-programmer.png"
          alt={t('metaTitle')}
          fill
          priority
          sizes="(min-width: 1024px) 749px, 576px"
          className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
        />
      </div>
    </section>
  )
}
