const routes = [
  '/',
  '/about-us/',
  '/gallery/',
  '/yoga-teacher-training-programs/',
  '/50-hours-yoga-teacher-training/',
  '/yoga-teacher-training/',
  '/200-hours-yoga-teacher-training/',
  '/50-hours-aerial-course/',
  '/workshop/',
  '/udana-shala-class/',
  '/private-yoga-session-in-bali/',
  '/scoliosis-therapy/',
  '/contact/',
];

export default function sitemap() {
  return routes.map((r) => ({ url: `https://udanayoga.com${r}` }));
}
