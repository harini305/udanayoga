'use client';

import { useEffect } from 'react';

/**
 * Publishes the footer's rendered height as --footer-h so the last section of
 * each page can size itself to fill the screen together with the footer.
 */
export default function FooterFit() {
  useEffect(() => {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;
    const set = () => document.documentElement.style.setProperty('--footer-h', `${Math.ceil(footer.getBoundingClientRect().height)}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
