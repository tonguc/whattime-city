import type { Metadata } from 'next'
import './globals.css'
import { CityProvider } from '@/lib/CityContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://whattime.city'),
  title: 'World Clock - Current Local Time in Any City | whattime.city',
  description: 'Check the current local time anywhere in the world. Live world clock with sunrise, sunset times and real-time weather. Compare time zones across 200+ major cities.',
  keywords: ['world clock', 'current time', 'local time', 'time zone converter', 'sunrise sunset', 'city time', 'international time', 'time difference'],
  authors: [{ name: 'whattime.city' }],
  openGraph: {
    title: 'World Clock - Current Local Time in Any City',
    description: 'Check the current local time anywhere in the world. Live world clock with sunrise, sunset times and real-time weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'whattime.city',
    url: 'https://whattime.city'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Clock - Current Local Time in Any City',
    description: 'Check the current local time anywhere in the world. Live world clock with sunrise, sunset and weather.'
  },
  alternates: {
    canonical: 'https://whattime.city'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* GA4 gtag.js - loaded in head for earliest possible execution */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L0LS6L1L65"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L0LS6L1L65');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <CityProvider>
          {children}
        </CityProvider>
      </body>
    </html>
  )
}
