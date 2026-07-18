'use client';

import { useEffect, useRef, useState } from 'react';

const LINES = [
  { html: '<span class="lang-tag c">C — before</span>', delay: 0 },
  { html: '<span class="cm">// allocate a resizable int buffer</span>', delay: 80 },
  { html: '<span class="kw">int</span>* buf = malloc(n * <span class="kw">sizeof</span>(<span class="kw">int</span>));', delay: 80 },
  { html: '<span class="kw">if</span> (buf == NULL) <span class="kw">return</span> -1;', delay: 80 },
  { html: '&nbsp;', delay: 80 },
  { html: '<div class="arrow-row">translated by the framework<div class="arrow-line"></div></div>', delay: 400 },
  { html: '<span class="lang-tag rust">Rust — after</span>', delay: 80 },
  { html: '<span class="cm">// growable, memory-safe, no manual free</span>', delay: 80 },
  { html: '<span class="kw">let</span> <span class="kw">mut</span> buf: <span class="ty">Vec</span>&lt;<span class="ty">i32</span>&gt; = <span class="ty">Vec</span>::with_capacity(n);', delay: 80 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = '';

    let t = 0;
    const timers = [];
    LINES.forEach((ln) => {
      t += ln.delay;
      const id = setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'code-line';
        div.innerHTML = ln.html;
        el.appendChild(div);
      }, reduced ? 0 : t);
      timers.push(id);
    });

    let interval;
    if (!reduced) {
      interval = setInterval(() => setTick((n) => n + 1), 7000);
    }
    return () => {
      timers.forEach(clearTimeout);
      if (interval) clearInterval(interval);
    };
  }, [tick]);

  return (
    <header id="top" className="pt-22 pb-24 px-8 sm:px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center pt-6">
        <div>
          <div className="mb-8 flex items-center gap-5">
            <div className="w-28 h-28 rounded-full overflow-hidden border border-ink-700 bg-ink-950">
              <img src="/ma.jpg" alt="Profile picture" className="w-full h-full object-cover" />
            </div>
            <div className="eyebrow text-ink-200">
              Software Engineer · Lund, Sweden
            </div>
          </div>
          <h1 className="font-display font-semibold text-[clamp(34px,4.4vw,54px)] leading-[1.08] tracking-tight text-ink-100">
            I turn <span className="text-brass-400">legacy systems</span> into what comes next.
          </h1>
          <p className="mt-5 text-[17px] text-ink-400 max-w-[46ch] leading-relaxed">
            Computer Science graduate with hands-on experience across systems programming,
            full-stack development, and applied AI — including building an LLM-driven
            framework that translates legacy C into idiomatic Rust.
          </p>
          <div className="mt-8 flex gap-3.5 flex-wrap">
            <a href="#projects" className="font-mono text-[13px] px-5 py-3 bg-brass-500 text-ink-950 font-medium rounded-sm hover:bg-brass-400 transition-colors">
              View projects →
            </a>
            <a href="#contact" className="font-mono text-[13px] px-5 py-3 border border-ink-700 text-ink-200 rounded-sm hover:border-brass-400 hover:text-brass-300 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="bg-black border border-ink-700 rounded-md overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-black border-b border-ink-700">
            <div className="w-2 h-2 rounded-full bg-ink-700" />
            <div className="w-2 h-2 rounded-full bg-ink-700" />
            <div className="w-2 h-2 rounded-full bg-ink-700" />
            <div className="font-mono text-[11px] text-ink-400 ml-1.5">
              translate.rs — bachelor thesis, Axis Communications
            </div>
          </div>
          <div ref={containerRef} className="font-mono text-[13px] px-5 py-5 min-h-[230px]" />
        </div>
      </div>

      <style jsx global>{`
        .lang-tag { display:inline-block; font-family: var(--font-mono); font-size:10px; letter-spacing:0.08em; padding:2px 8px; border-radius:2px; margin-bottom:12px; }
        .lang-tag.c { background: rgba(237, 237, 244, 0.15); color:#6FBFA0; }
        .lang-tag.rust { background: rgba(200,155,60,0.18); color:#E0BE72; }
        .kw { color:#E0BE72; }
        .ty { color:#6FBFA0; }
        .cm { color:#7A85A6; }
        .arrow-row { display:flex; align-items:center; gap:10px; margin:16px 0; font-family: var(--font-mono); font-size:11px; color:#7A85A6; }
        .arrow-line { flex:1; height:1px; background: linear-gradient(90deg, #232A44, #C89B3C); }
      `}</style>
    </header>
  );
}
