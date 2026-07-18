export default function Footer() {
  const links = [
    { href: 'mailto:mustafa.albayati80@outlook.com', label: 'mustafa.albayati80@outlook.com' },
    { href: 'tel:+46762055512', label: '+46 76 20 555 12' },
    { href: 'https://www.linkedin.com/in/mustafa-al-bayati-4abb42263/', label: 'linkedin.com/in/mustafa-al-bayati' },
    { href: 'https://github.com/must-Zeus0036', label: 'github.com/must-Zeus0036' },
  ];

  return (
    <footer id="contact" className="py-20 px-8 sm:px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <div className="eyebrow mb-4">Contact</div>
            <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] text-ink-100 tracking-tight">
              Let&apos;s build something.
            </h2>
            <div className="flex flex-col gap-2.5 mt-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-mono text-[14.5px] text-ink-200 hover:text-brass-300 border-b border-transparent hover:border-brass-500 transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Location</div>
            <p className="text-ink-400 text-[14.5px]">
              Malakitgatan 10
              <br />
              224 88 Lund, Sweden
            </p>
          </div>
        </div>
        <div className="font-mono text-xs text-ink-700 mt-14 text-right sm:text-left">
          Mustafa Al-Bayati — built 2026
        </div>
      </div>
    </footer>
  );
}
