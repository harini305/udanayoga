'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { nav } from '@/data/site';
import styles from './SiteHeader.module.css';

function isActive(pathname, item) {
  if (pathname === item.href) return true;
  return item.children?.some((c) => c.href === pathname) ?? false;
}

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" focusable="false">
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Index of a dropdown whose hover-open is suppressed after a link click,
  // until the pointer leaves that item (otherwise :hover keeps it open).
  const [suppressed, setSuppressed] = useState(null);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);
  const navRef = useRef(null);

  // Close everything on navigation
  useEffect(() => {
    setOpenIndex(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Desktop dropdowns: close on outside click
  useEffect(() => {
    if (openIndex === null) return;
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [openIndex]);

  // Mobile menu: lock scroll, Escape to close, keep focus inside
  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = [menuButtonRef.current, ...panelRef.current.querySelectorAll('a')];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      html.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen, closeMenu]);

  const onItemKeyDown = (e, i) => {
    if (e.key === 'Escape' && openIndex === i) {
      e.preventDefault();
      setOpenIndex(null);
      navRef.current?.querySelector(`[data-toggle="${i}"]`)?.focus();
    }
  };

  // Any navigation click closes menus, even when the link is the current page.
  const onNavigate = (i = null) => {
    setOpenIndex(null);
    setMenuOpen(false);
    if (i !== null) setSuppressed(i);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  const onItemBlur = (e, i) => {
    if (openIndex === i && !e.currentTarget.contains(e.relatedTarget)) setOpenIndex(null);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Udana Yoga Academy — home" onClick={() => onNavigate()}>
          <img src="/images/logo-brown.webp" width="320" height="197" alt="" className={styles.logo} />
        </Link>

        <nav aria-label="Main" className={styles.desktopNav} ref={navRef}>
          <ul className={styles.menu}>
            {nav.map((item, i) => {
              const active = isActive(pathname, item);
              if (!item.children) {
                return (
                  <li key={item.href} className={styles.item}>
                    <Link
                      href={item.href}
                      className={`${styles.link} ${active ? styles.active : ''}`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      onClick={() => onNavigate()}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = openIndex === i;
              const id = `submenu-${i}`;
              return (
                <li
                  key={item.href}
                  className={`${styles.item} ${styles.hasSub} ${open ? styles.open : ''} ${suppressed === i ? styles.suppressed : ''}`}
                  onKeyDown={(e) => onItemKeyDown(e, i)}
                  onBlur={(e) => onItemBlur(e, i)}
                  onMouseLeave={() => suppressed === i && setSuppressed(null)}
                >
                  <Link
                    href={item.href}
                    className={`${styles.link} ${active ? styles.active : ''}`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => onNavigate(i)}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={open}
                    aria-controls={id}
                    data-toggle={i}
                    onClick={() => {
                      setSuppressed(null);
                      setOpenIndex(open ? null : i);
                    }}
                  >
                    <span className="visually-hidden">{`${item.label} pages`}</span>
                    <Chevron />
                  </button>
                  <ul id={id} className={styles.submenu}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} aria-current={pathname === c.href ? 'page' : undefined} onClick={() => onNavigate(i)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link
            href="/contact/"
            className={`btn ${styles.cta}`}
            aria-current={pathname === '/contact/' ? 'page' : undefined}
            onClick={() => onNavigate()}
          >
            Contact
          </Link>
          <button
            type="button"
            ref={menuButtonRef}
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.burger} aria-hidden="true">
              <span />
              <span />
            </span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.panel} ${menuOpen ? styles.panelOpen : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Main mobile" className="container">
          <ul className={styles.mobileGroups}>
            <li>
              <Link onClick={() => onNavigate()} href="/" aria-current={pathname === '/' ? 'page' : undefined} className={styles.mobileTop}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <p className={styles.groupLabel}>{item.label}</p>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link onClick={() => onNavigate()} href={c.href} aria-current={pathname === c.href ? 'page' : undefined}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link onClick={() => onNavigate()} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={styles.mobileTop}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link onClick={() => onNavigate()} href="/contact/" aria-current={pathname === '/contact/' ? 'page' : undefined} className={styles.mobileTop}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
