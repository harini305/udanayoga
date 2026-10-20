import Link from 'next/link';
import Picture from '@/components/Picture';
import { PageHero, Facts, CtaBand, Accreditations } from '@/components/ui';
import { privateSessions as ps } from '@/data/site';
import styles from './private.module.css';

export const metadata = {
  title: 'Private Yoga Session in Bali',
  description:
    'Private yoga sessions in Bali with certified Udana Yoga teachers — at the studio, your villa or hotel in Jimbaran, Nusa Dua, Uluwatu, Kuta, Tuban and beyond. Prices per session.',
};

export default function PrivatePage() {
  return (
    <>
      <PageHero
        title="Private yoga sessions in Bali"
        lead="A practice designed just for you — personal attention, expert guidance and a session created around your body, mind and energy."
        image="headstand-assist"
        imagePosition="50% 30%"
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Teacher', value: ps.teacher },
            { label: 'Days & duration', value: 'Depend on your reservation' },
            { label: 'Areas', value: ps.areas },
          ]}
        />
        <div className="btn-row">
          <a href="#prices" className="btn">
            Prices
          </a>
          <Link href="/contact/" className="btn btn--ghost">
            Request a session
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="intro-title">
        <div className="container course-overview">
          <div className="prose" data-reveal>
            <h2 id="intro-title">A practice designed just for you</h2>
            {ps.intro.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
          <div className="course-overview__side" data-reveal>
            <blockquote className="pull-quote">
              <p>{ps.quote}</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-label="Who it is for and what is included">
        <div className={`container ${styles.cols}`}>
          <div data-reveal>
            <h2>Who is it for?</h2>
            <ul className="ticks">
              {ps.forWhom.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className={styles.welcome}>{ps.allWelcome}</p>
          </div>
          <div data-reveal>
            <h2>What your session may include</h2>
            <p className="muted">Depending on your needs, your private session may include:</p>
            <ul className="ticks">
              {ps.includes.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className={styles.welcome}>Every session is designed to support your unique journey.</p>
          </div>
        </div>
      </section>

      <section id="prices" className="section" aria-labelledby="prices-title">
        <div className="container split">
          <div data-reveal>
            <h2 id="prices-title">Locations &amp; prices</h2>
            <p>Private sessions are available:</p>
            <ul className="ticks" style={{ marginBottom: '2rem' }}>
              {ps.locations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <table className="price-table">
              <caption className="visually-hidden">Private session prices per session in Indonesian rupiah</caption>
              <thead>
                <tr>
                  <th scope="col">Session</th>
                  <th scope="col">Price per session</th>
                </tr>
              </thead>
              <tbody>
                {ps.prices.map((p) => (
                  <tr key={p.label}>
                    <th scope="row">{p.label}</th>
                    <td>{p.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="btn-row">
              <Link href="/contact/" className="btn">
                Request a private session
              </Link>
            </div>
          </div>
          <div className={styles.side} data-reveal>
            <div className="media media--portrait">
              <Picture slug="studio-group-yellow" sizes="(min-width: 880px) 40vw, 100vw" />
            </div>
            <Accreditations />
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore yoga’s transformative journey"
        text="Find balance and serenity through the practice — tell us when and where you would like to practise."
        primary={{ href: '/contact/', label: 'Request a session' }}
        secondary={{ href: '/udana-shala-class/', label: 'Group classes' }}
      />
    </>
  );
}
