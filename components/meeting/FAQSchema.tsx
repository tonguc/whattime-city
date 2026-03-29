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
        "name": `What is the best time to call between ${city1.city} and ${city2.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The best time to schedule a call between ${city1.city} and ${city2.city} is during the overlap of their business hours (9 AM – 5 PM local time in each city). Use our meeting planner to see which hours work for both locations simultaneously.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I schedule a meeting across time zones between ${city1.city} and ${city2.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To schedule a meeting between ${city1.city} and ${city2.city}: (1) check the current time difference between the two cities, (2) find hours where both are within 9 AM–5 PM business hours, and (3) pick a slot that's convenient for both parties. Our planner highlights overlapping work hours automatically.`
        }
      },
      {
        "@type": "Question",
        "name": "Does the time difference account for Daylight Saving Time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. All calculations automatically adjust for Daylight Saving Time based on today's date. The time gap between ${city1.city} and ${city2.city} can shift by ±1 hour when DST starts or ends in either location.`
        }
      },
      {
        "@type": "Question",
        "name": "What are standard business hours for international calls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard business hours are generally 9 AM to 5 PM (or 9 AM to 6 PM) Monday through Friday in each city's local time. For international calls, aim for a slot that falls within this window for all participants. Early morning (8–9 AM) and late afternoon (4–6 PM) slots are often the easiest compromise for teams 4–8 hours apart."
        }
      },
      {
        "@type": "Question",
        "name": "How many cities can I compare in the meeting planner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can add up to 6 cities at once to the meeting planner. Search and add each city individually — the tool shows all their clocks side by side and highlights overlapping business hours across all selected locations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I share this meeting plan with my team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Copy the URL from your browser — it encodes your selected cities so anyone you share it with sees the same configuration. No login or account required."
        }
      },
      {
        "@type": "Question",
        "name": "What if there is no business hours overlap between two cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `If ${city1.city} and ${city2.city} have no overlapping 9–5 business hours (common with time zones more than 9 hours apart), consider scheduling early morning for one party and late afternoon/evening for the other. Rotating who takes the inconvenient slot is a common courtesy for recurring international meetings.`
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert a meeting time to multiple time zones at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add all participating cities to the meeting planner. The heatmap view shows a 24-hour grid so you can see what time it is in every location simultaneously. Click any hour block to see the exact local time for each city."
        }
      },
      {
        "@type": "Question",
        "name": "Is the meeting planner free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the whattime.city meeting planner is completely free. No signup, no ads to click through, and no limits on how many cities you can compare or how often you use it."
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
