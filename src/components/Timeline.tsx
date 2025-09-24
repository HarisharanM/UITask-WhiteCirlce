import Section from "./Section"

export default function Timeline() {
  const steps = [
    { title: "Step 1", body: "3–4 month plan for organic growth with minimal overhead." },
    { title: "Step 2", body: "Content system and distribution channels set up." },
    { title: "Step 3", body: "Analyze data and iterate to accelerate results." },
    { title: "Step 4", body: "Scale reach and convert to predictable revenue." },
  ]

  return (
    <Section>
      <h2 className="mb-10 text-center text-3xl font-bold">How it Works</h2>
      <ol className="relative border-l border-wc_teal/30 pl-8">
        {steps.map((s, i) => (
          <li key={s.title} className="relative pb-10">
            <span
              className="absolute left-[-10px] top-1 h-5 w-5 -translate-x-1/2 rounded-full
                         bg-gradient-to-b from-wc_lime to-wc_teal ring-2 ring-wc_bg"
              aria-hidden
            />
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-wc_muted">{s.body}</p>
            {i !== steps.length - 1 && (
              <span className="absolute left-[-1px] bottom-0 h-10 w-px bg-wc_teal/20" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
