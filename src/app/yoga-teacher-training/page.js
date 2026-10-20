import Link from 'next/link';
import Picture from '@/components/Picture';
import Curriculum from '@/components/Curriculum';
import { PageHero, Facts, CtaBand, OtherProgrammes } from '@/components/ui';
import { programmes, yttcCommon } from '@/data/site';

const p = programmes.yttc100;

export const metadata = {
  title: 'Yoga Teacher Training 100 Hours',
  description:
    '100-hour Yoga Alliance teacher training in Bali with Putu Dwijendra and Tomoko: pranayama, Hatha Yoga Pradipika, bandhas, yoga nidra and teaching practice. Curriculum and course details.',
};

export default function Yttc100Page() {
  return (
    <>
      <PageHero
        title="Yoga Teacher Training — 100 Hours"
        lead="Inspiration, motivation, transformation: a 100-hour course focused on the energy body, taught by Putu Dwijendra and Tomoko."
        image={p.image}
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
          <Link href="/contact/" className="btn">
            Enquire about dates
          </Link>
          <a href="#curriculum" className="btn btn--ghost">
            View the curriculum
          </a>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="overview-title">
        <div className="container course-overview">
          <div className="prose" data-reveal>
            <h2 id="overview-title">About the course</h2>
            {yttcCommon.intro.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
            <p>
              Our Yoga Alliance approved training helps you build a strong yogic foundation. Many people think yoga is only the
              physical postures, but asanas are only the most visible part of a profound science aimed at developing the infinite
              potential of body, mind and soul.
            </p>
          </div>
          <div className="course-overview__side" data-reveal>
            <blockquote className="pull-quote">
              <p>{yttcCommon.quote}</p>
            </blockquote>
            <div className="note note--pending">
              <p>
                <strong>Dates and price:</strong> the current website does not list dates or a price for the 100-hour course.
                Please <Link href="/contact/">contact us</Link> to ask about the next intake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="focus-title">
        <div className="container focus-grid">
          <div data-reveal>
            <h2 id="focus-title">Course focus</h2>
            <p className="muted">{p.summary}</p>
          </div>
          <ul className="benefit-list" data-reveal>
            {yttcCommon.benefits.map((b) => (
              <li key={b.title}>
                <strong>{b.title}</strong>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="curriculum" className="section" aria-labelledby="curriculum-title">
        <div className="container curriculum-grid">
          <div className="media media--portrait" data-reveal>
            <Picture slug="side-stretch-assist" sizes="(min-width: 960px) 30vw, 100vw" />
          </div>
          <div data-reveal>
            <h2 id="curriculum-title">Teacher training curriculum</h2>
            <p className="muted">Ten modules, as published by Udana Yoga.</p>
            <Curriculum modules={p.curriculum} />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Other courses">
        <div className="container">
          <OtherProgrammes current="yttc100" />
        </div>
      </section>

      <CtaBand
        title="Explore yoga’s transformative journey"
        text="Find balance and serenity through the practice. Ask us about the next 100-hour intake."
        primary={{ href: '/contact/', label: 'Register your interest' }}
      />
    </>
  );
}
