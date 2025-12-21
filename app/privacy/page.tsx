import { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy - whattime.city',
  description: 'Privacy policy for whattime.city - how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://whattime.city/privacy'
  }
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
