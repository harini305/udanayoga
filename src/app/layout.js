import { Quicksand, Nunito } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Motion from '@/components/Motion';
import ScrollManager from '@/components/ScrollManager';
import FooterFit from '@/components/FooterFit';
import { business } from '@/data/site';
import './globals.css';

// Quicksand: closest web font to the rounded, single-stroke "udana yoga" logo lettering.
// Used for headings and all interface text (navigation, buttons, labels, footer).
// Nunito: rounded-terminal companion for paragraph text, matching the logo's soft forms.
const display = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const sans = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata = {
  metadataBase: new URL('https://udanayoga.com'),
  title: {
    default: `${business.name} – ${business.tagline}`,
    template: `%s – ${business.name}`,
  },
  description:
    'Yoga Alliance registered yoga school in Jimbaran, Bali: 50, 100 and 200-hour teacher training, Sky Flow aerial yoga training, Udana Shala classes, private sessions, workshops and scoliosis therapy.',
};

export const viewport = {
  themeColor: '#FFFAF7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <Motion />
        <ScrollManager />
        <FooterFit />
      </body>
    </html>
  );
}
