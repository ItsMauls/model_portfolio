/** Decorative sunset/white column split behind the header and hero content. */
export function SplitBackdrop() {
  return (
    <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 grid grid-cols-1 grid-rows-2 lg:grid-rows-1">
      <div className="relative h-full min-h-[500px] min-w-0 overflow-hidden bg-[radial-gradient(circle_at_10%_25%,#ff8a3d_0%,#c8461d_48%,#8e2509_95%)]">
        <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-[#ffd36b]/35 blur-3xl" />
        <div className="absolute right-[-10%] bottom-10 h-[380px] w-[380px] rounded-full bg-[#ff5518]/40 blur-2xl" />
        <div className="absolute top-1/4 right-[-80px] h-[520px] w-[520px] rounded-full bg-white/5 blur-xl" />
      </div>
      <div className="h-full min-w-0 bg-white" />
    </div>
  )
}
