import Picture from '@/components/Picture';
import Reviews from '@/components/Reviews';
import { PageHero, CtaBand, Accreditations } from '@/components/ui';
import { about, team } from '@/data/site';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us',
  description:
    'Udana Yoga Academy in Jimbaran, Bali: a Yoga Alliance registered school since 2014, founded by Putu Dwijendra, with trainer Tomoko. Our approach, our trainers and student reviews.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Udana Yoga"
        lead={about.lead}
        image="studio-ceremony-circle"
        imagePosition="50% 70%"
      />

      <section className="section" aria-labelledby="who-title">
        <div className="container split split--wide-text split--top">
          <div className="prose" data-reveal>
            <h2 id="who-title">Who we are</h2>
            <p className="lead">{about.intro}</p>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className={styles.aside} data-reveal>
            <blockquote className="pull-quote">
              <p>{about.quote}</p>
            </blockquote>
            <Accreditations className={styles.badges} />
          </aside>
        </div>
      </section>

      <section className={styles.sutra} aria-label="Yoga Sutra 1.1">
        <div className="container">
          <p className={styles.sanskrit} lang="sa-Latn" data-reveal>
            {about.sutra.sanskrit}
          </p>
          <p className={styles.translation} data-reveal>
            {about.sutra.translation}
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="team-title">Meet our trainers</h2>
          </div>
          <div className={styles.team}>
            {team.map((t) => (
              <article key={t.name} className={styles.person} data-reveal>
                <div className={`media media--square ${styles.portrait}`}>
                  <Picture slug={t.image} sizes="(min-width: 900px) 260px, 60vw" />
                </div>
                <div>
                  <h3 className={styles.name}>{t.name}</h3>
                  <p className={styles.role}>{t.role}</p>
                  {t.bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  <ul className={styles.creds} aria-label={`${t.name}’s credentials`}>
                    {t.credentials.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section section--sand" aria-labelledby="reviews-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="reviews-title">Student reviews</h2>
            <p>The seven Google reviews shown on the current Udana Yoga website, reproduced as written.</p>
          </div>
          <Reviews layout="columns" />
        </div>
      </section>

      <CtaBand
        title="Practise with us"
        text="Join a class at the Jimbaran shala, or ask us about the next teacher training."
        primary={{ href: '/contact/', label: 'Contact us' }}
        secondary={{ href: '/yoga-teacher-training-programs/', label: 'Teacher training' }}
      />
    </>
  );
}
