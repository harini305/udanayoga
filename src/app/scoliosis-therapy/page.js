import Link from 'next/link';
import Picture from '@/components/Picture';
import { PageHero, Facts, CtaBand } from '@/components/ui';
import { scoliosis } from '@/data/site';
import styles from './scoliosis.module.css';

export const metadata = {
  title: 'Scoliosis Therapy',
  description:
    'Udana Method Scoliosis Yoga Therapy at Udana Shala, Jimbaran, Bali — selected and modified yoga postures for the spine. Monday, Wednesday and Friday from 5:00 pm.',
};

export default function ScoliosisPage() {
  return (
    <>
      <PageHero
        title="Scoliosis therapy"
        lead={scoliosis.description}
        image="studio-backbend-class"
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Days', value: scoliosis.days },
            { label: 'Time', value: scoliosis.time, note: 'End time to be confirmed' },
            { label: 'Location', value: scoliosis.location },
          ]}
        />
        <div className="btn-row">
          <Link href="/contact/" className="btn">
            Ask about a session
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="method-title">
        <div className="container course-overview">
          <div data-reveal>
            <h2 id="method-title">{scoliosis.name}</h2>
            <p>The aims of the therapy, as described by Udana Yoga:</p>
            <ul className={`ticks ${styles.goals}`}>
              {scoliosis.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="course-overview__side" data-reveal>
            <blockquote className="pull-quote">
              <p>{scoliosis.quote}</p>
            </blockquote>
            <div className="note">
              <p>
                <strong>Your health comes first.</strong> Yoga therapy does not replace medical care. Individual results vary,
                and no outcome is guaranteed — please talk to your doctor or specialist about your scoliosis, and tell your
                teacher about your condition before the session.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="class-title">
        <div className="container split split--wide-text">
          <div data-reveal>
            <h2 id="class-title">Scoliosis Therapy Yoga at the shala</h2>
            <p>
              Scoliosis Therapy Yoga is part of the weekly Udana Shala timetable, on {scoliosis.days.toLowerCase()} evenings,
              guided by a certified scoliosis therapy teacher.
            </p>
            <p className="muted">{scoliosis.timeNote}</p>
            <div className="btn-row">
              <Link href="/udana-shala-class/#timetable" className="btn btn--ghost">
                See the full timetable
              </Link>
              <Link href="/workshop/" className="btn btn--ghost">
                Scoliosis workshops
              </Link>
            </div>
          </div>
          <div className="media media--landscape" data-reveal>
            <Picture slug="studio-ceremony-circle" sizes="(min-width: 880px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to us about your spine"
        text="Tell us about your situation and ask whether the weekly therapy class or a private session would suit you."
        primary={{ href: '/contact/', label: 'Send an enquiry' }}
        secondary={{ href: '/private-yoga-session-in-bali/', label: 'Private sessions' }}
      />
    </>
  );
}
