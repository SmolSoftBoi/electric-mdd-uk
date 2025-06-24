import './global.css';
import FluidProvider from './components/FluidProvider';

export const metadata = {
  title: 'Welcome to electric MDD UK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FluidProvider>{children}</FluidProvider>
      </body>
    </html>
  );
}
