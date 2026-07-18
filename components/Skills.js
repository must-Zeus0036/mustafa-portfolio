const GROUPS = [
  { label: 'Languages', items: ['C', 'C++', 'Rust', 'Python', 'C# (.NET)', 'Java (OOP)', 'TypeScript / JavaScript'] },
  { label: 'Web', items: ['React', 'Next.js', 'Flask'] },
  { label: 'Systems & Tools', items: ['Linux', 'Git / Gerrit', 'Docker', 'SQL'] },
  { label: 'AI / ML', items: ['LLM tooling', 'Prompt engineering', 'Applied ML basics'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-22 px-8 sm:px-5 border-t border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow mb-11">Capabilities</div>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] text-ink-100 tracking-tight mb-10">
          Technical skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <div className="font-mono text-[11px] text-brass-300 uppercase tracking-wide mb-3.5">{g.label}</div>
              <ul className="text-[14.5px] text-ink-200">
                {g.items.map((item) => (
                  <li key={item} className="py-1.5 border-b border-ink-800">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
