'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Timetable.module.css';

const rowLabel = { 700: '7:00 am', 900: '9:00 am', 1100: '11:00 am', 1600: '4:00 pm', 1700: '5:00 pm' };

function Entry({ e }) {
  return (
    <>
      <span className={styles.cls}>{e.cls}</span>
      {e.teacher && <span className={styles.teacher}>with {e.teacher}</span>}
      {e.confirm && (
        <span className={styles.confirm}>
          <span aria-hidden="true">* </span>Time to be confirmed
        </span>
      )}
    </>
  );
}

/**
 * Static weekly timetable from the original Udana Shala page.
 * ≥ 760px: week grid table. Smaller screens: one day at a time via tabs.
 */
export default function Timetable({ entries, days }) {
  const [day, setDay] = useState(days[0]);
  const tabRefs = useRef([]);
  const rows = [...new Set(entries.map((e) => e.sort))].sort((a, b) => a - b);

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
    if (days.includes(today)) setDay(today);
  }, [days]);

  const onKeyDown = (e) => {
    const i = days.indexOf(day);
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % days.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + days.length) % days.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = days.length - 1;
    if (next !== null) {
      e.preventDefault();
      setDay(days[next]);
      tabRefs.current[next]?.focus();
    }
  };

  const dayEntries = entries.filter((e) => e.day === day).sort((a, b) => a.sort - b.sort);
  const notes = entries.filter((e) => e.confirm);

  return (
    <div className={styles.wrap}>
      {/* Week grid */}
      <div className={styles.week}>
        <table className={styles.table}>
          <caption className="visually-hidden">Weekly class timetable, Monday to Saturday</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Start time</span>
              </th>
              {days.map((d) => (
                <th scope="col" key={d}>
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r}>
                <th scope="row">{rowLabel[r]}</th>
                {days.map((d) => {
                  const e = entries.find((x) => x.day === d && x.sort === r);
                  return (
                    <td key={d} className={e ? styles.filled : styles.blank}>
                      {e ? <Entry e={e} /> : <span className="visually-hidden">No class</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Day view */}
      <div className={styles.dayView}>
        <div role="tablist" aria-label="Choose a day" className={styles.dayTabs} onKeyDown={onKeyDown}>
          {days.map((d, i) => (
            <button
              key={d}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`day-tab-${d}`}
              aria-selected={day === d}
              aria-controls="day-panel"
              tabIndex={day === d ? 0 : -1}
              onClick={() => setDay(d)}
              className={styles.dayTab}
            >
              <span aria-hidden="true">{d.slice(0, 3)}</span>
              <span className="visually-hidden">{d}</span>
            </button>
          ))}
        </div>
        <div role="tabpanel" id="day-panel" aria-labelledby={`day-tab-${day}`} className={styles.dayPanel}>
          <h3 className={styles.dayTitle}>{day}</h3>
          <ul className={styles.dayList}>
            {dayEntries.map((e) => (
              <li key={e.cls + e.sort}>
                <span className={styles.time}>{e.time}</span>
                <span className={styles.detail}>
                  <Entry e={e} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {notes.length > 0 && (
        <p className={styles.footnote}>
          {notes.map((n) => (
            <span key={n.cls}>
              * {n.cls} ({n.day}): {n.confirm}{' '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
