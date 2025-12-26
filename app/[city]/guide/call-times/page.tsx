import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import CallTimesContent from './CallTimesContent'
import LondonCallTimesContent from './LondonCallTimesContent'
import TokyoCallTimesContent from './TokyoCallTimesContent'
import DubaiCallTimesContent from './DubaiCallTimesContent'
import SingaporeCallTimesContent from './SingaporeCallTimesContent'
import ParisCallTimesContent from './ParisCallTimesContent'
import SydneyCallTimesContent from './SydneyCallTimesContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [
    { city: 'new-york' }, 
    { city: 'london' }, 
    { city: 'tokyo' }, 
    { city: 'dubai' }, 
    { city: 'singapore' }, 
    { city: 'paris' }, 
    { city: 'sydney' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Best Time to Call' }
  return {
    title: config.pages.callTimes.title,
    description: config.pages.callTimes.description,
    keywords: config.pages.callTimes.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/call-times/` },
  }
}

// ============================================================================
// SCHEMA DEFINITIONS - UNIQUE FOR EACH CITY
// ============================================================================

const getSchemas = (citySlug: string) => {
  const schemas: Record<string, { faq: any; howTo: any }> = {
    'london': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call London from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST, which corresponds to 2:00 PM to 5:00 PM in London. This creates a 3-hour overlap during standard working hours."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is London ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "London is typically 5 hours ahead of New York. However, this gap briefly changes to 4 hours during DST transition weeks in March and October."
            }
          },
          {
            "@type": "Question",
            "name": "When should I avoid calling London from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Avoid calling after 5:00 PM EST (10:00 PM London) for personal calls, and after 12:00 PM EST (5:00 PM London) for business calls."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call London from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to London",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "London is 5 hours ahead of New York (4 hours during DST transition weeks).",
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
            "text": "The optimal overlap for business calls is 9 AM - 12 PM EST (2 PM - 5 PM London time).",
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
    },
    'dubai': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call Dubai from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 12:00 AM and 5:00 AM EST, which corresponds to 9:00 AM to 2:00 PM in Dubai. For most people, scheduling calls between 6:00 PM EST and 11:00 PM EST works better, catching Dubai early morning (3:00 AM to 8:00 AM Dubai time)."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is Dubai ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dubai is 9 hours ahead of New York. Dubai does not observe daylight saving time, so this difference remains constant year-round."
            }
          },
          {
            "@type": "Question",
            "name": "What are Dubai business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dubai business hours are typically Sunday through Thursday, 9:00 AM to 6:00 PM GST. Friday and Saturday are the weekend in the UAE."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call Dubai from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to Dubai",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "Dubai is 9 hours ahead of New York. Dubai does not observe DST, so this remains constant.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Identify business hours",
            "text": "Dubai business hours are Sunday-Thursday, 9 AM - 6 PM GST. NYC business hours are Monday-Friday, 9 AM - 5 PM EST.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Find the overlap window",
            "text": "The practical overlap is early morning NYC (6-8 AM EST) or late evening NYC (6-11 PM EST), depending on urgency.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Schedule your call",
            "text": "For business calls, schedule before 8 AM EST or after 6 PM EST. Consider using async communication for better work-life balance.",
            "position": 4
          }
        ]
      }
    },
    'paris': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call Paris from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 9:00 AM and 12:00 PM EST, which corresponds to 3:00 PM to 6:00 PM in Paris. This creates a 3-hour overlap during standard working hours."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is Paris ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paris is typically 6 hours ahead of New York. However, this gap briefly changes to 5 hours during DST transition weeks when Europe and North America change clocks at different times."
            }
          },
          {
            "@type": "Question",
            "name": "What are Paris business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paris business hours are typically 9:00 AM to 6:00 PM CET/CEST, Monday through Friday. Many businesses close for a long lunch break (12:30 PM - 2:00 PM), especially smaller shops."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call Paris from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to Paris",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "Paris is 6 hours ahead of New York (5 hours during DST transition weeks).",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Identify business hours",
            "text": "Paris business hours are 9 AM - 6 PM CET/CEST. NYC business hours are 9 AM - 5 PM EST. Avoid French lunch hours (12:30-2 PM).",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Find the overlap window",
            "text": "The optimal overlap for business calls is 9 AM - 12 PM EST (3 PM - 6 PM Paris time).",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Schedule your call",
            "text": "Book calls during the overlap window. Avoid scheduling during Paris lunch hours. For personal calls, you can extend until 5 PM EST (11 PM Paris).",
            "position": 4
          }
        ]
      }
    },
    'singapore': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call Singapore from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 7:00 PM and 11:00 PM EST, which corresponds to 8:00 AM to 12:00 PM the next day in Singapore. Early morning EST (6-8 AM) catches Singapore's end of business day."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is Singapore ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Singapore is 13 hours ahead of New York. Singapore does not observe daylight saving time, but the difference varies to 12 hours when NYC observes DST."
            }
          },
          {
            "@type": "Question",
            "name": "What are Singapore business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Singapore business hours are typically 9:00 AM to 6:00 PM SGT, Monday through Friday. Some businesses operate 8:30 AM to 5:30 PM. Many tech companies have flexible hours."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call Singapore from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to Singapore",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "Singapore is 13 hours ahead of New York (12 hours during US DST). Singapore does not observe DST.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Identify business hours",
            "text": "Singapore business hours are 9 AM - 6 PM SGT. NYC business hours are 9 AM - 5 PM EST.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Find the overlap window",
            "text": "Limited overlap exists. Evening NYC (7-11 PM EST) = morning Singapore (8 AM-12 PM). Early morning NYC (6-8 AM EST) = end of Singapore business day.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Schedule your call",
            "text": "Schedule evening calls (7-11 PM EST) or use async communication. Consider rotating meeting times to share the burden of odd hours.",
            "position": 4
          }
        ]
      }
    },
    'sydney': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call Sydney from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 6:00 PM and 11:00 PM EST, which corresponds to 10:00 AM to 3:00 PM the next day in Sydney. Early morning EST (6-8 AM) catches Sydney's end of business day."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is Sydney ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sydney is typically 15-16 hours ahead of New York, depending on daylight saving time. Both cities observe DST but at opposite times of the year, creating variation."
            }
          },
          {
            "@type": "Question",
            "name": "What are Sydney business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sydney business hours are typically 9:00 AM to 5:00 PM AEST/AEDT, Monday through Friday. Australian work culture emphasizes work-life balance, with most offices emptying by 5:30 PM."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call Sydney from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to Sydney",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "Sydney is 15-16 hours ahead of New York. Both cities observe DST at opposite times, causing the difference to vary.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Identify business hours",
            "text": "Sydney business hours are 9 AM - 5 PM AEST/AEDT. NYC business hours are 9 AM - 5 PM EST.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Find the overlap window",
            "text": "Minimal overlap exists. Evening NYC (6-11 PM EST) = mid-morning to afternoon Sydney. Early morning NYC (6-8 AM EST) = end of Sydney day.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Schedule your call",
            "text": "Schedule evening calls (6-11 PM EST) or early morning calls (6-8 AM EST). Strongly consider async communication for better work-life balance.",
            "position": 4
          }
        ]
      }
    },
    'tokyo': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call Tokyo from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for business calls is between 7:00 PM and 11:00 PM EST, which corresponds to 9:00 AM to 1:00 PM the next day in Tokyo. Early morning EST (6-9 AM) catches Tokyo's evening hours."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours is Tokyo ahead of New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tokyo is 14 hours ahead of New York during EST (winter), and 13 hours ahead during EDT (summer). Japan does not observe daylight saving time."
            }
          },
          {
            "@type": "Question",
            "name": "What are Tokyo business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tokyo business hours are typically 9:00 AM to 6:00 PM JST, Monday through Friday. Japanese work culture often includes longer hours, but official business hours end at 5-6 PM."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find the Best Time to Call Tokyo from New York",
        "description": "Step-by-step guide to finding the optimal calling time from NYC to Tokyo",
        "totalTime": "PT2M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the time difference",
            "text": "Tokyo is 14 hours ahead of New York in winter (13 hours in summer). Japan does not observe DST.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Identify business hours",
            "text": "Tokyo business hours are 9 AM - 6 PM JST. NYC business hours are 9 AM - 5 PM EST.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Find the overlap window",
            "text": "Limited overlap. Evening NYC (7-11 PM EST) = morning Tokyo (9 AM-1 PM). Early morning NYC (6-9 AM EST) = evening Tokyo (8-11 PM).",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Schedule your call",
            "text": "Schedule evening calls (7-11 PM EST) to catch Tokyo mornings. Use async communication for routine updates. Respect Japanese after-hours culture.",
            "position": 4
          }
        ]
      }
    },
    'new-york': {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to call international contacts from New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For European cities (London, Paris), call between 9 AM - 12 PM EST to catch their afternoon (2-5 PM local). For Asian cities (Tokyo, Singapore), call between 7-11 PM EST to reach their morning hours. For Middle East (Dubai), early morning (6-8 AM EST) or evening (6-11 PM EST) works best."
            }
          },
          {
            "@type": "Question",
            "name": "What time zones should New York businesses consider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NYC is EST/EDT (UTC-5/-4). Key time differences: London +5h, Paris +6h, Dubai +9h, Singapore +13h, Tokyo +14h, Sydney +15-16h. European cities have 3-hour overlap windows, while Asian cities require evening or early morning calls."
            }
          },
          {
            "@type": "Question",
            "name": "How do I schedule calls from New York to avoid inconvenient hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Europe, schedule 9 AM - 12 PM EST (afternoon their time). For Asia-Pacific, schedule evening calls 7-11 PM EST (morning their time) or use async communication. Avoid calling Europe after 12 PM EST (past 5-6 PM their time) and Asia before 7 PM EST (night hours there)."
            }
          }
        ]
      },
      howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Schedule International Calls from New York",
        "description": "Step-by-step guide for New York professionals scheduling international business calls",
        "totalTime": "PT3M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Identify the destination time zone",
            "text": "Determine if you're calling Europe (+5-6h), Middle East (+7-9h), or Asia-Pacific (+12-16h). Check if they observe daylight saving time.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Find your business hours overlap",
            "text": "Europe: 9 AM-12 PM EST works best. Middle East: 6-8 AM or 6-11 PM EST. Asia: 7-11 PM EST. Calculate the overlap window for your specific destination.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Consider cultural factors",
            "text": "Europe: Avoid calling during lunch (12-2 PM their time). Dubai: Remember Sunday-Thursday work week. Asia: Respect after-hours culture, especially in Japan.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Choose synchronous or asynchronous communication",
            "text": "For convenient overlap (Europe), schedule video calls. For difficult time zones (Asia-Pacific), consider async tools like Loom, detailed emails, or rotating meeting times.",
            "position": 4
          }
        ]
      }
    }
  }

  return schemas[citySlug] || null
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  
  const schemas = getSchemas(citySlug)
  
  // Render with schema if available
  const renderWithSchema = (Component: any) => {
    if (!schemas) return <Component city={city as any} />
    
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }}
        />
        <Component city={city as any} />
      </>
    )
  }
  
  // Route to appropriate component with schema
  if (citySlug === 'london') return renderWithSchema(LondonCallTimesContent)
  if (citySlug === 'tokyo') return renderWithSchema(TokyoCallTimesContent)
  if (citySlug === 'dubai') return renderWithSchema(DubaiCallTimesContent)
  if (citySlug === 'singapore') return renderWithSchema(SingaporeCallTimesContent)
  if (citySlug === 'paris') return renderWithSchema(ParisCallTimesContent)
  if (citySlug === 'sydney') return renderWithSchema(SydneyCallTimesContent)
  if (citySlug === 'new-york') return renderWithSchema(CallTimesContent)
  
  return <CallTimesContent city={city as any} />
}
