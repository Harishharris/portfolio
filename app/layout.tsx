import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harish - Software Engineer',
  description:
    'Personal portfolio showcasing my software engineering projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#0A0A0B] min-h-screen relative overflow-x-hidden`}
      >
        <div className="relative z-50">
          <Navbar />
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
