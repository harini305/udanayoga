'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Schedule.module.css';

const fmt = (iso, opts) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { timeZone: 'UTC', ...opts });

function formatRange({ start, end }) {
  const sameMonth = start.slice(0, 7) === end.slice(0, 7);
  const a = fmt(start, sameMonth ? { day: 'numeric' } : { day: 'numeric', month: 'short' });
  const b = fmt(end, { day: 'numeric', month: 'short', year: 'numeric' });
  return `${a} – ${b}`;
}

/**
 * Static course schedule, rebuilt from the original site's popups.
 * Only dates that start after "today" are shown as upcoming. `builtOn` gives the
 * server and first client render the same date (no hydration mismatch); the
 * visitor's real date is applied after mount.
 */
export default function Schedule({ formats, builtOn }) {
  const firstUpcoming = (day) => Math.max(0, formats.findIndex((f) => f.dates.some((d) => d.start > day)));
  const [today, setToday] = useState(builtOn);
  const [active, setActive] = useState(() => firstUpcoming(builtOn));
  const [touched, setTouched] = useState(false);
  const tabRefs = useRef([]);
  const uid = useId();

  useEffect(() => {
    const d = new Date();
    const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    setToday(local);
    if (!touched) setActive(firstUpcoming(local));
  }, []);

  const onKeyDown = (e) => {
    const n = formats.length;
    let next = null;
    if (e.key === 'ArrowRight') next = (active + 1) % n;
    if (e.key === 'ArrowLeft') next = (active - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next !== null) {
      e.preventDefault();
      setTouched(true);
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className={styles.schedule}>
      {formats.length > 1 && (
        <div role="tablist" aria-label="Course format" className="tablist" onKeyDown={onKeyDown}>
          {formats.map((f, i) => (
            <button
              key={f.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`${uid}-tab-${f.id}`}
              aria-selected={active === i}
              aria-controls={`${uid}-panel-${f.id}`}
              tabIndex={active === i ? 0 : -1}
              className="tab"
              onClick={() => {
                setTouched(true);
                setActive(i);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {formats.map((f, i) => {
        const upcoming = f.dates.filter((d) => d.start > today);
        return (
          <div
            key={f.id}
            role={formats.length > 1 ? 'tabpanel' : undefined}
            id={`${uid}-panel-${f.id}`}
            aria-labelledby={formats.length > 1 ? `${uid}-tab-${f.id}` : undefined}
            hidden={active !== i}
            className={styles.panel}
          >
            <div className={styles.grid}>
              <div>
                <h3 className={styles.title}>Upcoming dates</h3>
                {upcoming.length ? (
                  <ul className={styles.dates}>
                    {upcoming.map((d) => (
                      <li key={d.start}>
                        <span className={styles.range}>{formatRange(d)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.empty}>
                    No upcoming dates are currently listed for this format. <Link href="/contact/">Ask us about the next intake</Link>.
                  </p>
                )}
                <dl className={styles.meta}>
                  <div>
                    <dt>Format</dt>
                    <dd>{f.format}</dd>
                  </div>
                  {f.language && (
                    <div>
                      <dt>Language</dt>
                      <dd>{f.language}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Includes</dt>
                    <dd>{f.includes}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className={styles.title}>Price</h3>
                <table className="price-table">
                  <caption className="visually-hidden">{`${f.label} price`}</caption>
                  <tbody>
                    {f.prices.map((p) => (
                      <tr key={p.label}>
                        <th scope="row">{p.label}</th>
                        <td>{p.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {f.priceNote && <p className={styles.priceNote}>{f.priceNote}</p>}
                <Link href="/contact/" className="btn" style={{ marginTop: '1.5rem' }}>
                  Enquire about these dates
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <p className={styles.disclaimer}>
        Dates and prices are copied from the current Udana Yoga website and are not a live booking calendar. Places are
        confirmed by the academy after you get in touch.
      </p>
    </div>
  );
}
