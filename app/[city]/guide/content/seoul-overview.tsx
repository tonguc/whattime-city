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

// Long-tail keyword optimized FAQ data for Seoul
// Target: high search volume questions about Seoul/Korea time
const FAQ_DATA = [
  {
    question: "What is the time difference between Seoul and London right now?",
    answer: "Seoul is 9 hours ahead of London during GMT (winter), and 8 hours ahead during BST (British Summer Time, March-October). When it's 12:00 PM in Seoul, it's 3:00 AM in London (GMT) or 4:00 AM (BST). South Korea does not observe daylight saving time, so the difference only changes when the UK adjusts its clocks."
  },
  {
    question: "Does South Korea observe daylight saving time?",
    answer: "No, South Korea has not observed daylight saving time since 1988 (when it was briefly used during the Seoul Olympics). The country uses Korea Standard Time (KST, UTC+9) year-round. This makes Seoul time predictable and identical to Tokyo time throughout the entire year."
  },
  {
    question: "Is Seoul time the same as Tokyo time?",
    answer: "Yes, Seoul and Tokyo are always on the same time — both use UTC+9 year-round with no daylight saving. When it's 3:00 PM in Seoul, it's 3:00 PM in Tokyo. This makes business coordination between Korea and Japan seamless, which is important given the strong trade relationship between the two economies."
  },
  {
    question: "What time does the Korean Stock Exchange (KOSPI) open and close?",
    answer: "The Korea Exchange (KRX) opens at 9:00 AM and closes at 3:30 PM KST, Monday through Friday. Unlike Shanghai or Hong Kong, there's no lunch break — trading is continuous. For London investors, that's midnight to 6:30 AM GMT (winter) or 1:00 AM to 7:30 AM BST (summer)."
  },
  {
    question: "What is the best time to call Seoul from New York?",
    answer: "The best time to call Seoul from New York is between 6:00 PM and 10:00 PM EST, which reaches Seoul during their morning business hours (8:00 AM - 12:00 PM KST next day). For afternoon Seoul time, 5:00-8:00 AM EST works well. Seoul is 14 hours ahead of New York (EST), or 13 hours during EDT."
  },
  {
    question: "How many hours ahead is Seoul from New York?",
    answer: "Seoul is 14 hours ahead of New York during EST (November-March), and 13 hours ahead during EDT (March-November). When it's 9:00 AM in New York, it's 11:00 PM the same day in Seoul (EST) or 10:00 PM (EDT). Korea doesn't observe DST, so the difference shifts when the US changes clocks."
  },
  {
    question: "What time zone is Seoul in?",
    answer: "Seoul is in Korea Standard Time (KST), which is UTC+9. This is the same time as Tokyo (JST) and one hour ahead of Shanghai, Hong Kong, and Singapore. The entire Korean peninsula (both South and North Korea) uses this time zone, though it wasn't always this way — North Korea briefly used UTC+8:30 from 2015-2018."
  },
  {
    question: "What are typical business hours in Seoul?",
    answer: "Standard Seoul business hours are 9:00 AM to 6:00 PM KST, Monday through Friday. However, Korean work culture often extends beyond this — 'dinner meetings' (회식, hoesik) and late hours are common, especially at chaebols (Samsung, Hyundai, LG). Banks open 9:00 AM to 4:00 PM. Department stores typically run 10:30 AM to 8:00 PM, with many staying open until 10:00 PM."
  }
]

