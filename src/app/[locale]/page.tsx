import { DeveloperHero } from '@/components/landing/DeveloperHero'
import { LandingHeader } from '@/components/landing/LandingHeader'
import { ModelHero } from '@/components/landing/ModelHero'
import { PortraitCutout } from '@/components/landing/PortraitCutout'
import { SplitBackdrop } from '@/components/landing/SplitBackdrop'

export default function LandingPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#0b0a0e] text-white">
      <div className="hero-frame relative flex h-dvh min-h-[700px] w-full flex-col overflow-hidden border border-white/10">
        <SplitBackdrop />
        <LandingHeader />

        <div className="hero-grid relative z-20 grid flex-1 grid-cols-1 grid-rows-2 items-stretch px-7 sm:px-10 lg:grid-rows-1 lg:px-12">
          <DeveloperHero />
          <ModelHero />
        </div>

        <PortraitCutout />
      </div>
    </main>
  )
}
