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

// Long-tail keyword optimized FAQ data for Tokyo
const FAQ_DATA = [
  {
    question: "What is the time difference between Tokyo and New York right now?",
    answer: "Tokyo is 14 hours ahead of New York during Eastern Standard Time (EST). When it's 9:00 AM in New York, it's 11:00 PM the same day in Tokyo. During US daylight saving time (EDT), the difference reduces to 13 hours. Japan does not observe daylight saving time, keeping calculations consistent."
  },
  {
    question: "Does Japan use daylight saving time?",
    answer: "No, Japan does not observe daylight saving time (DST). Tokyo remains on Japan Standard Time (JST, UTC+9) year-round. This simplifies scheduling with Japan but means the time difference with countries that use DST (like the US and UK) changes twice a year."
  },
  {
    question: "What time does the Tokyo Stock Exchange open and close?",
    answer: "The Tokyo Stock Exchange (TSE) opens at 9:00 AM and closes at 3:00 PM JST, Monday through Friday. There's a lunch break from 11:30 AM to 12:30 PM. For New York investors, that's 7:00 PM to 1:00 AM ET (previous day). For London, it's 12:00 AM to 6:00 AM GMT."
  },
  {
    question: "What is the best time to call Tokyo from the US East Coast?",
    answer: "The best time to call Tokyo from the US East Coast is between 7:00 PM and 10:00 PM ET, which reaches Tokyo during their morning business hours (9:00 AM - 12:00 PM JST the next day). Calling at 8:00 AM ET catches Tokyo at 10:00 PM — too late for business."
  },
  {
    question: "How many hours ahead is Tokyo from London?",
    answer: "Tokyo is 9 hours ahead of London during GMT (winter). When it's 12:00 PM in London, it's 9:00 PM in Tokyo. During British Summer Time (BST), the difference reduces to 8 hours. This makes late afternoon London calls ideal for reaching Tokyo before their day ends."
  },
  {
    question: "What time zone is Tokyo Japan in?",
    answer: "Tokyo is in Japan Standard Time (JST), which is UTC+9. All of Japan uses the same time zone with no regional variations. JST is the same as Korea Standard Time (KST) in Seoul. Major cities on similar time: Seoul, Pyongyang, Palau, and parts of Indonesia."
  },
  {
    question: "What are typical business hours in Tokyo Japan?",
    answer: "Standard Tokyo business hours are 9:00 AM to 6:00 PM JST, Monday through Friday. However, Japanese work culture often extends beyond official hours. Banks typically close at 3:00 PM. Department stores open 10:00 AM to 8:00 PM. Convenience stores (konbini) are 24/7."
  },
  {
    question: "What is the best time to call Tokyo from California?",
    answer: "The best time to call Tokyo from California (PST/PDT) is between 4:00 PM and 7:00 PM PT, which reaches Tokyo during their morning (9:00 AM - 12:00 PM JST the next day). Evening calls from California (after 8 PM PT) catch Tokyo's afternoon, which also works well."
  }
]

export default function TokyoOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

  // Generate FAQ Schema JSON-LD
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
      
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Tokyo Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Japan's bustling capital
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Tokyo Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Japanese business partners, planning a trip to experience 
          cherry blossom season, or tracking the Nikkei 225 opening — understanding Tokyo's time zone 
          is essential for anyone connecting with the world's largest metropolitan economy.
        </p>
        <p>
          Tokyo operates on <strong>Japan Standard Time (JST)</strong>, which is UTC+9 year-round. 
          Unlike most developed nations, Japan does not observe daylight saving time, making time 
          calculations refreshingly consistent throughout the year.
        </p>
        <p>
          But there's more to Tokyo time than just "JST." What matters is understanding the unique 
          rhythm of Japanese business culture — from the 9 AM bow to the after-work nomikai, Tokyo 
          runs on precision and punctuality that defines the nation.
        </p>
      </section>
      
            {/* Quick Facts - Technical info only, no city links (moved to table) */}
      <QuickFacts config={config} isLight={isLight} />
      
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
                  ? 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-rose-500/50'
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
      
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Tokyo Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why Japan Doesn't Use Daylight Saving Time
        </h3>
        <p>
          Japan briefly experimented with DST during the US occupation (1948-1951) but abandoned it 
          due to unpopularity. Today, the consistent UTC+9 simplifies everything from train schedules 
          (famously punctual) to business planning. When other countries shift clocks, Japan stays put — 
          meaning your time difference with Tokyo changes even though Tokyo itself doesn't change.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Challenge of US-Japan Scheduling
        </h3>
        <p>
          The 13-14 hour gap between Tokyo and the US East Coast makes real-time collaboration challenging. 
          Most US-Japan calls happen at the edges of business hours: early morning US (evening Tokyo) or 
          late evening US (morning Tokyo). Many companies designate specific "overlap hours" for 
          cross-Pacific meetings.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Tokyo Morning (9 AM JST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 7 PM (prev day, EST)</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 4 PM (prev day)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 12 AM (midnight)</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 8 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Tokyo Evening (6 PM JST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 4 AM (same day, EST)</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 1 AM (same day)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 9 AM</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 8 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
            {/* Region-based City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200' 
          : 'bg-gradient-to-r from-rose-900/30 to-pink-900/30 border border-rose-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Tokyo?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that bridges the Pacific time gap.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Tokyo Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Japanese business culture values punctuality highly — being late is a serious faux pas. 
            For US colleagues, 7-8 PM ET calls catch Tokyo's morning. European teams have better overlap: 
            a <Link href="/london/" className={linkColor}>London</Link> morning meeting at 8 AM GMT reaches Tokyo at 5 PM before the workday ends.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from the US West Coast? You'll cross the International Date Line and "lose" a day 
            (but gain it back on return). Jet lag from the US to Japan is notoriously difficult — 
            your body thinks it's 3 AM when Tokyo is serving breakfast. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery strategies.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working with Japanese companies remotely requires flexibility. Many adopt "hybrid hours" — 
            available during Japan's end-of-day (5-7 PM JST) which is early morning for Europe. 
            <Link href="/singapore/" className={linkColor}> Singapore</Link> and <Link href="/sydney/" className={linkColor}>Sydney</Link> have the easiest overlap with Tokyo business hours.
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
      
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/time-business/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📈 Tokyo Stock Exchange
          </Link>
          <Link 
            href={`/${city.slug}/guide/best-time-to-call/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/public-holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🇯🇵 Japanese Holidays
          </Link>
        </div>
      </section>
      
      {/* E-E-A-T Footer */}
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
          Time zone data sourced from IANA Time Zone Database. This guide is regularly reviewed and updated to ensure accuracy.
        </p>
      </footer>
    </div>
  )
}
