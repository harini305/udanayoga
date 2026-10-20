'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Predictable scroll position on navigation:
 * - New page via a link → start at the very top (not under the sticky header).
 * - Link with a #hash → let the browser scroll to that section.
 * - Back/forward → keep the restored position.
 * - Link to the page you are already on → smooth-scroll back to the top.
 */
export default function ScrollManager() {
  const pathname = usePathname();
  const fromHistory = useRef(false);
  const firstRender = useRef(true);

  useEffect(() => {
    const onPop = () => {
      fromHistory.current = true;
    };
    const onClick = (e) => {
      // Runs in the capture phase: Next.js <Link> calls preventDefault() later in bubbling.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!a || a.target === '_blank') return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      if (url.pathname === window.location.pathname) {
        // Wait until the mobile menu has released its scroll lock and Next.js
        // has finished handling the same-URL navigation, then glide to the top.
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: reduce ? 'auto' : 'smooth' }), 80);
      }
    };
    window.addEventListener('popstate', onPop);
    document.addEventListener('click', onClick, true);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
