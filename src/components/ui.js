import Link from 'next/link';
import Picture from './Picture';
import { business, programmes, programmeOrder } from '@/data/site';
import { getImage } from '@/data/images';

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

/** Inner-page hero: title and lead beside a single photograph. */
export function PageHero({ title, lead, image, imagePosition, children }) {
  return (
    <section className={`page-hero ${image ? '' : 'page-hero--plain'}`}>
      <div className="container page-hero__grid">
        <div data-hero-copy>
          <h1>{title}</h1>
          {lead && <p className="page-hero__lead">{lead}</p>}
          {children}
        </div>
        {image && (
          <div className="media">
            <Picture
              slug={image}
              priority
              sizes="(min-width: 1280px) 570px, (min-width: 880px) 46vw, 100vw"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
          </div>
        )}
      </div>
    </section>
  );
}

/** items: [{ label, value, note? }] */
export function Facts({ items, className = '' }) {
  return (
    <dl className={`facts ${className}`}>
      {items.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>
            {f.value}
            {f.note && <small>{f.note}</small>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CtaBand({
  title = 'Have questions or ready to book?',
  text = 'Connect with Udana Yoga and begin your transformative journey.',
  primary = { href: '/contact/', label: 'Send an enquiry' },
  secondary,
  image = 'canang-sari',
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band__media" aria-hidden="true">
        <Picture slug={image} decorative sizes="100vw" />
      </div>
      <div className="container cta-band__inner">
        <div data-reveal>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row" data-reveal>
          <Link href={primary.href} className="btn btn--light">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn--on-dark">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Accreditations({ className = '' }) {
  return (
    <ul className={`badges ${className}`} aria-label="Accreditations">
      {business.accreditations.map((a) => {
        const img = getImage(a.slug);
        return (
          <li key={a.slug}>
            <img src={`/images/${a.slug}.webp`} width={img.width} height={img.height} alt="" loading="lazy" />
            <span>
              <strong>{a.label}</strong>
              {a.detail}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact "other courses" list used at the end of course pages. */
export function OtherProgrammes({ current, title = 'Other teacher-training courses' }) {
  const list = programmeOrder.filter((k) => k !== current).map((k) => programmes[k]);
  return (
    <nav className="related" aria-labelledby="related-title" data-reveal>
      <h2 id="related-title">{title}</h2>
      <ul>
        {list.map((p) => (
          <li key={p.key}>
            <Link href={p.href}>
              <span>{p.shortName}</span>
              <span>{p.hours}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/yoga-teacher-training-programs/">
            <span>Compare all courses</span>
            <span aria-hidden="true">→</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
