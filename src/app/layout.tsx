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
      <head>
         {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id=GTM-TW83VV5S'+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-TW83VV5S');`
          }}
        />
      </head>
      <body>
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW83VV5S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
