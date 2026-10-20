import Gallery from '@/components/Gallery';
import { PageHero, CtaBand } from '@/components/ui';
import { business } from '@/data/site';
import { getImage } from '@/data/images';

export const metadata = {
  title: 'Gallery',
  description:
    'Photographs from Udana Yoga Academy: teacher-training graduations, Balinese ceremonies and Melukat water blessings, aerial yoga and classes at the Jimbaran studio.',
};

// Captions are used only where the original site labelled the photo
// (home-page gallery: Graduation, Culture, Water Blessing, Teacher Training).
const photos = [
  { slug: 'graduation-certificates', caption: 'Graduation', shape: 'wide' },
  { slug: 'mandala-ceremony', shape: 'tall' },
  { slug: 'melukat-blessing', caption: 'Water Blessing' },
  { slug: 'aerial-studio' },
  { slug: 'canang-sari', caption: 'Culture' },
  { slug: 'side-stretch-assist', caption: 'Teacher Training', shape: 'tall' },
  { slug: 'aerial-mandala-circle', shape: 'wide' },
  { slug: 'studio-group-yellow' },
  { slug: 'melukat-spring', shape: 'wide' },
  { slug: 'headstand-assist', shape: 'tall' },
  { slug: 'temple-prayer' },
  { slug: 'balinese-food' },
  { slug: 'shala-pavilion-class', shape: 'wide' },
  { slug: 'aerial-hammocks', shape: 'tall' },
  { slug: 'studio-backbend-class' },
  { slug: 'ceremony-sashes' },
  { slug: 'graduates-seaside', shape: 'wide' },
  { slug: 'water-temple' },
  { slug: 'studio-ceremony-circle' },
].map((p) => ({ ...p, alt: getImage(p.slug).alt }));

const instagram = business.social.find((s) => s.label === 'Instagram');

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our gallery"
        lead="Graduations, ceremonies, water blessings and everyday practice at Udana Yoga. Select a photo to view it larger."
      >
        <p>
          <a className="text-link" href={instagram.href} target="_blank" rel="noopener noreferrer">
            More on Instagram {instagram.handle}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      </PageHero>

      <section className="section section--tight" aria-label="Photographs">
        <div className="container">
          <Gallery items={photos} />
        </div>
      </section>

      <CtaBand
        title="Come and practise with us"
        text="Visit the Jimbaran shala for a class, or ask about our next teacher training."
        primary={{ href: '/udana-shala-class/', label: 'Class schedule' }}
        secondary={{ href: '/contact/', label: 'Contact us' }}
      />
    </>
  );
}
