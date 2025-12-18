import { Metadata } from 'next'
import WidgetGenerator from '@/components/WidgetGenerator'

export const metadata: Metadata = {
  title: 'Free Clock Widget for Your Website | whattime.city',
  description: 'Get a free, beautiful clock widget for your website or blog. Customizable design, auto day/night theme, multiple sizes. Copy the embed code and paste it to your site.',
  keywords: [
    'clock widget',
    'world clock widget',
    'free clock widget',
    'embeddable clock',
    'website clock',
    'blog clock widget',
    'time zone widget',
    'city clock embed'
  ],
  openGraph: {
    title: 'Free Clock Widget for Your Website',
    description: 'Beautiful, customizable clock widget. Copy the code and embed it on your site.',
    type: 'website',
    siteName: 'whattime.city',
  }
}

export default function WidgetPage() {
  return <WidgetGenerator />
}
