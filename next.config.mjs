/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the original site's trailing-slash URL style (e.g. /about-us/).
  trailingSlash: true,

  // Required by the Phase 1 audit (09 §5): no runtime image optimisation.
  // Images are pre-optimised by scripts/optimize-images.py into public/images/.
  images: { unoptimized: true },

  async redirects() {
    return [
      // Contact moved to a clean slug (02-page-inventory §1.1 recommendation).
      { source: '/contact-us-2', destination: '/contact/', permanent: true },
      // Broken 50-hour links from the original site now reach the rebuilt page.
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '1274' }],
        destination: '/50-hours-yoga-teacher-training/',
        permanent: true,
      },
      // MP Timetable plugin pages fold into the Shala class page.
      { source: '/timetable/:path*', destination: '/udana-shala-class/', permanent: true },
      // Dead Eventin course links from the old 200 h schedule popup.
      { source: '/etn/:path*', destination: '/200-hours-yoga-teacher-training/', permanent: true },
    ];
  },
};

export default nextConfig;
