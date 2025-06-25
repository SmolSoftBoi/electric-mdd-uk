/**
 * Home page.
 * Provides entry link to the connection wizard.
 */
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="home">
      <h1>Welcome to electric MDD UK ⚡️</h1>
      <p>
        Begin with the <Link href="/connection-wizard">connection wizard</Link>.
      </p>
    </section>
  );
}
