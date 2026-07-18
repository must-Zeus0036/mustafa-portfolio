const ITEMS = [
  {
    date: 'Jan 2026 — Jun 2026',
    role: 'Bachelor Thesis Intern',
    org: 'Axis Communications, Lund',
    desc: 'Built an AI-based framework translating legacy C code into idiomatic Rust. Worked with Python, LLMs, and Linux within a professional R&D team, using Git/Gerrit-based code review workflows.',
  },
  {
    date: '2023 — 2026',
    role: 'B.Sc. Computer Science and Software Development',
    org: 'Kristianstad University',
    desc: 'Coursework spanning systems programming, software architecture, and applied computer security, alongside project-based UI design work.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-22 px-8 sm:px-5 border-t border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow mb-11">Background</div>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] text-ink-100 tracking-tight mb-2">
          Experience &amp; education
        </h2>

        <div className="mt-8">
          {ITEMS.map((it) => (
            <div key={it.role} className="grid sm:grid-cols-[160px_1fr] gap-7 py-6 border-b border-ink-800">
              <div className="font-mono text-[12.5px] text-ink-400">{it.date}</div>
              <div>
                <div className="font-display text-lg text-ink-100 font-semibold">{it.role}</div>
                <div className="text-sm text-brass-300 mt-0.5">{it.org}</div>
                <p className="mt-2.5 text-[14.5px] text-ink-400 max-w-[60ch] leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
