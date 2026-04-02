import React, { useEffect, useMemo, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(() => navItems, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a
          className="logo"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Sarvjeet Kaur home"
        >
          Sarvjeet Kaur
        </a>

        <nav className={`nav-links ${open ? 'mobile-open' : ''}`} aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
    </header>
  );
}

