import './global.css';
import FluidProvider from './components/FluidProvider';

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
          <main>{children}</main>
        </FluidProvider>
      </body>
    </html>
  );
}
