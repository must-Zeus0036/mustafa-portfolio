export default function About() {
  return (
    <section id="about" className="py-22 px-8 sm:px-5 border-t border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow mb-11">Profile</div>
        <p className="text-[16.5px] text-ink-200 max-w-[70ch] leading-relaxed">
          I&apos;m a <strong className="text-brass-300 font-medium">B.Sc. Computer Science graduate</strong> from
          Kristianstad University (2023–2026), with a fullstack foundation and a particular interest in systems
          that sit close to hardware. My bachelor thesis at{' '}
          <strong className="text-brass-300 font-medium">Axis Communications</strong> combined LLMs, Python, and
          Rust to solve a genuinely hard translation problem — and it taught me how to work carefully in a
          professional R&amp;D environment, with Git/Gerrit-based code review, Linux, and structured engineering
          practice.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {[
            { label: 'Based in', value: 'Lund, Sweden' },
            { label: 'Graduated', value: 'June 2026' },
            { label: 'Languages spoken', value: 'Swedish · English · Arabic' },
          ].map((f) => (
            <div key={f.label} className="border-l-2 border-brass-500 pl-4">
              <div className="font-mono text-[11px] text-ink-400 uppercase tracking-wide">{f.label}</div>
              <div className="font-display text-[17px] mt-1.5 text-ink-100">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
