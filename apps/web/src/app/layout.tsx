import Head from 'next/head';
import { Lato } from 'next/font/google';
import FluidProvider from './components/FluidProvider';
import Header from './components/Header';
import './global.css';

export const lato = Lato({
  weight: ['300', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
});

/**
 * Document-wide metadata.
 */
export const metadata = {
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
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <FluidProvider>
          <Header />
          <main>{children}</main>
        </FluidProvider>
      </body>
    </html>
  );
}
