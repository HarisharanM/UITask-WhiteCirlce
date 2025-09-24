import Section from "./Section"

export default function Stats() {
  const items = [
    { value: "154M+", label: "Million Views" },
    { value: "13,333+", label: "Watch Hours" },
    { value: "5,233+", label: "Videos Created" },
  ]

  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
        {items.map((x) => (
          <div key={x.label} className="surface p-8 transition hover:border-wc_lime/30">
            <div className="text-5xl font-extrabold tracking-tight">
              <span className="text-wc_lime">{x.value}</span>
            </div>
            <div className="mt-2 text-sm text-wc_muted">{x.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

