import Link from 'next/link';
import Picture from '@/components/Picture';
import Timetable from '@/components/Timetable';
import { PageHero, Facts, CtaBand, Arrow } from '@/components/ui';
import { shala } from '@/data/site';
import styles from './shala.module.css';

export const metadata = {
  title: 'Udana Shala Class',
  description:
    'Yoga classes at Udana Shala, Jimbaran, Bali, Monday to Saturday: Hatha, Vinyasa, Wheel Yoga, Soulful Hatha, Energize Flow and Sky Flow Aerial. Weekly timetable and class prices.',
};

export default function ShalaPage() {
  return (
    <>
      <PageHero
        title="Udana Shala classes"
        lead={shala.intro}
        image="studio-students"
        imagePosition="60% 50%"
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Days', value: shala.days },
            { label: 'Location', value: shala.location },
          ]}
        />
        <div className="btn-row">
          <a href="#timetable" className="btn">
            Weekly timetable
          </a>
          <a href="#prices" className="btn btn--ghost">
            Class prices
          </a>
        </div>
      </PageHero>

      <section id="timetable" className="section" aria-labelledby="timetable-title">
        <div className="container">
          <div className={styles.head} data-reveal>
            <h2 id="timetable-title">Our class schedule</h2>
            <p className="note note--pending">
              <span>
                <strong>Please confirm before you come.</strong> This is the timetable published on the current website, shown as
                a static listing — it is not updated live, and classes can change.
              </span>
            </p>
          </div>
          <div data-reveal>
            <Timetable entries={shala.timetable} days={shala.days6} />
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="classes-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="classes-title">Class styles</h2>
            <p className={styles.mission}>{shala.mission}</p>
          </div>
          <ul className={styles.classes}>
            {shala.classes.map((c) => (
              <li key={c.name} data-reveal>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="prices" className="section" aria-labelledby="prices-title">
        <div className="container split split--wide-text">
          <div data-reveal>
            <h2 id="prices-title">Class prices</h2>
            <p className="muted">We provide mats and props.</p>
            <table className="price-table">
              <caption className="visually-hidden">Udana Shala class prices in Indonesian rupiah</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Ticket</span>
                  </th>
                  {shala.prices.columns.map((c) => (
                    <th scope="col" key={c}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shala.prices.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="btn-row">
              <Link href="/contact/" className="btn">
                Ask about a class
              </Link>
            </div>
            <p className={styles.more}>
              Looking for one-to-one guidance?{' '}
              <Link href="/private-yoga-session-in-bali/" className="text-link">
                Private sessions <Arrow />
              </Link>
            </p>
          </div>
          <div className="media media--landscape" data-reveal>
            <Picture slug="aerial-studio" sizes="(min-width: 880px) 45vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to take your practice further?"
        text="Deepen your practice with an Udana Yoga teacher-training course, from one week to the full 200 hours."
        primary={{ href: '/yoga-teacher-training-programs/', label: 'Teacher training' }}
        secondary={{ href: '/contact/', label: 'Contact us' }}
      />
    </>
  );
}
