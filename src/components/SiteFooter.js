import Link from 'next/link';
import { business } from '@/data/site';
import styles from './SiteFooter.module.css';

const columns = [
  {
    title: 'Teacher training',
    links: [
      { label: 'TTC 50 Hours', href: '/50-hours-yoga-teacher-training/' },
      { label: 'TTC 100 Hours', href: '/yoga-teacher-training/' },
      { label: 'TTC 200 Hours', href: '/200-hours-yoga-teacher-training/' },
      { label: 'Aerial Yoga 50 Hours', href: '/50-hours-aerial-course/' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Udana Shala classes', href: '/udana-shala-class/' },
      { label: 'Private sessions', href: '/private-yoga-session-in-bali/' },
      { label: 'Scoliosis therapy', href: '/scoliosis-therapy/' },
      { label: 'Workshops', href: '/workshop/' },
    ],
  },
  {
    title: 'Academy',
    inline: true,
    links: [
      { label: 'About us', href: '/about-us/' },
      { label: 'Gallery', href: '/gallery/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

const external = { target: '_blank', rel: 'noopener noreferrer' };

export default function SiteFooter() {
  return (
    <footer className={styles.footer} data-site-footer>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <img src="/images/logo-white-academy.webp" width="360" height="251" alt="Udana Yoga Academy" className={styles.logo} loading="lazy" />
          <div className={styles.contact}>
            <address className={styles.address}>{business.address}</address>
            <p className={styles.contactLines}>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <a href={business.mapsUrl} {...external}>
                Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>

        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title} className={`${styles.col} ${c.inline ? styles.inline : ''}`}>
            <h2 className={styles.heading}>{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Udana Yoga Bali</p>
        <ul className={styles.social}>
          {business.social.map((s) => (
            <li key={s.href}>
              <a href={s.href} {...external}>
                {s.label}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a href={business.indonesianSite} lang="id" hrefLang="id" {...external}>
              Bahasa Indonesia<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
