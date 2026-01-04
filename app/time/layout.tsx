import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Zone Converter | Compare Time Between Cities',
  description: 'Convert and compare time between any two cities worldwide. See live clocks, time differences, best times to call, and business hours overlap.',
  keywords: [
    'time zone converter',
    'compare time',
    'time zone comparison',
    'world clock',
    'time difference',
    'city time comparison',
    'international time',
    'convert time'
  ],
  openGraph: {
    title: 'Time Zone Converter | Compare Time Between Cities',
    description: 'Instantly convert and compare time between any two cities. See live clocks and time differences.',
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
