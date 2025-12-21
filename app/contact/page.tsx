import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us - whattime.city',
  description: 'Get in touch with the whattime.city team. We\'d love to hear from you!',
  alternates: {
    canonical: 'https://whattime.city/contact'
  }
}

export default function ContactPage() {
  return <ContactContent />
}
