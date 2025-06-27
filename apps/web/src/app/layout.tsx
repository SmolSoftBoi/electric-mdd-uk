import type { Metadata } from 'next';
import FluidProvider from './components/FluidProvider';
import Header from './components/Header';
import { lato } from './fonts';
import './global.css';

/**
 * Document-wide metadata.
 */
export const metadata: Metadata = {
  title: 'Welcome to electric MDD UK',
};

/**
 * Global layout used across all routes.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <FluidProvider>
          <Header />
          <main className="container">{children}</main>
        </FluidProvider>
      </body>
    </html>
  );
}
