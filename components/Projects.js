const PROJECTS = [
  {
    tag: 'Bachelor Thesis · Axis Communications - Lund',
    title: 'Efficient C to Rust Translation',
    desc: 'Hybrid pipeline (Hardcoded rules + LLMs + specific prompts) that translates legacy C codebases into idiomatic, memory-safe Rust — built and evaluated within a professional R&D team over 5 months.',
    chips: ['Python', 'Rust', 'C', 'LLMs', 'Linux'],
  },
  {
    tag: 'IoT · Embedded',
    title: 'Interactive House',
    desc: 'A connected home system pairing an Arduino sensor layer with a web and mobile interface - covering firmware, data flow, and UI in one project.',
    chips: ['Arduino', 'C++', 'Rust', 'Next.js', 'TypeScript', 'Firebase', 'Web', 'Mobile'],
    github: 'https://github.com/DanielJ0131/interactive-house.git',
  },
  {
    tag: 'Full-Stack',
    title: 'Linux Platform Full-Stack Project',
    desc: 'An end-to-end web application built and deployed on a Linux platform, with a React/Next.js frontend backed by a Flask API.',
    chips: ['React', 'JavaScript', 'MongoDB', 'HTML', 'CSS', 'Docker', 'Linux'],
    github: 'https://github.com/must-Zeus0036/LXLP.git',
  },
  {
    tag: 'Machine Learning',
    title: 'SMS Spam Classification',
    desc: 'A supervised text-classification model trained to distinguish spam from legitimate SMS messages, from data cleaning through evaluation.',
    chips: ['Python', 'scikit-learn', 'NLP'],
    github: 'https://github.com/must-Zeus0036/Final-Project-Machine-Learning.git',
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
            <a key={p.title} href={p.github} target="_blank" rel="noopener noreferrer" className="bg-ink-950 hover:bg-ink-850 transition-colors p-8 block">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
