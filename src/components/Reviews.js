import { reviews } from '@/data/reviews';
import ReviewText from './ReviewText';
import styles from './Reviews.module.css';

const LANG = { es: 'Spanish', id: 'Indonesian' };

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Verbatim Google reviews captured from the original site. `names` selects a subset. */
export default function Reviews({ names, layout = 'grid' }) {
  const list = names ? names.map((n) => reviews.find((r) => r.name === n)).filter(Boolean) : reviews;
  return (
    <ul className={`${styles.list} ${styles[layout]}`}>
      {list.map((r) => (
        <li key={r.name} className={styles.item} data-reveal>
          <figure>
            <ReviewText paragraphs={r.text.split('\n').filter(Boolean)} lang={r.lang} long={r.text.length > 360} />
            <figcaption className={styles.by}>
              <span className={styles.name}>{r.name}</span>
              <span>
                Google review · {formatDate(r.date)}
                {LANG[r.lang] ? ` · in ${LANG[r.lang]}` : ''}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
