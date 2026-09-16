import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Umhlaba Wami',
  description: 'Commercial property management & vacant space marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
