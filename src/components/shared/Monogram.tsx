/** The one mark both personas share. Inherits colour from its container. */
export function Monogram({ className = '', title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {/* M */}
      <path d="M4 26V6l8 12 8-12v20" />
      {/* I */}
      <path d="M32 6h12M32 26h12M38 6v20" />
    </svg>
  )
}
