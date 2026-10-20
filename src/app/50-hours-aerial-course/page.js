import Link from 'next/link';
import Picture from '@/components/Picture';
import Schedule from '@/components/Schedule';
import Curriculum from '@/components/Curriculum';
import { PageHero, Facts, CtaBand, OtherProgrammes } from '@/components/ui';
import { programmes, aerialContent } from '@/data/site';
import styles from './aerial.module.css';

const p = programmes.aerial50;
const builtOn = new Date().toISOString().slice(0, 10);

export const metadata = {
  title: '50 Hours – Aerial Course',
  description:
    'Udana Sky Flow Aerial Yoga — a 50-hour, 7-day aerial yoga teacher training with Tomoko in Jimbaran, Bali. Course content, benefits, listed dates and prices.',
};

export default function AerialPage() {
  return (
    <>
      <PageHero
        title="Sky Flow Aerial Yoga — 50 Hours"
        lead="A week-long aerial yoga teacher training with Tomoko at the Udana studio in Jimbaran — from the basics to intermediate poses, and how to teach them."
        image={p.image}
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Duration', value: p.hours },
            { label: 'Length', value: p.length },
            { label: 'Location', value: p.location },
            { label: 'Trainer', value: p.trainers[0] },
          ]}
        />
        <div className="btn-row">
          <a href="#schedule" className="btn">
            Dates &amp; prices
          </a>
          <Link href="/contact/" className="btn btn--ghost">
            Enquire
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="overview-title">
        <div className="container course-overview">
          <div className="prose" data-reveal>
            <h2 id="overview-title">Udana Sky Flow Aerial Yoga</h2>
            {aerialContent.intro.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
            <p>{aerialContent.training}</p>
            <p>{aerialContent.graduates}</p>
          </div>
          <div className="course-overview__side" data-reveal>
            <blockquote className="pull-quote">
              <p>{aerialContent.quote}</p>
            </blockquote>
            <div className="media media--portrait">
              <Picture slug="aerial-hammocks" sizes="(min-width: 960px) 34vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-hidden="true">
        <div className={styles.bandInner} data-parallax>
          <Picture slug="aerial-mandala-circle" decorative sizes="100vw" className={styles.bandImg} />
        </div>
      </section>

      <section className="section" aria-labelledby="content-title">
        <div className="container curriculum-grid">
          <div data-reveal>
            <h2 id="content-title">Course content</h2>
            <p className="muted">{aerialContent.content}</p>
          </div>
          <div data-reveal>
            <h3>Fundamental course modules</h3>
            <Curriculum modules={p.curriculum} />
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="benefits-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="benefits-title">Benefits of aerial yoga</h2>
          </div>
          <ul className="benefit-list" data-reveal>
            {aerialContent.benefits.map((b) => (
              <li key={b.title}>
                <strong>{b.title}</strong>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="schedule" className="section section--blush" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="schedule-title">Dates &amp; prices</h2>
            <p>Sky Flow Aerial Yoga 50-hour course at Udana Jimbaran Shala.</p>
          </div>
          <div data-reveal>
            <Schedule formats={p.schedule} builtOn={builtOn} />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Other courses">
        <div className="container">
          <OtherProgrammes current="aerial50" />
        </div>
      </section>

      <CtaBand
        title="Ready to fly?"
        text="Ask us about the next Sky Flow Aerial Yoga course, or try a Saturday Sky Flow class at the shala first."
        primary={{ href: '/contact/', label: 'Register your interest' }}
        secondary={{ href: '/udana-shala-class/', label: 'Class schedule' }}
      />
    </>
  );
}
