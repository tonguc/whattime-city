'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { QuickFacts, CityComparisonTable } from '../components'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

// Long-tail keyword optimized FAQ data for Hong Kong
// Target: high search volume questions from Google, Ahrefs, SEMrush research
const FAQ_DATA = [
  {
    question: "What is the time difference between Hong Kong and New York right now?",
    answer: "Hong Kong is typically 13 hours ahead of New York during EST (November-March), and 12 hours ahead during EDT (March-November). When it's 9:00 AM in New York, it's 10:00 PM the same day in Hong Kong (EST) or 9:00 PM (EDT). Hong Kong does not observe daylight saving time, so the difference shifts when the US changes clocks."
  },
  {
    question: "Does Hong Kong observe daylight saving time?",
    answer: "No, Hong Kong has not observed daylight saving time since 1979. The city maintains UTC+8 (HKT - Hong Kong Time) year-round. This means the time difference with Western countries changes when they switch clocks, even though Hong Kong's time stays constant. This stability is valued by the financial sector for consistent trading schedules."
  },
  {
    question: "What time does the Hong Kong Stock Exchange open and close?",
    answer: "HKEX (Hong Kong Exchanges and Clearing) opens at 9:30 AM and closes at 4:00 PM HKT, Monday through Friday. Uniquely, HKEX has a lunch break from 12:00 PM to 1:00 PM — one of the few major exchanges that still pauses midday. Pre-market session runs 9:00-9:30 AM. For London investors, that's 1:30 AM to 8:00 AM GMT (winter)."
  },
  {
    question: "What is the best time to call Hong Kong from the UK?",
    answer: "The best time to call Hong Kong from the UK is between 6:00 AM and 10:00 AM GMT, which reaches Hong Kong during their afternoon business hours (2:00 PM - 6:00 PM HKT). For evening calls, 5:00-7:00 PM GMT catches Hong Kong's morning (1:00-3:00 AM might work for night owls, but not recommended for business)."
  },
  {
    question: "How many hours ahead is Hong Kong from London?",
    answer: "Hong Kong is 8 hours ahead of London during GMT (winter), and 7 hours ahead during BST (British Summer Time, March-October). When it's 12:00 PM in London, it's 8:00 PM in Hong Kong (GMT) or 7:00 PM (BST). This makes Hong Kong well-positioned for same-day business communication with Europe."
  },
  {
    question: "Is Hong Kong time the same as China time?",
    answer: "Yes, Hong Kong uses the same time as mainland China (UTC+8). Despite being a Special Administrative Region with its own systems, Hong Kong Time (HKT) is identical to China Standard Time (CST). This alignment facilitates business between Hong Kong and cities like Shanghai, Beijing, and Shenzhen — all operate on the same clock."
  },
  {
    question: "What time zone is Hong Kong in?",
    answer: "Hong Kong is in the Hong Kong Time zone (HKT), which is UTC+8. This is the same time zone as Beijing, Singapore, Perth, and Taipei. The entire region uses this single time zone, making it easy to coordinate across East Asia and Southeast Asia during business hours."
  },
  {
    question: "What are typical business hours in Hong Kong?",
    answer: "Standard Hong Kong business hours are 9:00 AM to 6:00 PM, Monday through Friday. However, the finance sector often starts at 7:30-8:00 AM to overlap with European market close. Banks typically open 9:00 AM to 4:30 PM (Saturday 9:00 AM - 12:30 PM). Restaurants serve dim sum from 7:00 AM, lunch 12:00-2:00 PM, and dinner from 6:30 PM onwards."
  }
]

