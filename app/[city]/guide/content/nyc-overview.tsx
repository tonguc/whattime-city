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

// Long-tail keyword optimized FAQ data for New York
const FAQ_DATA = [
  {
    question: "What is the time difference between New York and London right now?",
    answer: "New York is typically 5 hours behind London. When it's 12:00 PM in New York, it's 5:00 PM in London. However, for 2-3 weeks in March and November, the difference shifts to 4 or 6 hours because the US and UK change clocks on different dates."
  },
  {
    question: "Is New York on EST or EDT right now?",
    answer: "New York uses EST (Eastern Standard Time, UTC-5) from the first Sunday of November to the second Sunday of March. During summer months, New York switches to EDT (Eastern Daylight Time, UTC-4). Check the current date — if it's between March and November, New York is likely on EDT."
  },
  {
    question: "What time does the New York Stock Exchange open and close?",
    answer: "The NYSE opens at 9:30 AM and closes at 4:00 PM Eastern Time, Monday through Friday. Pre-market trading starts at 4:00 AM ET, and after-hours trading runs until 8:00 PM ET. For London investors, that's 2:30 PM to 9:00 PM GMT (winter) or 2:30 PM to 9:00 PM BST (summer)."
  },
  {
    question: "What is the best time to call New York from India?",
    answer: "The best time to call New York from India is between 7:00 PM and 10:00 PM IST, which reaches New York during their morning business hours (9:30 AM - 12:30 PM ET). Avoid calling after 11:00 PM IST as New York offices will be closing."
  },
  {
    question: "How many hours behind is New York from Tokyo?",
    answer: "New York is 14 hours behind Tokyo during standard time (EST vs JST). When it's 9:00 AM in Tokyo, it's 7:00 PM the previous day in New York. During US daylight saving time, the difference reduces to 13 hours. Japan does not observe DST."
  },
  {
    question: "When do clocks change in New York in 2025?",
    answer: "In 2025, New York clocks spring forward to EDT on Sunday, March 9th at 2:00 AM (clocks move to 3:00 AM). Clocks fall back to EST on Sunday, November 2nd at 2:00 AM (clocks move to 1:00 AM). Note: US changes clocks 2-3 weeks before Europe."
  },
  {
    question: "What time zone is New York City in?",
    answer: "New York City is in the Eastern Time Zone. This includes EST (Eastern Standard Time, UTC-5) in winter and EDT (Eastern Daylight Time, UTC-4) in summer. The Eastern Time Zone covers the entire US East Coast from Maine to Florida, plus states like Ohio and Indiana."
  },
  {
    question: "What are typical business hours in New York City?",
    answer: "Standard NYC business hours are 9:00 AM to 5:00 PM ET, Monday through Friday. However, Wall Street and finance often start at 7:00-8:00 AM to catch European market close. Tech companies trend later (10 AM - 7 PM). Restaurants serve dinner from 5:30 PM, with prime time at 7:30-8:30 PM."
  }
]

export default function NYCGuideContent({ city, config, isLight, timeStr }: Props) {
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
          New York Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the city that never sleeps
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current New York Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Wall Street traders, scheduling a call with Manhattan clients, 
          or planning to catch a Broadway show — understanding New York's time zone is essential for 
          anyone doing business with the world's financial capital.
        </p>
        <p>
          New York operates on <strong>Eastern Standard Time (EST)</strong> in winter and <strong>Eastern 
          Daylight Time (EDT)</strong> in summer. As the home of the NYSE, NASDAQ, and countless 
          multinational headquarters, New York time drives global business rhythms.
        </p>
        <p>
          But there's more to NYC time than just knowing "EST." What matters is understanding when 
          the markets open, when you can reach your contacts, and how the city's unique 24/7 culture 
          affects scheduling. Yes, some things really are open at 3 AM.
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
                  ? 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-amber-500/50'
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
          Understanding New York Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          EST vs EDT: What's the Difference?
        </h3>
        <p>
          New York switches between two time designations: <strong>EST (Eastern Standard Time)</strong> is UTC-5, used from 
          early November to mid-March. <strong>EDT (Eastern Daylight Time)</strong> is UTC-4, used from mid-March to early November 
          when clocks "spring forward" one hour.
        </p>
        <p>
          The US changes clocks on different dates than Europe — typically 2-3 weeks earlier in spring and 1 week 
          later in fall. This creates brief periods where the usual time differences are off by an hour.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Wall Street Sets the Rhythm
        </h3>
        <p>
          The New York Stock Exchange (9:30 AM - 4:00 PM ET) is the heartbeat of global finance. Asian markets 
          close as New York wakes up, European markets overlap in the morning, and after-hours trading extends 
          the action. For traders worldwide, New York time isn't just a reference — it's the reference.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>NYC Morning (9 AM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 2 PM (winter) / 2 PM (summer)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 11 PM (same day)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 6 PM</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 6 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>NYC Evening (6 PM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 11 PM (same day)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 8 AM (next day)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 10 AM (next day)</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 3 PM</li>
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
          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
          : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with New York?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Wall Street and your team.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with New York Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            The golden window for US-Europe calls is 9 AM - 12 PM ET (2-5 PM London). For Asia, 
            you'll need early morning NYC calls (7-9 AM ET) to catch <Link href="/tokyo/" className={linkColor}>Tokyo</Link> or <Link href="/singapore/" className={linkColor}>Singapore</Link> 
            before their day ends. Many global companies schedule "NYC-friendly" times knowing the city's influence.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? You'll "gain" 5-8 hours heading west — arrive in NYC and it feels like 
            afternoon when your body says bedtime. Stay awake until 10 PM local time to reset faster. 
            From Asia, the jet lag is brutal (13-16 hours). Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery strategies.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working remotely with a NYC-based team from abroad? Europe has excellent overlap 
            (afternoon EST = evening CET). Asia-Pacific remote workers often adopt "NYC hours" — 
            starting late evening local time. Consider co-working spaces with 24-hour access.
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
            📈 NYSE & NASDAQ
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
            🇺🇸 US Holidays
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
