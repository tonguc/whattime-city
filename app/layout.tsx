import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'whattime.city - World Clock',
  description: 'Real-time world clock with dynamic daylight themes. Check current time, sunrise and sunset for cities worldwide.',
  keywords: ['world clock', 'time zone', 'current time', 'sunrise', 'sunset'],
  authors: [{ name: 'whattime.city' }],
  openGraph: {
    title: 'whattime.city - World Clock',
    description: 'Real-time world clock with dynamic daylight themes',
    type: 'website',
    locale: 'en_US',
    siteName: 'whattime.city'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'whattime.city - World Clock',
    description: 'Real-time world clock with dynamic daylight themes'
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
