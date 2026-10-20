import Link from 'next/link';
import Picture from '@/components/Picture';
import { PageHero, Facts, CtaBand, OtherProgrammes, Arrow } from '@/components/ui';
import { programmes, programmesIntro } from '@/data/site';

const p = programmes.yttc50;

export const metadata = {
  title: '50 Hours Yoga Course',
  description:
    'Udana Yoga’s one-week, 50-hour yoga course: yoga history, the eight limbs, anatomy, posture alignment, pranayama, teaching methodology and asana practice.',
};

export default function Yttc50Page() {
  return (
    <>
      <PageHero
        title="50 Hours Yoga Course"
        lead="One week focused on understanding the physical body through yoga asanas, aligning with the inner self."
        image={p.image}
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Duration', value: p.hours },
            { label: 'Length', value: p.length },
            { label: 'Dates, price & location', value: 'Not yet published', note: 'Ask us about the next intake' },
          ]}
        />
        <div className="btn-row">
          <Link href="/contact/" className="btn">
            Ask about this course
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="covers-title">
        <div className="container focus-grid">
          <div data-reveal>
            <h2 id="covers-title">What the week covers</h2>
            <p>{p.summary}</p>
            <p className="muted">
              This is a separate course from the{' '}
              <Link href="/50-hours-aerial-course/">50-hour Sky Flow Aerial Yoga course</Link>.
            </p>
          </div>
          <ul className="ticks ticks--cols" data-reveal>
            {p.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="path-title">
        <div className="container split split--wide-media">
          <div className="media media--landscape" data-reveal>
            <Picture slug="studio-backbend-class" sizes="(min-width: 880px) 55vw, 100vw" />
          </div>
          <div data-reveal>
            <h2 id="path-title">Continue your training</h2>
            <blockquote className="pull-quote" style={{ marginBottom: '1.5rem' }}>
              <p>{programmesIntro}</p>
            </blockquote>
            <p>
              Udana Yoga also offers 100-hour and 200-hour teacher trainings, which explore the energy body and the subtle body.
            </p>
            <p>
              <Link href="/yoga-teacher-training-programs/" className="text-link">
                Compare all teacher-training courses <Arrow />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Other courses">
        <div className="container">
          <OtherProgrammes current="yttc50" />
        </div>
      </section>

      <CtaBand
        title="Interested in the 50-hour course?"
        text="Dates, price and location for this course are not currently published. Send us a message to ask for the details."
        primary={{ href: '/contact/', label: 'Send an enquiry' }}
      />
    </>
  );
}
