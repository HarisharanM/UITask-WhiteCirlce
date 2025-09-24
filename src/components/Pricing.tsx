import Section from "@/components/Section"

const tiers = [
  { name: "Basic",   featured: false, features: ["10 videos","Profile optimization","Content calendar","Profile grid creation","No Thumbnail"] },
  { name: "Growth",  featured: true,  features: ["20 videos","20 thumbnail design","Content strategy","Content scripting","Full social media handling","Research and analytics","Organic growth"] },
  { name: "Premium", featured: false, features: ["25 videos (premium editing)","25 high‑quality thumbnails","Guaranteed growth","Content strategy","Hooks + context scripting","Full social media handling","Research and analytics","Community management"] },
]

export default function Pricing() {
  return (
    <Section id="pricing">
      <h2 className="mb-10 text-center text-3xl font-bold">Pricing</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`surface p-8 transition hover:border-wc_lime/30 ${t.featured ? "ring-1 ring-wc_teal/40" : ""}`}
          >
            <div className={`inline-block rounded-md px-3 py-1 font-semibold ${t.featured ? "bg-wc_teal/20 text-wc_teal" : "bg-wc_lime/15 text-wc_lime"}`}>
              {t.name}
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className={`mt-1 inline-block h-2 w-2 rounded-full ${t.featured ? "bg-wc_teal" : "bg-wc_lime"}`} />
                  <span className="text-wc_text/90">{f}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold transition ${
              t.featured ? "border border-wc_teal/60 text-wc_teal hover:bg-wc_teal hover:text-black"
                         : "border border-wc_lime/50 text-wc_text hover:bg-wc_lime hover:text-black"
            }`}>
              Book A Call
            </button>
          </div>
        ))}
      </div>
    </Section>
  )
}
