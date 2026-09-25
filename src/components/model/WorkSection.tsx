import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { WorkItem } from '@/lib/model-content'

/** Selected work: brand logos as an auto-scrolling marquee (see .marquee-track in globals.css). */
export function WorkSection({ items }: { items: WorkItem[] }) {
  const t = useTranslations('model.brands')

  if (items.length === 0) return null

  // Duplicated so the track can loop seamlessly at -50%.
  const track = [...items, ...items]

  return (
    <section id="work" className="overflow-hidden py-(--spacing-section) sm:px-10">
      <h2 className="px-(--spacing-gutter) font-display text-3xl italic sm:px-0 sm:text-4xl">{t('title')}</h2>

      <div className="mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-16">
          {track.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative h-24 w-40 flex-shrink-0"
              title={t('viewCampaign', { brand: item.brand })}
            >
              <Image
                src={item.imageUrl}
                alt={item.brand}
                fill
                sizes="160px"
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
