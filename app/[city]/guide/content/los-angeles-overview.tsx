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

// Long-tail keyword optimized FAQ data for Los Angeles
// Target: high search volume questions about LA/Pacific time
const FAQ_DATA = [
  {
    question: "What is the time difference between Los Angeles and New York right now?",
    answer: "Los Angeles is always 3 hours behind New York. When it's 12:00 PM in New York, it's 9:00 AM in LA. Both cities follow the same daylight saving schedule, so this 3-hour difference remains constant year-round. This makes East Coast-West Coast business coordination predictable."
  },
  {
    question: "Is Los Angeles on PST or PDT right now?",
    answer: "Los Angeles uses PST (Pacific Standard Time, UTC-8) from the first Sunday of November to the second Sunday of March. During summer months, LA switches to PDT (Pacific Daylight Time, UTC-7). Check the current date — if it's between March and November, LA is likely on PDT. California follows US federal daylight saving rules."
  },
  {
    question: "What time does the US stock market open in Los Angeles?",
    answer: "For LA residents, the NYSE and NASDAQ open at 6:30 AM Pacific Time and close at 1:00 PM Pacific Time. Pre-market trading starts at 1:00 AM PT. This means West Coast traders and investors need early mornings to catch market open — a key consideration for finance professionals living in LA."
  },
  {
    question: "What is the time difference between Los Angeles and London?",
    answer: "Los Angeles is typically 8 hours behind London. When it's 5:00 PM in London, it's 9:00 AM in LA. However, for 2-3 weeks in March and November, this difference shifts to 7 or 9 hours because the US and UK change clocks on different dates. LA switches on the second Sunday of March; UK switches on the last Sunday."
  },
  {
    question: "What is the best time to call Los Angeles from Europe?",
    answer: "The best time to call LA from Europe is between 5:00 PM and 10:00 PM European time, which reaches LA during their morning business hours (8:00 AM - 1:00 PM PT). For UK callers specifically, 5:00-8:00 PM GMT catches LA professionals at their desks. Avoid calling after 11:00 PM European time."
  },
  {
    question: "What time zone is Los Angeles in?",
    answer: "Los Angeles is in the Pacific Time Zone, the same as San Francisco, Seattle, and San Diego. This includes PST (Pacific Standard Time, UTC-8) in winter and PDT (Pacific Daylight Time, UTC-7) in summer. All of California uses Pacific Time, making it the westernmost continental US time zone."
  },
  {
    question: "What is the time difference between Los Angeles and Tokyo?",
    answer: "Los Angeles is 17 hours behind Tokyo during standard time (PST) and 16 hours behind during daylight time (PDT). When it's Monday 9:00 AM in Tokyo, it's Sunday 4:00 PM in LA (PST) or Sunday 5:00 PM (PDT). Japan doesn't observe DST, so the difference changes when LA switches clocks."
  },
  {
    question: "What are typical business hours in Los Angeles?",
    answer: "Standard LA business hours are 9:00 AM to 5:00 PM or 6:00 PM Pacific Time, Monday through Friday. However, entertainment industry hours are famously irregular — studios and agencies often work 10:00 AM to 7:00 PM or later. Tech companies tend toward flexible hours. Banks typically open 9:00 AM to 5:00 PM."
  }
]

export default function LosAngelesOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Los Angeles Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in America's entertainment capital and West Coast powerhouse
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current LA Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Hollywood studios, timing a call with Silicon Beach startups, 
          or catching the stock market open from the West Coast — understanding Los Angeles time is essential 
          for anyone doing business with America's entertainment and tech capital.
        </p>
        <p>
          Los Angeles operates on <strong>Pacific Time (PT)</strong>, 3 hours behind{' '}
          <Link href="/new-york/" className={linkColor}>New York</Link>. This means PST (UTC-8) in 
          winter and PDT (UTC-7) in summer. As the heart of the entertainment industry, home to major 
          tech companies, and a gateway to Asia-Pacific trade, LA time drives West Coast business rhythms.
        </p>
        <p>
          The challenge? When New York's markets open at 9:30 AM EST, it's only 6:30 AM in LA. When 
          London ends their business day at 5:00 PM GMT, LA is just starting lunch. This guide helps 
          you navigate these overlaps and find the perfect windows for international collaboration.
        </p>
      </section>
      
      {/* Quick Facts Card */}
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
                  ? 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-orange-500/50'
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
          Understanding Los Angeles Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          PST vs PDT: The California Clock Change
        </h3>
        <p>
          Los Angeles follows US federal daylight saving rules — "spring forward" on the second Sunday 
          of March, "fall back" on the first Sunday of November. During PST (November-March), LA is 
          UTC-8. During PDT (March-November), LA is UTC-7. This one-hour shift can briefly change 
          international time differences.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The West Coast Challenge: Market Hours
        </h3>
        <p>
          One of the biggest challenges for LA-based professionals is the stock market schedule. With 
          NYSE and NASDAQ opening at 6:30 AM Pacific Time, finance workers often start their days 
          before sunrise. This "early bird" culture shapes LA's business rhythms differently from 
          the East Coast.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Entertainment Industry Hours
        </h3>
        <p>
          Hollywood operates on its own schedule. Studios and agencies often work 10:00 AM to 7:00 PM 
          or later, with call times that can start at 5:00 AM for film shoots. The famous "LA lunch" 
          meeting culture means midday (12-2 PM) is prime networking time. Friday afternoons are 
          notoriously quiet as the industry winds down for the weekend.
        </p>
      </section>
      
      {/* City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200' 
          : 'bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Los Angeles?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for West Coast teams and your global colleagues.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      {/* Practical Tips - 3 Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with LA Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            The <Link href="/london/" className={linkColor}>London</Link>-LA window is tight: only 
            1-2 PM PT catches London before 10 PM GMT. For Asia-Pacific, evening LA calls (5-8 PM PT) 
            reach <Link href="/tokyo/" className={linkColor}>Tokyo</Link> and{' '}
            <Link href="/sydney/" className={linkColor}>Sydney</Link> in their morning. Plan European 
            calls in LA's morning (9 AM - 12 PM PT) for best overlap.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? The 10-11 hour flight to LA means you arrive roughly the same time 
            you departed (westward time gain). From Asia, expect significant jet lag — a 15-hour 
            flight from <Link href="/tokyo/" className={linkColor}>Tokyo</Link> crosses the dateline. 
            Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link>!
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working remotely with an LA team? Europeans face the biggest challenge — afternoon/evening 
            work becomes necessary to catch LA's business hours. For East Coast remote workers, the 
            3-hour difference is manageable but means late starts (9 AM PT = 12 PM ET). LA's thriving 
            remote work culture (Silicon Beach, streaming companies) means flexible scheduling is common.
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-orange-50 border border-orange-200' : 'bg-orange-900/20 border border-orange-700/30'}`}>
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
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            📈 NASDAQ Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            💻 Remote Work
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
          Time zone data sourced from IANA Time Zone Database. NYSE/NASDAQ trading hours verified against official exchange schedules. California daylight saving rules per US federal law.
        </p>
      </footer>
    </div>
  )
}
