import { Metadata } from 'next'
import LondonCallTimesContent from './LondonCallTimesContent'

export const metadata: Metadata = {
  title: 'Best Time to Call London from New York | London Time Zone Guide',
  description: 'Planning a call to London from NYC? Find the best time with our overlap chart. Includes current time difference, business hours guide, and DST changes.',
  keywords: ['best time to call london from new york', 'london nyc time difference', 'call london from us', 'london business hours from new york'],
  openGraph: {
    title: 'Best Time to Call London from New York | whattime.city',
    description: '3-hour overlap window for business calls. Live time converter included.',
  }
}

export default function LondonCallTimesPage() {
  const city = {
    slug: 'london',
    name: 'London',
    timezone: 'Europe/London'
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to call London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST, which corresponds to 2:00 PM to 5:00 PM in London. This creates a 3-hour overlap during standard working hours. For personal calls, you can extend this until 5:00 PM EST (10:00 PM London)."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours is London ahead of New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "London is typically 5 hours ahead of New York. However, this gap briefly changes to 4 hours during DST transition weeks in March and October when one city changes clocks before the other."
        }
      },
      {
        "@type": "Question",
        "name": "When should I avoid calling London from New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid calling after 5:00 PM EST (10:00 PM London) for personal calls, and after 12:00 PM EST (5:00 PM London) for business calls. Calling before 7:00 AM EST reaches London during their late night or early morning hours."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to call London from the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your morning (7-10 AM EST) catches London in the afternoon (12-3 PM) - ideal overlap. US West Coast should aim for 6-9 AM PST to catch London at 2-5 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Is it rude to call London on weekends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For business: yes, unless previously agreed. For personal calls: Saturday is fine, Sunday is more family-oriented but acceptable for close friends. Avoid calling before 10 AM on weekends."
        }
      },
      {
        "@type": "Question",
        "name": "What time do UK offices close?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most offices close at 5:30 PM, though many professionals work until 6 PM or later. Friday afternoons tend to wind down earlier - aim for morning calls on Fridays."
        }
      }
    ]
  }

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find the Best Time to Call London from New York",
    "description": "Step-by-step guide to finding the optimal calling time from NYC to London",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check the time difference",
        "text": "London is 5 hours ahead of New York (4 hours during DST transition weeks). Verify current time in both cities.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Identify business hours",
        "text": "London business hours are 9 AM - 5:30 PM GMT/BST. NYC business hours are 9 AM - 5 PM EST.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Find the overlap window",
        "text": "The optimal overlap for business calls is 9 AM - 12 PM EST (2 PM - 5 PM London time). This ensures both parties are within standard working hours.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Schedule your call",
        "text": "Book calls during the overlap window. For personal calls, you can extend until 5 PM EST (10 PM London).",
        "position": 4
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <LondonCallTimesContent city={city} />
    </>
  )
}
