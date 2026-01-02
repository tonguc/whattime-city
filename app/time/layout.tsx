import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Time Between Cities | World Time Zone Comparison',
  description: 'Compare current time between any two cities worldwide. See live clocks, time differences, best times to call, and business hours overlap.',
  keywords: [
    'compare time',
    'time zone comparison',
    'world clock',
    'time difference',
    'city time comparison',
    'international time',
    'time converter'
  ],
  openGraph: {
    title: 'Compare Time Between Cities',
    description: 'Instantly compare current time between any two cities. See live clocks and time differences.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/time/',
  },
}

export default function TimeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
