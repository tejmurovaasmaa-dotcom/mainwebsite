import type { Metadata } from 'next';
import { Cinzel, Montserrat } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Trust Bridge Group - Luxury Real Estate',
  icons: {
    icon: "/favicon-v3.ico",
  },
  description: 'Your Trusted Real Estate Partner. Premium properties in Greater Noida, Noida, and Yamuna Expressway. Experience luxury living with Trust Bridge Group.',
  keywords: 'real estate, luxury properties, Greater Noida, Noida, Yamuna Expressway, property investment, Trust Bridge Group',
  openGraph: {
    title: 'Trust Bridge Group - Luxury Real Estate',
    description: 'Your Trusted Real Estate Partner',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`} >
      <body>
        {children}
      </body>
    </html>
  );
}
