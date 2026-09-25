import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { GalleryPhoto } from '@/lib/model-content'

/** Photo grid: a fixed 50/50 (2-column) layout at every breakpoint, each tile zooming and darkening slightly on hover. */
export function GallerySection({ photos }: { photos: GalleryPhoto[] }) {
  const t = useTranslations('model.gallery')

  return (
    <section id="photo" className="px-(--spacing-gutter) py-(--spacing-section) sm:px-10">
      <h2 className="font-display text-3xl italic sm:text-4xl">{t('title')}</h2>

      {photos.length === 0 ? (
        <p className="mt-6 text-(--color-muted)">{t('empty')}</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-[3/4] w-full overflow-hidden bg-(--color-surface)"
            >
              <Image
                src={photo.imageUrl}
                alt={t('openPhoto', { index: index + 1 })}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
