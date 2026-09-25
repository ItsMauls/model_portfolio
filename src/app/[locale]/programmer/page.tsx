import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { CertificationsSection } from '@/components/programmer/CertificationsSection'
import { ExperienceSection } from '@/components/programmer/ExperienceSection'
import { ProgrammerHeader } from '@/components/programmer/ProgrammerHeader'
import { ProgrammerHero } from '@/components/programmer/ProgrammerHero'
import { ProjectsSkillsSection } from '@/components/programmer/ProjectsSkillsSection'
import { experience, projects } from '@/lib/programmer-content'
import { alternatesFor } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'programmer' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: alternatesFor('/programmer', locale),
  }
}

export default function ProgrammerPage() {
  return (
    <main data-persona="programmer" className="relative h-dvh text-(--color-ink)">
      <ProgrammerHeader />
      <div className="programmer-panels flex h-dvh w-full flex-col overflow-x-hidden overflow-y-auto scroll-smooth">
        <ProgrammerHero />
        <ExperienceSection items={experience} />
        <ProjectsSkillsSection items={projects} />
        <CertificationsSection />
      </div>
    </main>
  )
}
