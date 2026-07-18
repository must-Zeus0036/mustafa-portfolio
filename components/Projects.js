const PROJECTS = [
  {
    tag: 'Bachelor Thesis · Axis Communications',
    title: 'AI Framework for C → Rust Translation',
    desc: 'An LLM-driven framework that translates legacy C codebases into idiomatic, memory-safe Rust — built and evaluated within a professional R&D team over six months.',
    chips: ['Python', 'Rust', 'C', 'LLMs', 'Linux'],
  },
  {
    tag: 'IoT · Embedded',
    title: 'Interactive House',
    desc: 'A connected home system pairing an Arduino sensor layer with a web and mobile interface - covering firmware, data flow, and UI in one project.',
    chips: ['Arduino', 'C++', 'Rust', 'Next.js', 'TypeScript', 'Firebase', 'Web', 'Mobile'],
  },
  {
    tag: 'Full-Stack',
    title: 'Linux Platform Full-Stack Project',
    desc: 'An end-to-end web application built and deployed on a Linux platform, with a React/Next.js frontend backed by a Flask API.',
    chips: ['React', 'JavaScript', 'MongoDB', 'HTML', 'CSS', 'Docker', 'Linux'],
  },
  {
    tag: 'Machine Learning',
    title: 'SMS Spam Classification',
    desc: 'A supervised text-classification model trained to distinguish spam from legitimate SMS messages, from data cleaning through evaluation.',
    chips: ['Python', 'scikit-learn', 'NLP'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-22 px-8 sm:px-5 border-t border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow mb-11">Projects</div>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] text-ink-100 tracking-tight mb-9">
          Selected work
        </h2>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-700 border border-ink-700">
          {PROJECTS.map((p) => (
            <div key={p.title} className="bg-ink-950 hover:bg-ink-850 transition-colors p-8">
              <div className="font-mono text-[10.5px] text-brass-300 uppercase tracking-wide">{p.tag}</div>
              <div className="font-display text-xl mt-2.5 text-ink-100 font-semibold">{p.title}</div>
              <p className="mt-3 text-[14.5px] text-ink-400 leading-relaxed">{p.desc}</p>
              <div className="mt-4.5 flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span key={c} className="font-mono text-[11px] px-2.5 py-1 border border-ink-700 text-ink-200 rounded-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
