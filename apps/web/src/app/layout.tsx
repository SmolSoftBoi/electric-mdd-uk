import Head from 'next/head';
import FluidProvider from './components/FluidProvider';
import Header from './components/Header';
import './global.css';

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
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
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
