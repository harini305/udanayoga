import Link from 'next/link';
import Picture from '@/components/Picture';
import { PageHero, CtaBand, Accreditations, Arrow } from '@/components/ui';
import { programmes, programmeOrder, programmesIntro, yttcCommon } from '@/data/site';
import styles from './programmes.module.css';

export const metadata = {
  title: 'Yoga Teacher Training Programs',
  description:
    'Compare Udana Yoga’s Yoga Alliance teacher trainings in Bali: 50-hour, 100-hour and 200-hour YTTC and the 50-hour Sky Flow aerial yoga course.',
};

const rows = [
  { key: 'yttc50', where: 'To be confirmed', who: 'To be confirmed', length: 'One week' },
  { key: 'yttc100', where: 'Retreat resort, East Bali', who: 'Putu Dwijendra & Tomoko', length: '12 days*' },
  { key: 'yttc200', where: 'Retreat resort, East Bali, or Jimbaran Shala', who: 'Putu Dwijendra & Tomoko', length: '25 nights, 26 days*' },
  { key: 'aerial50', where: 'Jimbaran, Bali', who: 'Tomoko', length: '7 days' },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        title="Yoga teacher training"
        lead="Yoga Alliance teacher-training courses in Bali, from a one-week foundation to the full 200-hour training, plus a dedicated aerial yoga course."
        image="graduation-celebration"
      />

      <section className="section" aria-labelledby="compare-title">
        <div className="container">
          <div className={styles.intro} data-reveal>
            <p className={styles.statement}>{programmesIntro}</p>
          </div>

          <h2 id="compare-title" className={styles.compareTitle} data-reveal>
            Compare the courses
          </h2>
          <div data-reveal>
            <table className={styles.compare}>
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Hours</th>
                  <th scope="col">Length</th>
                  <th scope="col">Where</th>
                  <th scope="col">Trainers</th>
                  <th scope="col">
                    <span className="visually-hidden">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const p = programmes[r.key];
                  return (
                    <tr key={r.key}>
                      <th scope="row">
                        <Link href={p.href}>{p.shortName}</Link>
                      </th>
                      <td data-label="Hours">{p.hours}</td>
                      <td data-label="Length">{r.length}</td>
                      <td data-label="Where">{r.where}</td>
                      <td data-label="Trainers">{r.who}</td>
                      <td className={styles.go}>
                        <Link href={p.href} className="text-link" aria-label={`${p.shortName} details`}>
                          Details <Arrow />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className={styles.footnote}>
              * The current website also describes the 100-hour course as “two weeks” and the 200-hour course as “three weeks”. Please
              check the exact length when you enquire.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-label="Course summaries">
        <div className="container">
          <div className={styles.courses}>
            {programmeOrder.map((k, i) => {
              const p = programmes[k];
              return (
                <article key={k} className={`${styles.course} ${i % 2 ? styles.flip : ''}`} data-reveal>
                  <div className={`media ${styles.courseImg}`}>
                    <Picture slug={p.image} sizes="(min-width: 880px) 42vw, 100vw" />
                  </div>
                  <div className={styles.courseText}>
                    <h2 className={styles.courseTitle}>{p.name}</h2>
                    <p>{p.summary}</p>
                    <Link href={p.href} className="text-link">
                      {`Read more about the ${p.shortName}`} <Arrow />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="why-title">Deepen your yoga journey with Udana</h2>
            <p>Blending traditional yoga with modern insight for inner growth.</p>
          </div>
          <ul className={styles.benefits}>
            {yttcCommon.benefits.map((b) => (
              <li key={b.title} data-reveal>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.accreditations} data-reveal>
            <Accreditations />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which course is right for you?"
        text="Tell us about your practice and goals, and ask which course would suit you."
        primary={{ href: '/contact/', label: 'Ask about a course' }}
      />
    </>
  );
}
