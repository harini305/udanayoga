import { getImage } from '@/data/images';

/**
 * Responsive <picture> for the pre-optimised derivatives in /public/images.
 * AVIF first, WebP fallback. Width/height are always set to reserve space.
 * `priority` is for the single above-the-fold hero image of a page.
 */
export default function Picture({ slug, sizes = '100vw', priority = false, alt, className, style, decorative = false }) {
  const img = getImage(slug);
  const altText = decorative ? '' : alt ?? img.alt;

  if (img.single) {
    return (
      <img
        src={`/images/${slug}.webp`}
        width={img.width}
        height={img.height}
        alt={altText}
        className={className}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  const set = (ext) => img.widths.map((w) => `/images/${slug}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = img.widths.find((w) => w >= 800) ?? img.widths[img.widths.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`/images/${slug}-${fallbackW}.webp`}
        width={img.width}
        height={img.height}
        alt={altText}
        className={className}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
