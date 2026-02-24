'use client'

import { useState } from 'react'
import { City, cities } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import Link from 'next/link'

interface FAQSectionProps {
  city: City
  seoData?: any
}

// DST info by country code
const dstCountries: Record<string, boolean> = {
  'US': true, 'CA': true, 'GB': true, 'DE': true, 'FR': true, 'IT': true, 'ES': true,
  'NL': true, 'BE': true, 'AU': true, 'NZ': true, 'MX': true, 'CL': true, 'BR': false,
  'JP': false, 'CN': false, 'IN': false, 'SG': false, 'AE': false, 'TR': false,
  'KR': false, 'HK': false, 'TH': false, 'VN': false, 'PH': false, 'MY': false,
  'RU': false, 'SA': false, 'EG': false, 'ZA': false, 'NG': false, 'KE': false
}

// Timezone abbreviations
const tzAbbreviations: Record<string, string> = {
  'America/New_York': 'EST/EDT',
  'America/Los_Angeles': 'PST/PDT',
  'America/Chicago': 'CST/CDT',
  'America/Denver': 'MST/MDT',
  'America/Toronto': 'EST/EDT',
  'America/Vancouver': 'PST/PDT',
  'Europe/London': 'GMT/BST',
  'Europe/Paris': 'CET/CEST',
  'Europe/Berlin': 'CET/CEST',
  'Europe/Amsterdam': 'CET/CEST',
  'Europe/Istanbul': 'TRT',
  'Europe/Moscow': 'MSK',
  'Asia/Tokyo': 'JST',
  'Asia/Shanghai': 'CST',
  'Asia/Singapore': 'SGT',
  'Asia/Dubai': 'GST',
  'Asia/Kolkata': 'IST',
  'Asia/Bangkok': 'ICT',
  'Asia/Hong_Kong': 'HKT',
  'Asia/Seoul': 'KST',
  'Australia/Sydney': 'AEST/AEDT',
  'Pacific/Auckland': 'NZST/NZDT',
  'America/Sao_Paulo': 'BRT',
}

// Get UTC offset string
function getUTCOffset(timezone: string): string {
  try {
    const now = new Date()
    const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
    const local = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
    const diff = (local.getTime() - utc.getTime()) / (1000 * 60 * 60)
    const sign = diff >= 0 ? '+' : ''
    const hours = Math.floor(Math.abs(diff))
    const mins = Math.round((Math.abs(diff) - hours) * 60)
    return mins > 0 ? `UTC${sign}${diff >= 0 ? hours : -hours}:${mins.toString().padStart(2, '0')}` : `UTC${sign}${Math.round(diff)}`
  } catch {
    return 'UTC'
  }
}

// Calculate time difference between two timezones in hours
function getTimeDiffHours(fromTz: string, toTz: string): number {
  try {
    const now = new Date()
    const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromTz }))
    const toTime = new Date(now.toLocaleString('en-US', { timeZone: toTz }))
    return (toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60)
  } catch {
    return 0
  }
}

// Format time difference as readable string
function formatTimeDiff(hours: number): string {
  const absHours = Math.abs(hours)
  if (hours === 0) return 'the same time as'
  
  // Handle half-hour offsets
  if (absHours % 1 !== 0) {
    const h = Math.floor(absHours)
    const m = Math.round((absHours % 1) * 60)
    const timeStr = m > 0 ? `${h} hours and ${m} minutes` : `${h} hours`
    return hours > 0 ? `${timeStr} ahead of` : `${timeStr} behind`
  }
  
  const hourStr = absHours === 1 ? '1 hour' : `${Math.round(absHours)} hours`
  return hours > 0 ? `${hourStr} ahead of` : `${hourStr} behind`
}

// Get reference cities (New York and London)
function getReferenceCities(): { newYork: City | undefined; london: City | undefined } {
  return {
    newYork: cities.find(c => c.slug === 'new-york'),
    london: cities.find(c => c.slug === 'london')
  }
}

// Helper: format time at a given hour with offset
function formatTimeAt(hour: number, offsetHours: number): string {
  let newHour = hour + offsetHours
  let dayShift = ''
  
  if (newHour >= 24) {
    newHour -= 24
    dayShift = ' (next day)'
  } else if (newHour < 0) {
    newHour += 24
    dayShift = ' (previous day)'
  }
  
  const ampm = newHour >= 12 ? 'PM' : 'AM'
  const displayHour = newHour > 12 ? newHour - 12 : (newHour === 0 ? 12 : newHour)
  
  return `${displayHour}:00 ${ampm}${dayShift}`
}

