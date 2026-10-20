import Link from 'next/link';
import Picture from '@/components/Picture';
import Schedule from '@/components/Schedule';
import { PageHero, Facts, CtaBand, OtherProgrammes } from '@/components/ui';
import { programmes, yttcCommon } from '@/data/site';

const p = programmes.yttc200;
const builtOn = new Date().toISOString().slice(0, 10);

export const metadata = {
  title: '200 Hours – Yoga Teacher Training',
  description:
    '200-hour Yoga Alliance teacher training in Bali with Putu Dwijendra and Tomoko — full-board retreat format or at the Udana Jimbaran Shala. Listed dates, prices and course focus.',
};

export default function Yttc200Page() {
  return (
    <>
      <PageHero
        title="Yoga Teacher Training — 200 Hours"
        lead="The full Udana teacher training, focused on the subtle body. Choose the full-board retreat format or train at our Jimbaran shala."
        image={p.image}
        imagePosition="40% 50%"
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Duration', value: p.hours },
            { label: 'Length', value: p.length, note: p.lengthNote },
            { label: 'Location', value: p.location },
            { label: 'Trainers', value: p.trainers.join(' & ') },
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
            <h2 id="overview-title">About the course</h2>
            <p className="lead">{p.summary}</p>
            {yttcCommon.intro.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
          <div className="course-overview__side" data-reveal>
            <div className="media media--landscape">
              <Picture slug="graduation-certificates" sizes="(min-width: 960px) 36vw, 100vw" />
            </div>
            <blockquote className="pull-quote">
              <p>{yttcCommon.quote}</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="schedule" className="section section--blush" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="schedule-title">Dates &amp; prices</h2>
            <p>Two formats are listed: a full-board retreat taught in English and Spanish, and a non-residential course at Udana Jimbaran Shala taught in English and Indonesian.</p>
          </div>
          <div data-reveal>
            <Schedule formats={p.schedule} builtOn={builtOn} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-title">
        <div className="container focus-grid">
          <div data-reveal>
            <h2 id="focus-title">What the course covers</h2>
            <p className="muted">
              The 200-hour focus topics, as described by Udana Yoga. The detailed module list currently published for this course
              is the same as the <Link href="/yoga-teacher-training/#curriculum">100-hour curriculum</Link>.
            </p>
          </div>
          <ul className="ticks ticks--cols" data-reveal>
            {p.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="why-title">Deepen your yoga journey with Udana</h2>
          </div>
          <ul className="benefit-list benefit-list--3" data-reveal>
            {yttcCommon.benefits.map((b) => (
              <li key={b.title}>
                <strong>{b.title}</strong>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-label="Other courses">
        <div className="container">
          <OtherProgrammes current="yttc200" />
        </div>
      </section>

      <CtaBand
        title="Explore yoga’s transformative journey"
        text="Find balance and serenity through the practice. Tell us which format and dates you are interested in."
        primary={{ href: '/contact/', label: 'Register your interest' }}
      />
    </>
  );
}