export default function HongKongOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

  // Generate FAQ Schema JSON-LD for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className={textColor}>
      {/* FAQ Schema JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Header with H1 + tagline + current time badge */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Hong Kong Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Asia's World City
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Hong Kong Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Hong Kong bankers, timing a call with HKEX traders, 
          or planning to explore Victoria Harbour at sunset — understanding Hong Kong's time zone 
          is essential for anyone doing business with one of Asia's most dynamic financial centers.
        </p>
        <p>
          Hong Kong operates on <strong>Hong Kong Time (HKT)</strong>, which is UTC+8 year-round. 
          Unlike Western cities that shift clocks twice yearly, Hong Kong hasn't observed daylight 
          saving time since 1979. This stability makes it a reliable anchor for international 
          scheduling — the same time as <Link href="/singapore/" className={linkColor}>Singapore</Link>, <Link href="/beijing/" className={linkColor}>Beijing</Link>, and Perth.
        </p>
        <p>
          But there's more to Hong Kong time than just "UTC+8." As a bridge between East and West, 
          the city's unique position creates golden windows for global business — morning overlap 
          with Australia, afternoon connection with Europe, and evening alignment with the Americas. 
          Understanding these rhythms unlocks Hong Kong's true potential as your gateway to Asia.
        </p>
      </section>
      
      {/* Quick Facts Card */}
            {/* Quick Facts - Technical info only, no city links (moved to table) */}
      <QuickFacts config={config} isLight={isLight} />
      
      {/* Explore Guide - 10 Cluster Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-red-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-red-500/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h3 className={`font-semibold ${headingColor}`}>{cluster.title}</h3>
                  <p className={`text-sm mt-1 ${mutedColor}`}>{cluster.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Understanding Time Section */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Hong Kong Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          HKT: Rock-Solid Consistency
        </h3>
        <p>
          Hong Kong Time (HKT) is UTC+8 — always. While <Link href="/london/" className={linkColor}>London</Link> shifts 
          between GMT and BST, and <Link href="/new-york/" className={linkColor}>New York</Link> toggles between EST and EDT, 
          Hong Kong's clock never moves. This was a deliberate choice after 1979: the business community 
          valued predictable scheduling over the marginal daylight benefits.
        </p>
        <p>
          For international business, this means <strong>the time difference with Hong Kong changes when 
          other cities adjust their clocks, not when Hong Kong does</strong>. Mark your calendar for the 
          US and European DST transitions — that's when your Hong Kong time calculations shift.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          HKEX: The Market with a Lunch Break
        </h3>
        <p>
          The Hong Kong Stock Exchange (HKEX) is unique among major world exchanges: it takes a lunch 
          break from 12:00 PM to 1:00 PM HKT. Trading sessions are 9:30 AM - 12:00 PM and 1:00 PM - 4:00 PM. 
          This midday pause reflects Hong Kong's dim sum culture — and creates interesting arbitrage 
          opportunities when paired with continuous markets like the NYSE.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>HK Morning (9 AM HKT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 1 AM (GMT) / 2 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 8 PM previous day (EST)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 12 PM (AEDT)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 10 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>HK Evening (6 PM HKT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 10 AM (GMT) / 11 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 5 AM (EST) / 6 AM (EDT)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 2 PM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 6 PM (same time)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Time vs Major Cities Table - ALL LINKS */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Hong Kong Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in HK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="px-4 py-3">🇯🇵 <Link href="/time/hong-kong/tokyo/" className={linkColor}>Tokyo</Link></td>
                <td className="px-4 py-3">+1 hour</td>
                <td className="px-4 py-3">1:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇺 <Link href="/time/hong-kong/sydney/" className={linkColor}>Sydney</Link></td>
                <td className="px-4 py-3">+3 hours*</td>
                <td className="px-4 py-3">3:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇸🇬 <Link href="/time/hong-kong/singapore/" className={linkColor}>Singapore</Link></td>
                <td className="px-4 py-3">Same time</td>
                <td className="px-4 py-3">12:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇪 <Link href="/time/hong-kong/dubai/" className={linkColor}>Dubai</Link></td>
                <td className="px-4 py-3">-4 hours</td>
                <td className="px-4 py-3">8:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇬🇧 <Link href="/time/hong-kong/london/" className={linkColor}>London</Link></td>
                <td className="px-4 py-3">-8 hours*</td>
                <td className="px-4 py-3">4:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇫🇷 <Link href="/time/hong-kong/paris/" className={linkColor}>Paris</Link></td>
                <td className="px-4 py-3">-7 hours*</td>
                <td className="px-4 py-3">5:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/hong-kong/new-york/" className={linkColor}>New York</Link></td>
                <td className="px-4 py-3">-13 hours*</td>
                <td className="px-4 py-3">11:00 PM (-1)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/hong-kong/los-angeles/" className={linkColor}>Los Angeles</Link></td>
                <td className="px-4 py-3">-16 hours*</td>
                <td className="px-4 py-3">8:00 PM (-1)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Times shown are approximate and may vary during daylight saving transitions.{' '}
          <Link href="/time/hong-kong/london/" className={linkColor}>See detailed time differences →</Link>
        </p>
      </section>
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200' 
          : 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Hong Kong?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for HKEX hours and your global team.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      {/* Practical Tips - 3 Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Hong Kong Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Hong Kong sits at the crossroads of global markets. For US-HK calls, early evening EST (7-9 PM) 
            catches Hong Kong's morning. Europe-HK has excellent overlap: a 4 PM London call lands at midnight HK — 
            but reverse it and 9 AM HK is 1 AM London. The sweet spot for US-Europe-Asia is challenging; consider 
            async communication or rotating meeting times. Many global firms use <Link href="/singapore/" className={linkColor}>Singapore</Link> and HK 
            interchangeably given identical time zones.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? The 12-13 hour flight lands you 7-8 hours "into the future" — leave London 
            at 10 PM, arrive HK around 5 PM next day. From the US West Coast, it's 15+ hours and a full day 
            forward. Hong Kong's vibrant night markets and late dining (restaurants fill at 8-9 PM) actually 
            help with jet lag adjustment. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery strategies.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working remotely with a Hong Kong team from the West? European remote workers enjoy reasonable 
            overlap — your afternoon is their late evening. US-based workers often adopt "Hong Kong hours" 
            for key meetings, starting their day at 7-8 PM local time. Hong Kong's world-class coworking 
            scene (WeWork, The Hive, Garage Society) offers 24/7 access for those juggling multiple time zones.
          </p>
        </div>
      </section>
      
      {/* FAQ Section with Schema Markup */}
      <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl ${cardBg}`}
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <h3 className={`font-medium mb-2 ${headingColor}`} itemProp="name">
                {faq.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-sm" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Deep Dive Links */}
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-red-50 border border-red-200' : 'bg-red-900/20 border border-red-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/business-hours/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-red-900/40 text-red-300 hover:bg-red-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-red-900/40 text-red-300 hover:bg-red-900/60'
            }`}
          >
            📈 HKEX Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-red-900/40 text-red-300 hover:bg-red-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-red-900/40 text-red-300 hover:bg-red-900/60'
            }`}
          >
            🇭🇰 HK Holidays
          </Link>
        </div>
      </section>
      
      {/* E-E-A-T Footer with Last Updated & Trust Signal */}
      <footer className={`text-sm ${mutedColor} border-t ${isLight ? 'border-slate-200' : 'border-slate-700'} pt-6`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            <strong>Last updated:</strong> January 2025
          </p>
          <p className="flex items-center gap-1">
            <span>✓</span>
            <span>Data verified by WhatTime.city Editorial Team</span>
          </p>
        </div>
        <p className={`mt-2 text-xs ${mutedColor}`}>
          Time zone data sourced from IANA Time Zone Database. HKEX trading hours verified against official exchange schedules. This guide is regularly reviewed and updated to ensure accuracy.
        </p>
      </footer>
    </div>
  )
}