// Generate FAQ data for a city
function generateFAQs(city: City): Array<{ question: string; answer: string }> {
  const hasDST = dstCountries[city.countryCode] ?? false
  const tzAbbr = tzAbbreviations[city.timezone] || city.timezone.split('/').pop()?.replace('_', ' ') || city.timezone
  const utcOffset = getUTCOffset(city.timezone)
  const { newYork, london } = getReferenceCities()
  
  const faqs: Array<{ question: string; answer: string }> = []
  
  // FAQ 1: What time is it? (highest volume)
  faqs.push({
    question: `What time is it in ${city.city} right now?`,
    answer: `${city.city} is in the ${tzAbbr} time zone (${utcOffset}). The current local time is displayed at the top of this page and updates in real-time. ${city.city} is located in ${city.country}.`
  })
  
  // FAQ 2: Time zone (high volume)
  faqs.push({
    question: `What time zone is ${city.city} in?`,
    answer: `${city.city} is in the ${tzAbbr} time zone, which is ${utcOffset}. The IANA time zone identifier is ${city.timezone}.`
  })
  
  // FAQ 3: DST (high intent)
  if (hasDST) {
    const period = city.countryCode === 'US' || city.countryCode === 'CA' ? 'March to November' : 
                   city.countryCode === 'AU' || city.countryCode === 'NZ' ? 'October to April' : 'March to October'
    faqs.push({
      question: `Does ${city.city} use daylight saving time?`,
      answer: `Yes, ${city.city} observes Daylight Saving Time (DST) from ${period}. During DST, clocks move forward by 1 hour. Check the Time Zone Facts section above for the exact date of the next DST change.`
    })
  } else {
    faqs.push({
      question: `Does ${city.city} use daylight saving time?`,
      answer: `No, ${city.city} does not observe Daylight Saving Time. The time remains at ${utcOffset} throughout the year, making it easier to schedule international calls and meetings.`
    })
  }
  
  // FAQ 4: Time difference with London (if not London itself)
  if (london && city.slug !== 'london') {
    const diffToLondon = getTimeDiffHours(london.timezone, city.timezone)
    const diffStr = formatTimeDiff(diffToLondon)
    faqs.push({
      question: `What is the time difference between ${city.city} and London?`,
      answer: `${city.city} is ${diffStr} London. When it's 12:00 PM (noon) in London, it's ${formatTimeAt(12, diffToLondon)} in ${city.city}. Note that this difference may vary by 1 hour when either location observes Daylight Saving Time.`
    })
  }
  
  // FAQ 5: Time difference with New York (if not New York itself)
  if (newYork && city.slug !== 'new-york') {
    const diffToNY = getTimeDiffHours(newYork.timezone, city.timezone)
    const diffStr = formatTimeDiff(diffToNY)
    faqs.push({
      question: `What is the time difference between ${city.city} and New York?`,
      answer: `${city.city} is ${diffStr} New York (Eastern Time). When it's 9:00 AM in New York, it's ${formatTimeAt(9, diffToNY)} in ${city.city}. This difference may change during Daylight Saving Time transitions.`
    })
  }
  
  // FAQ 6: Best time to call (business intent)
  faqs.push({
    question: `What is the best time to call ${city.city}?`,
    answer: `The best time to call ${city.city} is during business hours: 9:00 AM to 6:00 PM local time (${tzAbbr}). For international calls, use our Time Converter above to find overlapping business hours between ${city.city} and your location.`
  })
  
  // FAQ 7: Business hours (business intent)
  faqs.push({
    question: `What are typical business hours in ${city.city}?`,
    answer: `Standard business hours in ${city.city} are Monday to Friday, 9:00 AM to 6:00 PM ${tzAbbr}. Banks typically operate 9:00 AM to 5:00 PM. Shops may have extended hours, often until 8:00 PM or later in commercial areas.`
  })
  
  return faqs
}

// Accordion Item Component
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle, 
  isLight 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  isLight: boolean
}) {
  return (
    <div 
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
      className={`border-b last:border-b-0 ${isLight ? 'border-slate-200' : 'border-slate-700'}`}
    >
      <button
        onClick={onToggle}
        className={`w-full py-4 flex items-center justify-between gap-3 text-left transition-colors ${
          isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-800/30'
        }`}
        aria-expanded={isOpen}
      >
        <h3 
          itemProp="name"
          className={`font-medium pr-4 ${isLight ? 'text-slate-800' : 'text-white'}`}
        >
          {question}
        </h3>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform ${
          isOpen ? 'rotate-180' : ''
        } ${isLight ? 'bg-slate-100 text-slate-500' : 'bg-slate-700 text-slate-400'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        itemScope 
        itemProp="acceptedAnswer" 
        itemType="https://schema.org/Answer"
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p 
          itemProp="text"
          className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection({ city, seoData }: FAQSectionProps) {
  const { card, textSection, isLight } = useThemeClasses()
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First one open by default
  
  const faqs = (seoData?.faq && seoData.faq.length > 0) ? seoData.faq : generateFAQs(city)
  
  // Generate JSON-LD Schema
  const faqSchema = seoData?.faq_schema || {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
  
  // Link styling
  const linkClass = isLight 
    ? 'text-blue-600 hover:text-blue-800 hover:underline' 
    : 'text-sky-400 hover:text-sky-300 hover:underline'

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* FAQ Section */}
      <section className={`rounded-2xl p-5 border ${card} mt-4`}>
        <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
          <span>❓</span>
          <span>Frequently Asked Questions</span>
        </h2>
        
        {/* FAQ Accordion */}
        <div itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              isLight={isLight}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className={`mt-4 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
          <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Need to schedule a meeting with someone in {city.city}?{' '}
            <Link href={`/meeting?from=${city.slug}`} className={linkClass}>
              Try our Meeting Planner →
            </Link>
          </p>
        </div>
        
        {/* E-E-A-T Footer */}
        <div className={`mt-3 pt-3 border-t flex flex-wrap justify-between gap-2 text-xs ${
          isLight ? 'border-slate-200 text-slate-400' : 'border-slate-700 text-slate-500'
        }`}>
          <span>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          <span>✓ Data verified by WhatTime.city Editorial Team</span>
        </div>
      </section>
    </>
  )
}
