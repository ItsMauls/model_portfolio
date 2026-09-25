import { PersonaSwitchPill } from '@/components/shared/PersonaSwitchPill'

export default function ModelPage() {
  return (
    <main data-persona="model" className="min-h-dvh p-(--spacing-gutter)">
      <h1 className="font-display text-4xl italic">Model</h1>
      <PersonaSwitchPill to="programmer" />
    </main>
  )
}
