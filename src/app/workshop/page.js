import Link from 'next/link';
import Picture from '@/components/Picture';
import { PageHero, Facts, CtaBand, Arrow } from '@/components/ui';
import { workshops } from '@/data/site';
import styles from './workshop.module.css';

export const metadata = {
  title: 'Workshop',
  description:
    'Udana Yoga events and workshops in Bali with Putu Dwijendra: Lower Back Pain Yoga Therapy, Scoliosis Yoga Therapy and Udana Cakra Flow.',
};

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        title="Events & workshops"
        lead={workshops.intro}
        image="side-stretch-assist"
        imagePosition="50% 35%"
      >
        <Facts
          className="hero-facts"
          items={[
            { label: 'Speaker', value: workshops.speaker },
            { label: 'Location', value: workshops.location },
            { label: 'Dates & times', value: 'Not yet announced', note: 'Contact us for upcoming workshops' },
          ]}
        />
      </PageHero>

      <section className="section" aria-labelledby="themes-title">
        <div className="container">
          <h2 id="themes-title" className="visually-hidden">
            Workshop themes
          </h2>
          <div className={styles.list}>
            {workshops.items.map((w) => (
              <article key={w.title} className={styles.item} data-reveal>
                <h3 className={styles.title}>{w.title}</h3>
                <div>
                  <p>{w.text}</p>
                  {w.list && (
                    <>
                      <p className={styles.listTitle}>{w.listTitle}</p>
                      <ul className="ticks">
                        {w.list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {w.link && (
                    <p>
                      <Link href={w.link.href} className="text-link">
                        {w.link.label} <Arrow />
                      </Link>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="retain-title">
        <div className="container split split--wide-media">
          <div className="media media--landscape" data-reveal>
            <Picture slug="temple-prayer" sizes="(min-width: 880px) 55vw, 100vw" />
          </div>
          <div data-reveal>
            <h2 id="retain-title">Add yoga to retain the beauty of body and mind</h2>
            <p>
              Workshop dates and fees are not published on the current website. If you are interested in one of these themes,
              get in touch to ask about the next date.
            </p>
            <div className="btn-row">
              <Link href="/contact/" className="btn">
                Ask about workshops
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer a regular class?"
        text="Udana Shala runs classes Monday to Saturday, including Scoliosis Therapy Yoga on Monday, Wednesday and Friday evenings."
        primary={{ href: '/udana-shala-class/', label: 'See the class schedule' }}
        secondary={{ href: '/contact/', label: 'Contact us' }}
      />
    </>
  );
}
