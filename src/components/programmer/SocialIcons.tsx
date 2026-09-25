'use client'

import type { MouseEvent, ReactNode } from 'react'

// Split so the address never sits as a plain string in the server-rendered HTML —
// EmailButton below joins it client-side only, which is enough to dodge static-HTML scrapers.
const EMAIL_USER = 'maulputra09'
const EMAIL_DOMAIN = 'gmail.com'

// TODO: no WhatsApp number yet — leave blank; ProgrammerHero hides the button while this is empty.
export const whatsappUrl = ''
export const linkedinUrl = 'https://www.linkedin.com/in/maulana-ibrahim-adiputra-200181190/'
export const githubUrl = 'https://github.com/ItsMauls'

export function IconButton({
  href,
  label,
  size = 'md',
  onClick,
  children,
}: {
  href: string
  label: string
  size?: 'sm' | 'md'
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  children: ReactNode
}) {
  const dimension = size === 'sm' ? 'h-11 w-11' : 'h-14 w-14'
  const iconSize = size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      aria-label={label}
      onClick={onClick}
      className={`flex ${dimension} items-center justify-center rounded-full border-2 border-(--color-ink) bg-(--color-accent) text-white shadow-[4px_4px_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[4px_8px_0_var(--color-ink)]`}
    >
      <span className={iconSize}>{children}</span>
    </a>
  )
}

// No mailto: rendered anywhere — the address is only ever assembled inside this click
// handler, so it never appears in the server HTML or the hydrated DOM for a bot to scrape.
export function EmailButton({ label, size }: { label: string; size?: 'sm' | 'md' }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`
  }

  return (
    <IconButton href="#" label={label} size={size} onClick={handleClick}>
      <EmailIcon />
    </IconButton>
  )
}

export function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.4-1.36a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.14c-.24.68-1.39 1.3-1.92 1.35-.49.05-1.02.1-3.23-.68-2.74-.98-4.5-3.78-4.64-3.96-.14-.18-1.1-1.46-1.1-2.79 0-1.32.7-1.97.94-2.24.24-.27.53-.34.71-.34.18 0 .35.01.5.01.16 0 .38-.06.6.45.24.55.79 1.9.86 2.04.07.14.11.3.02.48-.09.18-.14.29-.28.44-.14.16-.29.35-.42.47-.14.13-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.14.44.2.5.31.06.11.06.65-.18 1.33z" />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  )
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}
