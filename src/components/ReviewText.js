'use client';

import { useId, useState } from 'react';
import styles from './Reviews.module.css';

/** Long reviews are clamped with a toggle; the full verbatim text is always in the DOM. */
export default function ReviewText({ paragraphs, lang, long }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <blockquote lang={lang} id={id} className={`${styles.quote} ${long && !open ? styles.clamped : ''}`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      {long && (
        <button type="button" className={styles.more} aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          {open ? 'Show less' : 'Read full review'}
        </button>
      )}
    </>
  );
}
