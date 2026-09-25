import { useTranslations } from 'next-intl'
import { Monogram } from '@/components/shared/Monogram'

export function LandingHeader() {
  const t = useTranslations('landing')

  return (
    <header className="relative z-30 flex items-center justify-between px-7 pt-7 pb-4 sm:px-10 lg:px-12">
      <span className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-white sm:text-xl">
        <Monogram className="h-5 w-7" title={t('metaTitle')} />
        Maulana <span className="font-light text-white/80">Ibrahim</span>
      </span>
    </header>
  )
}
