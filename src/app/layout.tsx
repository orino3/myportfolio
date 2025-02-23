import * as React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import Navigation from './components/Navigation';
import EntranceAnimation from './components/EntranceAnimation';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A portfolio showcasing my work in product design, development, and AI implementation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.className} flex min-h-full flex-col bg-neutral-50`}>
        <EntranceAnimation />
        <Navigation />
        {children}
      </body>
    </html>
  );
} 