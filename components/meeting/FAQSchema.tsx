import { City } from '@/lib/cities'

interface FAQSchemaProps {
  city1: City
  city2: City
}

export default function FAQSchema({ city1, city2 }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does the time difference account for Daylight Saving Time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, the calculations automatically account for DST based on current dates. The time difference between ${city1.city} and ${city2.city} may vary by 1 hour when DST starts or ends.`
        }
      },
      {
        "@type": "Question",
        "name": "What if I need to add more participants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the participant dropdowns to add a third city, or visit our interactive time slider to compare up to 6 cities simultaneously."
        }
      },
      {
        "@type": "Question",
        "name": "Can I share this meeting plan with my team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Use the Copy Link button to share this exact meeting configuration. The URL preserves your city selections so everyone sees the same time comparison."
        }
      },
      {
        "@type": "Question",
        "name": `What is the best time to call between ${city1.city} and ${city2.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The best time to call between ${city1.city} and ${city2.city} is during business hours overlap (9 AM - 5 PM local time). Our meeting planner tool shows all available time slots with working hours overlap for both locations.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I schedule a meeting across time zones between ${city1.city} and ${city2.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To schedule a meeting between ${city1.city} and ${city2.city}, first identify the time difference, then find overlapping business hours. Our tool automatically calculates working hours overlap and suggests the best meeting times that work for both time zones.`
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
