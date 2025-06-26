import './global.css';
import FluidProvider from './components/FluidProvider';
import Header from './components/Header';

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
      <body>
        <FluidProvider>
          <Header />
          <main>{children}</main>
        </FluidProvider>
      </body>
    </html>
  );
}
