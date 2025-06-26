/**
 * Global navigation header.
 */
import Link from 'next/link';

export default function Header() {
  return (
    <header className="nj-header">
      <div className="nj-header__group">
        <div className="nj-header__head">
          <Link href="/" className="nj-header__logo">
            Electric MDD UK ⚡️
          </Link>
        </div>
        <nav className="container" role="navigation">
          <ul className="nj-header__nav nj-header__nav--panel">
            <li className="nj-header__nav-item">
              <Link href="/" className="nj-header__nav-link">
                Home
              </Link>
            </li>
            <li className="nj-header__nav-item">
              <Link href="/connection-wizard" className="nj-header__nav-link">
                Connection Wizard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
