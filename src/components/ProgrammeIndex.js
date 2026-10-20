'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import Picture from './Picture';
import styles from './ProgrammeIndex.module.css';

export default function ProgrammeIndex({ items }) {
  const [active, setActive] = useState(0);
  const frameRef = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const layers = frame.querySelectorAll('[data-layer]');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      layers.forEach((el, i) => {
        const on = i === active;
        if (reduce || first.current) {
          gsap.set(el, { opacity: on ? 1 : 0, scale: 1 });
        } else {
          gsap.to(el, { opacity: on ? 1 : 0, scale: on ? 1 : 1.04, duration: 0.6, ease: 'power2.out', overwrite: true });
        }
      });
    }, frame);
    first.current = false;
    return () => ctx.kill();
  }, [active]);

  return (
    <div className={styles.wrap}>
      <div className={styles.frame} ref={frameRef} aria-hidden="true">
        {items.map((it, i) => (
          <div key={it.href} data-layer className={styles.layer} style={{ opacity: i === 0 ? 1 : 0 }}>
            <Picture slug={it.image} decorative sizes="(min-width: 1280px) 500px, 40vw" />
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        {items.map((it, i) => (
          <li key={it.href} className={i === active ? styles.current : ''} data-reveal>
            <Link
              href={it.href}
              className={styles.row}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className={styles.thumb}>
                <Picture slug={it.image} alt={it.alt} sizes="(min-width: 700px) 30vw, 92vw" />
              </span>
              <span className={styles.text}>
                <span className={styles.title}>{it.title}</span>
                <span className={styles.desc}>{it.text}</span>
                <span className={styles.more}>
                  {it.cta} <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
