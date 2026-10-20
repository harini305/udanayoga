import Link from 'next/link';
import Picture from '@/components/Picture';
import ProgrammeIndex from '@/components/ProgrammeIndex';
import Reviews from '@/components/Reviews';
import { Accreditations, CtaBand, Arrow } from '@/components/ui';
import { about, founderQuote } from '@/data/site';
import { getImage } from '@/data/images';
import styles from './home.module.css';

export const metadata = {
  title: { absolute: 'Udana Yoga Academy – Bali Yoga Teacher Training & Retreat' },
};

const offerings = [
  {
    title: 'Yoga teacher training',
    text: 'Udana Yoga Teacher Training in Bali deepens your practice, fostering growth, self-awareness and higher awakening — 50, 100 and 200-hour courses and a 50-hour aerial course.',
    href: '/yoga-teacher-training-programs/',
    cta: 'Compare the courses',
    image: 'mandala-ceremony',
  },
  {
    title: 'Udana Shala classes',
    text: 'Enhance your well-being through diverse yoga styles in a supportive Jimbaran studio, guided by experienced instructors. Classes run Monday to Saturday.',
    href: '/udana-shala-class/',
    cta: 'See the weekly schedule',
    image: 'studio-students',
  },
  {
    title: 'Private sessions',
    text: 'A personalised practice with a certified Udana teacher — at the studio, your villa or hotel, for one person or a small group.',
    href: '/private-yoga-session-in-bali/',
    cta: 'Private session details',
    image: 'headstand-assist',
  },
  {
    title: 'Workshops',
    text: 'Yoga therapy for the lower back and for scoliosis, and Udana Cakra Flow, a sequence that works with the body’s energy centres.',
    href: '/workshop/',
    cta: 'About the workshops',
    image: 'shala-pavilion-class',
  },
  {
    title: 'Scoliosis therapy',
    text: 'The Udana method uses selected and modified yoga postures to de-rotate, extend and expand the spine, aiming to improve posture.',
    href: '/scoliosis-therapy/',
    cta: 'About the method',
    image: 'studio-backbend-class',
  },
].map((o) => ({ ...o, alt: getImage(o.image).alt }));

const moments = [
  { label: 'Graduation', image: 'graduation-certificates' },
  { label: 'Culture', image: 'canang-sari' },
  { label: 'Water Blessing', image: 'melukat-blessing' },
  { label: 'Teacher Training', image: 'side-stretch-assist' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroMedia}>
          <Picture slug="shala-mandala" priority sizes="100vw" className={styles.heroImg} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy} data-hero-copy>
            <h1 id="home-title" className={styles.heroTitle}>
              Udana Yoga Academy
            </h1>
            <p className={styles.heroLead}>
              Bali yoga teacher training &amp; retreat — plus studio classes, private sessions and therapy at our Jimbaran shala.
            </p>
            <div className="btn-row">
              <Link href="/yoga-teacher-training-programs/" className="btn">
                Explore teacher training
              </Link>
              <Link href="/udana-shala-class/" className="btn btn--light">
                Class schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" aria-labelledby="about-title">
        <div className="container split split--wide-text">
          <div data-reveal>
            <h2 id="about-title">Learn &amp; share without borders</h2>
            <p className="lead">{about.lead}</p>
            <p className="muted">{about.intro}</p>
            <p>
              <Link href="/about-us/" className="text-link">
                About the academy and our trainers <Arrow />
              </Link>
            </p>
            <Accreditations className={styles.badges} />
          </div>
          <div className={`media media--landscape ${styles.aboutImg}`} data-reveal>
            <Picture slug="studio-group-yellow" sizes="(min-width: 880px) 45vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="section section--blush" aria-labelledby="programmes-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="programmes-title">Elevate your practice and expand your knowledge</h2>
            <p>Teacher trainings, studio classes and therapy, all taught by the Udana team.</p>
          </div>
          <ProgrammeIndex items={offerings} />
        </div>
      </section>

      {/* Founder */}
      <section className={`section section--brown ${styles.founder}`} aria-labelledby="founder-title">
        <div className="container split split--wide-text">
          <div data-reveal>
            <blockquote className={styles.founderQuote}>
              <p id="founder-title">“{founderQuote.quote}”</p>
            </blockquote>
            <p className={styles.founderName}>Putu Dwijendra, founder</p>
            <p>{founderQuote.text}</p>
            <div className="btn-row">
              <Link href="/yoga-teacher-training-programs/" className="btn btn--light">
                Join our YTTC programme
              </Link>
            </div>
          </div>
          <div className={`media media--square ${styles.founderImg}`} data-reveal>
            <Picture slug="putu-dwijendra-seated" sizes="(min-width: 880px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Moments */}
      <section className="section" aria-labelledby="moments-title">
        <div className="container">
          <div className={styles.momentsHead} data-reveal>
            <h2 id="moments-title">Moments from our trainings</h2>
            <Link href="/gallery/" className="text-link">
              View the gallery <Arrow />
            </Link>
          </div>
          <ul className={styles.moments}>
            {moments.map((m) => (
              <li key={m.label} data-reveal>
                <figure>
                  <div className="media">
                    <Picture slug={m.image} sizes="(min-width: 1100px) 290px, (min-width: 700px) 45vw, 50vw" />
                  </div>
                  <figcaption>{m.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--sand" aria-labelledby="reviews-title">
        <div className="container">
          <div className={styles.momentsHead} data-reveal>
            <h2 id="reviews-title">What students say</h2>
            <Link href="/about-us/#reviews" className="text-link">
              Read all seven reviews <Arrow />
            </Link>
          </div>
          <Reviews names={['Kim Dautzenberg', 'Ananta Sutopo', 'michal karsia']} />
        </div>
      </section>

      <CtaBand secondary={{ href: '/udana-shala-class/', label: 'Join a class' }} />
    </>
  );
}
