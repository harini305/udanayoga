import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for has moved or no longer exists.</p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Go to the home page
          </Link>
          <Link href="/yoga-teacher-training-programs/" className="btn btn--ghost">
            Teacher training
          </Link>
          <Link href="/udana-shala-class/" className="btn btn--ghost">
            Class schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
