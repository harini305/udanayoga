'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Picture from './Picture';
import styles from './Gallery.module.css';

/**
 * items: [{ slug, alt, caption?, shape?: 'wide' | 'tall' }]
 */
export default function Gallery({ items }) {
  const dialogRef = useRef(null);
  const stageRef = useRef(null);
  const triggerRefs = useRef([]);
  const [index, setIndex] = useState(null);

  const open = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const go = useCallback(
    (dir) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Return focus to the thumbnail that opened the viewer
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClose = () => {
      setIndex((i) => {
        if (i !== null) triggerRefs.current[i]?.focus();
        return null;
      });
    };
    dlg.addEventListener('close', onClose);
    return () => dlg.removeEventListener('close', onClose);
  }, []);

  // Subtle crossfade when the image changes
  useEffect(() => {
    if (index === null || !stageRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(stageRef.current, { opacity: 0.25, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });
    return () => tween.kill();
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  };

  // Close when clicking the backdrop
  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) close();
  };

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className={styles.grid}>
        {items.map((it, i) => (
          <li key={it.slug} className={`${styles.cell} ${it.shape ? styles[it.shape] : ''}`} data-reveal>
            <button
              type="button"
              ref={(el) => (triggerRefs.current[i] = el)}
              className={styles.thumb}
              onClick={() => open(i)}
              aria-label={`Open photo ${i + 1} of ${items.length}${it.caption ? `: ${it.caption}` : ''} in the viewer`}
            >
              <Picture slug={it.slug} alt={it.alt} sizes="(min-width: 1100px) 380px, (min-width: 700px) 45vw, 92vw" />
              {it.caption && <span className={styles.label}>{it.caption}</span>}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Photo viewer"
        onKeyDown={onKeyDown}
        onClick={onDialogClick}
      >
        {current && (
          <div className={styles.viewer}>
            <div className={styles.topbar}>
              <p className={styles.counter} aria-live="polite">
                {index + 1} / {items.length}
              </p>
              <button type="button" className={styles.close} onClick={close} autoFocus>
                Close<span aria-hidden="true"> ×</span>
              </button>
            </div>
            <figure className={styles.figure}>
              <div className={styles.stage} ref={stageRef}>
                <Picture key={current.slug} slug={current.slug} alt={current.alt} sizes="(min-width: 1200px) 1100px, 94vw" priority />
              </div>
              <figcaption className={styles.caption}>
                {current.caption && <strong>{current.caption}. </strong>}
                {current.alt}
              </figcaption>
            </figure>
            <div className={styles.controls}>
              <button type="button" className={styles.nav} onClick={() => go(-1)}>
                <span aria-hidden="true">←</span> Previous
              </button>
              <button type="button" className={styles.nav} onClick={() => go(1)}>
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
