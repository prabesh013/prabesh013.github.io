import { useEffect, useState } from 'react';
import { annotate, annotationGroup } from 'rough-notation';
import AOS from 'aos';

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function SocialIcon({ kind }) {
  return <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" aria-hidden="true">
    {kind === 'github' ? <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" /> : <path d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0ZM7.1 20H3.55V9.33H7.1ZM5.33 7.88a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM20.45 20H16.9v-5.19c0-3.13-3.55-2.9-3.55 0V20H9.8V9.33h3.55v1.71c1.65-3.05 7.1-3.28 7.1 2.92Z" />}
  </svg>;
}

export function Navigation({ page }) {
  const [open, setOpen] = useState(false);
  const home = page === 'home';
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3" aria-label="Main navigation"
      onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
      <div className="container">
        <a className="navbar-brand px-2 py-0" href={home ? '#hero' : './index.html'} aria-label="Prabesh Nepal home">PN</a>
        <button id="menu-toggle" className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-controls="navbarContent" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navigation-links">
            {['About', 'Qualifications', 'Projects', 'Contact'].map(label => <li className="nav-item" key={label}>
              <a className="nav-link" href={`${home ? '' : './index.html'}#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>
            </li>)}
            <li className="nav-item"><a className="nav-link" href="./blog.html" aria-current={page === 'blog' ? 'page' : undefined}>Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </>;
}

export function Footer() {
  return <footer className="bg-light border-top py-4"><div className="container"><p className="text-center mb-0">Copyright © {new Date().getFullYear()}. Prabesh Nepal</p></div></footer>;
}

export function QualificationCard({ item, animation }) {
  return <div className="card" data-aos={animation}><div className="card-body">
    <h4 className="card-title">{item.title}</h4>
    <p className="card-subtitle mb-2 text-muted">{item.organization}</p>
    {item.date && <p className="card-text date">{item.date}</p>}
    {item.description && <p className="card-text">{item.description}</p>}
    {item.url && <a href={item.url} className="card-link" aria-label={`Visit ${item.organization}`}><Arrow /></a>}
  </div></div>;
}

export function useAnnotations() {
  useEffect(() => {
    let cancelled = false;
    let annotations = [];
    const prepare = async () => {
      if (document.fonts) await document.fonts.ready;
      if (cancelled) return;
      const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const targets = [
        ['.navbar-brand', 'box', '#1c1c1c'], ['.name', 'highlight', '#FDE047'],
        ['.cs', 'box', 'pink'], ['.st', 'highlight', '#BFDBFE'],
        ['.ce', 'highlight', 'pink'], ['.location', 'highlight', 'pink'],
        ['.kec', 'highlight', 'pink'], ['#edu', 'underline', 'green'],
        ['#exe', 'underline', 'green'], ['.teaching-highlight', 'highlight', '#FDE047'],
      ];
      annotations = targets.flatMap(([selector, type, color]) => {
        const element = document.querySelector(selector);
        return element ? [annotate(element, { type, color, animate, multiline: true })] : [];
      });
      annotationGroup(annotations).show();
    };
    prepare();
    return () => { cancelled = true; annotations.forEach(annotation => annotation.remove()); };
  }, []);
}

// Initialize after React mounts the animated elements. Avoid duplicate global
// listeners when StrictMode replays effects in development.
let scrollAnimationsInitialized = false;
export function useScrollAnimations() {
  useEffect(() => {
    let cancelled = false;
    if (!scrollAnimationsInitialized) {
      AOS.init({ once: false, disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches });
      scrollAnimationsInitialized = true;
    } else {
      AOS.refreshHard();
    }
    document.fonts?.ready.then(() => { if (!cancelled) AOS.refresh(); });
    return () => { cancelled = true; };
  }, []);
}
