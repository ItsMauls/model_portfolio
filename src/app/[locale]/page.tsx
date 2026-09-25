import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { LocaleHint } from '@/components/shared/LocaleHint'
import { LocaleSwitch } from '@/components/shared/LocaleSwitch'

export default function LandingPage() {
  const t = useTranslations('landing')
  return (
    <main data-persona="programmer" className="min-h-dvh p-(--spacing-gutter)">
      <LocaleSwitch />
      <h1 className="font-mono text-2xl">{t('chooseAPath')}</h1>
      <Link href="/programmer">{t('programmer.word')}</Link>
      <Link href="/model">{t('model.word')}</Link>
      <LocaleHint />
    </main>
  )
}