export default function SeoulOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Seoul Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in South Korea's dynamic capital and tech powerhouse
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Seoul Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Samsung engineers, timing a K-pop livestream, 
          or planning to catch cherry blossoms along the Han River — understanding Seoul's 
          time zone is essential for anyone engaging with Asia's fourth-largest economy 
          and one of the world's most technologically advanced cities.
        </p>
        <p>
          Seoul operates on <strong>Korea Standard Time (KST)</strong>, which is UTC+9 year-round. 
          Like neighboring <Link href="/tokyo/" className={linkColor}>Tokyo</Link>, South Korea 
          doesn't observe daylight saving time, making scheduling wonderfully predictable. 
          Seoul shares its time zone with Japan, meaning both capitals always show identical 
          time — a boon for the significant business traffic between these economic giants.
        </p>
        <p>
          As home to global chaebols like Samsung, Hyundai, and LG, plus a thriving startup 
          ecosystem and the world's fastest internet, Seoul operates at a pace that matches 
          its connectivity. The city that never sleeps has 24-hour convenience stores on 
          every corner, late-night Korean BBQ in Hongdae, and a work culture that often 
          extends well beyond official business hours.
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
                  ? 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-blue-500/50'
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
          Understanding Seoul Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          KST: Perfectly Aligned with Tokyo
        </h3>
        <p>
          Seoul and <Link href="/tokyo/" className={linkColor}>Tokyo</Link> share UTC+9 with no 
          daylight saving complications. This synchronization isn't coincidental — during Japanese 
          colonial rule (1910-1945), Korea adopted Tokyo's time zone and kept it after independence. 
          For modern business, this means Korean and Japanese markets, factories, and offices 
          operate on identical schedules year-round.
        </p>
        <p>
          Seoul is exactly one hour ahead of the UTC+8 bloc:{' '}
          <Link href="/shanghai/" className={linkColor}>Shanghai</Link>,{' '}
          <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link>,{' '}
          <Link href="/singapore/" className={linkColor}>Singapore</Link>, and Taipei. This small 
          gap makes East Asian business coordination relatively straightforward compared to 
          trans-Pacific or Europe-Asia calls.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          KOSPI: Asia's Trading Hours
        </h3>
        <p>
          The Korea Exchange (KRX) runs 9:00 AM - 3:30 PM KST with no lunch break — continuous 
          trading for 6.5 hours. This overlaps significantly with <Link href="/tokyo/" className={linkColor}>Tokyo's</Link> TSE 
          (9:00 AM - 3:00 PM JST) and partially with{' '}
          <Link href="/hong-kong/" className={linkColor}>Hong Kong's</Link> HKEX and{' '}
          <Link href="/shanghai/" className={linkColor}>Shanghai's</Link> SSE. For Western investors, 
          KOSPI action happens overnight — London sleeps while Seoul trades.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Seoul Morning (9 AM KST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: Midnight (GMT) / 1 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 7 PM previous day (EST)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 11 AM (AEDT)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 9 AM (same time)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Seoul Evening (6 PM KST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 9 AM (GMT) / 10 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 4 AM (EST) / 5 AM (EDT)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 1 PM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 5 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Time vs Major Cities Table - ALL LINKS */}
            {/* Region-based City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
          : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Seoul?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Gangnam and your global team.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      {/* Practical Tips - 3 Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Seoul Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Seoul's 14-hour gap with <Link href="/new-york/" className={linkColor}>New York</Link> is 
            challenging but manageable. Evening EST (6-10 PM) catches Seoul's morning. For Europe, 
            early morning GMT meetings (7-9 AM) reach Seoul's afternoon. Korean business culture 
            values hierarchy and relationship-building — don't be surprised by after-hours 회식 
            (hoesik, dinner meetings). Chaebols (Samsung, Hyundai, LG) often work longer hours than 
            Western norms. KakaoTalk is essential for business communication in Korea.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe takes 10-12 hours; from the US West Coast, around 12-13 hours. Seoul's 
            jet lag is manageable from Europe (8-9 hours forward) but brutal from the Americas 
            (essentially flip your day/night). The city's 24-hour culture helps adjustment — 
            convenience stores, jjimjilbangs (spas), and Hongdae nightlife run around the clock. 
            April (cherry blossoms) and October (autumn foliage) are peak tourist seasons. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Seoul boasts the world's fastest average internet speeds — perfect for remote work. 
            Europeans can catch Seoul's end-of-day (your morning); Americans typically work Seoul 
            hours for key meetings (evening local time). Coworking spaces like WeWork Gangnam and 
            local options in Seongsu-dong offer great facilities. Cost of living is moderate by 
            Asian capital standards. Digital nomad visas are improving — check current requirements.
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700/30'}`}>
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
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                : 'bg-blue-900/40 text-blue-300 hover:bg-blue-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                : 'bg-blue-900/40 text-blue-300 hover:bg-blue-900/60'
            }`}
          >
            📈 KOSPI Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                : 'bg-blue-900/40 text-blue-300 hover:bg-blue-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                : 'bg-blue-900/40 text-blue-300 hover:bg-blue-900/60'
            }`}
          >
            🎎 Korean Holidays
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
          Time zone data sourced from IANA Time Zone Database. KRX trading hours verified against official Korea Exchange schedules. Korean public holidays sourced from Ministry of the Interior and Safety.
        </p>
      </footer>
    </div>
  )
}
