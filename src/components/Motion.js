'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide scroll reveals.
 *
 * Elements marked [data-reveal] are visible in the server-rendered HTML. Only
 * elements that start *below* the fold are hidden by JS and revealed on scroll,
 * so nothing above the fold flashes, nothing is hidden without JS, and
 * reduced-motion users get no motion at all. Everything is scoped to a
 * gsap.context and reverted on route change/unmount.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const vh = window.innerHeight;

      // Hero entrance: a short settle of the hero copy (already visible).
      const hero = document.querySelector('[data-hero-copy]');
      if (hero) {
        gsap.from(hero.children, {
          y: 18,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          clearProps: 'transform,opacity',
        });
      }

      const els = gsap.utils
        .toArray('[data-reveal]')
        .filter((el) => el.getBoundingClientRect().top > vh * 0.92);

      if (els.length) {
        gsap.set(els, { opacity: 0, y: 28 });
        ScrollTrigger.batch(els, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              stagger: 0.09,
              overwrite: true,
              clearProps: 'transform,opacity',
            }),
        });
      }

      // Gentle parallax on images marked [data-parallax] (transform only).
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });

      ScrollTrigger.refresh();
    });

    return () => mm.revert();
  }, [pathname]);

  return null;
}
