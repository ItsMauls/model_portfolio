import Image from 'next/image'
import { useTranslations } from 'next-intl'

const imageClass =
  'object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] transition-opacity duration-500 ease-(--ease-out-soft)'
const modelImageClass = 'object-contain object-bottom transition-opacity duration-500 ease-(--ease-out-soft)'

/**
 * Centre-bottom portrait overlapping both halves of the split hero. Two
 * photos are stacked and crossfaded by opacity, driven by the same
 * `.hero-frame:has(...)` hover state as the slider (see globals.css) so the
 * portrait matches whichever option is hovered without any JS.
 */
export function PortraitCutout() {
  const t = useTranslations('landing')

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-10 flex items-end justify-center overflow-hidden">
      <div className="relative h-[88%] w-full max-w-[560px] translate-x-2 translate-y-1 sm:h-[96%] sm:translate-x-6 md:h-[104%] lg:h-[112%] lg:translate-x-12">
        <Image
          src="/images/personal/maulana-programmer.png"
          alt={t('metaTitle')}
          fill
          priority
          sizes="(min-width: 1024px) 560px, 80vw"
          className={`hero-portrait-dev ${imageClass}`}
        />
        <Image
          src="/images/personal/maulana_model.png"
          alt={t('metaTitle')}
          fill
          sizes="(min-width: 1024px) 560px, 80vw"
          className={`hero-portrait-model ${modelImageClass}`}
        />
      </div>
    </div>
  )
}
