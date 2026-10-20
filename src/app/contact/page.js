import Picture from '@/components/Picture';
import ContactForm from '@/components/ContactForm';
import { business } from '@/data/site';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Udana Yoga Academy, Jl. Raya Kampus Unud, Jimbaran, Bali — email info@udanayoga.com. Ask about teacher training, Udana Shala classes, workshops, private sessions or scoliosis therapy.',
};

export default function ContactPage() {
  const { phones } = business;
  return (
    <>
      <h1 className="visually-hidden">Contact Udana Yoga</h1>

      <section className={`section ${styles.section}`} aria-label="Contact details and enquiry form">
        <div className={`container ${styles.grid}`}>
          <div className={styles.details}>
            <div className={styles.block}>
              <h2 className={styles.label}>Email</h2>
              <p>
                <a href={`mailto:${business.email}`} className={styles.big}>
                  {business.email}
                </a>
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.label}>Visit</h2>
              <address>
                {business.addressLines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </address>
              <p>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  Open “Udana Yoga” in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.label}>Phone &amp; WhatsApp</h2>
              {phones.confirmed ? null : (
                <div className="note note--pending">
                  <p>
                    <strong>Number awaiting confirmation.</strong> The current website lists two different numbers —{' '}
                    {phones.callCentre.display} ({phones.callCentre.note}) and {phones.whatsapp.display} ({phones.whatsapp.note}).
                    The confirmed number will be shown here; please use email in the meantime.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.block}>
              <h2 className={styles.label}>Follow us</h2>
              <ul className={styles.social}>
                {business.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label} <span className="muted">{s.handle}</span>
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`media media--landscape ${styles.photo}`}>
              <Picture slug="canang-sari" sizes="(min-width: 960px) 36vw, 100vw" />
            </div>
          </div>

          <div className={styles.formWrap}>
            <h2>Send us a message</h2>
            <p className="muted">Start your wellness journey with us. Fields marked “required” must be filled in.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
