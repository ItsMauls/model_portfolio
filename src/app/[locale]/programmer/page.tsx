import { PersonaSwitchPill } from '@/components/shared/PersonaSwitchPill'

export default function ProgrammerPage() {
  return (
    <main data-persona="programmer" className="min-h-dvh p-(--spacing-gutter)">
      <h1 className="font-mono text-2xl">programmer</h1>
      <PersonaSwitchPill to="model" />
    </main>
  )
}
