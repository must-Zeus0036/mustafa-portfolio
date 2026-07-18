export default function Nav() {
  const links = [
    { href: '#top', label: 'Profile' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-ink-950/85 backdrop-blur-md border-b border-ink-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 h-16 flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono font-semibold text-sm tracking-wide text-ink-100 whitespace-nowrap flex-shrink-0">
          MUSTAFA<span className="text-brass-400">.</span>AL-BAYATI
        </div>
        <div className="w-full sm:w-auto">
          <div className="flex flex-wrap justify-end gap-3 sm:gap-7 text-[13px] font-mono text-ink-400">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink-100 transition-colors inline-block">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
