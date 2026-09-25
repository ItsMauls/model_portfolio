import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { ContactSection } from '@/components/model/ContactSection'
import { GallerySection } from '@/components/model/GallerySection'
import { ModelHeader } from '@/components/model/ModelHeader'
import { ModelHero } from '@/components/model/ModelHero'
import { WorkSection } from '@/components/model/WorkSection'
import { PersonaSwitchPill } from '@/components/shared/PersonaSwitchPill'
import { getGalleryPhotos, getHeroMediaUrl, getWorkItems } from '@/lib/model-content'
import { alternatesFor } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'model' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: alternatesFor('/model', locale),
  }
}

export default async function ModelPage() {
  const [heroMediaUrl, workItems, galleryPhotos] = await Promise.all([
    getHeroMediaUrl(),
    getWorkItems(),
    getGalleryPhotos(),
  ])

  return (
    <main data-persona="model" className="min-h-dvh bg-(--color-bg) text-(--color-ink)">
      <ModelHeader />
      <ModelHero mediaUrl={heroMediaUrl} />
      <WorkSection items={workItems} />
      <GallerySection photos={galleryPhotos} />
      <ContactSection />
      <PersonaSwitchPill to="programmer" />
    </main>
  )
}
