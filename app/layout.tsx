import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/app/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Smile Dental Clinic | Dr. Rajeshwar Bhattacharya | Kharghar Sector 10',
  description: 'Expert dental care in Kharghar Sector 10. Dr. Rajeshwar Bhattacharya offers cosmetic dentistry, implants, root canals, orthodontics, and pediatric care. Book your appointment today!',
  keywords: ['dental clinic', 'dentist', 'Kharghar', 'Navi Mumbai', 'cosmetic dentistry', 'dental implants', 'root canal', 'teeth whitening', 'orthodontics', 'pediatric dentistry'],
  authors: [{ name: 'Smile Dental Clinic' }],
  creator: 'Smile Dental Clinic',
  publisher: 'Smile Dental Clinic',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://smiledentalkharghar.com',
    siteName: 'Smile Dental Clinic',
    title: 'Smile Dental Clinic | Expert Dental Care in Kharghar',
    description: 'Dr. Rajeshwar Bhattacharya - 15+ years experience. Cosmetic dentistry, implants, root canals, braces, and pediatric care in Kharghar Sector 10.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smile Dental Clinic - Modern Dental Care in Kharghar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smile Dental Clinic | Expert Dental Care in Kharghar',
    description: 'Dr. Rajeshwar Bhattacharya - 15+ years experience. Book your appointment today!',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6b9047' },
    { media: '(prefers-color-scheme: dark)', color: '#46592d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased text-neutral-900 bg-white">
        <LanguageProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '12px',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: '#6b9047',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ea580c',
                  secondary: '#fff',
                },
              },
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}