import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { CityProvider } from '@/lib/CityContext'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f9ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://whattime.city'),
  title: {
    default: 'whattime.city - World Clock & Time Zone Converter',
    template: '%s | whattime.city',
  },
  description: 'Free online world clock showing current local time in any city. Compare time zones, plan meetings, calculate flight times, and get jet lag advice. 400+ cities worldwide.',
  keywords: [
    'world clock',
    'time zone converter',
    'current time',
    'local time',
    'time difference',
    'meeting planner',
    'international time',
    'city time',
    'sunrise sunset',
    'jet lag calculator',
  ],
  authors: [{ name: 'whattime.city' }],
  creator: 'whattime.city',
  publisher: 'whattime.city',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://whattime.city',
    siteName: 'whattime.city',
    title: 'whattime.city - World Clock & Time Zone Converter',
    description: 'Check current local time anywhere in the world. Compare time zones, plan international meetings, and calculate jet lag recovery.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'whattime.city - World Clock',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'whattime.city - World Clock',
    description: 'Current local time in any city worldwide. Time zone converter & meeting planner.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://whattime.city',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics - DO NOT REMOVE */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ED5Y13JE4H"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ED5Y13JE4H');
          `}
        </Script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Prevent FOUC by setting initial theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Disable auto scroll restoration
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                
                try {
                  var mode = localStorage.getItem('whattime-theme-mode');
                  if (mode === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else if (mode === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'auto');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'auto');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <CityProvider>
          {children}
        </CityProvider>
      </body>
    </html>
  )
}
