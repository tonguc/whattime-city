import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact whattime.city - Support, Feedback & Suggestions',
  description: 'Get in touch with whattime.city team for support, bug reports, feature requests, or partnership inquiries. We typically respond within 24-48 hours.',
  keywords: ['contact whattime.city', 'world clock support', 'time zone help', 'feedback'],
  alternates: {
    canonical: 'https://whattime.city/contact'
  }
}

export default function ContactPage() {
  return <ContactContent />
}
