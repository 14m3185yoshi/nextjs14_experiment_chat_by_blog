import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next14 practice',
  description: 'practice next14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <main className='mx-auto flex min-h-screen max-w-5xl flex-col place-content-center justify-between md:p-12'>
          {children}
        </main>
      </body>
    </html>
  );
}
