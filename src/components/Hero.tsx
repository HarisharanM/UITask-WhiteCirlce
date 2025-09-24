export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h1 className="text-balance text-4xl md:text-6xl font-extrabold leading-tight">
          We help entrepreneurs build personal brands through content
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-wc_muted">
          Strategy, editing, and distribution—crafted for predictable growth.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="rounded-full bg-wc_lime px-6 py-3 font-semibold text-black hover:brightness-95">Start Here</a>
          <a className="rounded-full border border-wc_teal/60 px-6 py-3 font-semibold text-wc_teal hover:bg-wc_teal/10">View Work</a>
        </div>
      </div>
    </section>
  )
}
