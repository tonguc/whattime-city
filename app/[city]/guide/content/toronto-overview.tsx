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

// Long-tail keyword optimized FAQ data for Toronto
// Target: high search volume questions about Toronto/Canada time
const FAQ_DATA = [
  {
    question: "What is the time difference between Toronto and London right now?",
    answer: "Toronto is typically 5 hours behind London. When it's 12:00 PM in Toronto, it's 5:00 PM in London. However, for 2-3 weeks in March and November, the difference shifts to 4 or 6 hours because Canada and the UK change clocks on different dates. Toronto follows US daylight saving dates, while the UK follows EU dates."
  },
  {
    question: "Is Toronto on EST or EDT right now?",
    answer: "Toronto uses EST (Eastern Standard Time, UTC-5) from the first Sunday of November to the second Sunday of March. During summer months, Toronto switches to EDT (Eastern Daylight Time, UTC-4). Check the current date — if it's between March and November, Toronto is likely on EDT. Canada changes clocks on the same dates as the United States."
  },
  {
    question: "Is Toronto time the same as New York time?",
    answer: "Yes, Toronto and New York are in the same time zone (Eastern Time) and always show the same time. Both cities switch between EST and EDT on identical dates. This makes business coordination between Canada's financial hub (Bay Street) and the US financial center (Wall Street) seamless — when markets open in New York, they open in Toronto too."
  },
  {
    question: "What time does the Toronto Stock Exchange open and close?",
    answer: "The TSX (Toronto Stock Exchange) opens at 9:30 AM and closes at 4:00 PM Eastern Time, Monday through Friday — identical to NYSE hours. Pre-market trading runs 7:00 AM to 9:30 AM ET. For London investors, that's 2:30 PM to 9:00 PM GMT (winter) or 2:30 PM to 9:00 PM BST (summer). TSX is the 9th largest stock exchange globally by market cap."
  },
  {
    question: "What is the best time to call Toronto from the UK?",
    answer: "The best time to call Toronto from the UK is between 1:00 PM and 6:00 PM GMT, which reaches Toronto during their morning business hours (8:00 AM - 1:00 PM ET). For personal calls, early evening UK time (5:00-8:00 PM GMT) catches Torontonians at lunch or early afternoon. Avoid calling after 10:00 PM GMT as it's getting late in Toronto."
  },
  {
    question: "When do clocks change in Canada in 2025?",
    answer: "In 2025, Canadian clocks in Ontario/Toronto spring forward to EDT on Sunday, March 9th at 2:00 AM (clocks move to 3:00 AM). Clocks fall back to EST on Sunday, November 2nd at 2:00 AM (clocks move to 1:00 AM). Canada follows US daylight saving dates, which differ from European dates by 2-3 weeks."
  },
  {
    question: "What time zone is Toronto in?",
    answer: "Toronto is in the Eastern Time Zone, the same as New York, Miami, and Montreal. This includes EST (Eastern Standard Time, UTC-5) in winter and EDT (Eastern Daylight Time, UTC-4) in summer. Most of Ontario uses Eastern Time, though the western edge near Manitoba uses Central Time."
  },
  {
    question: "What are typical business hours in Toronto?",
    answer: "Standard Toronto business hours are 9:00 AM to 5:00 PM ET, Monday through Friday. Banks typically open 9:30 AM to 4:00 PM (some until 5:00 PM). Retail stores often open 10:00 AM to 9:00 PM. LCBO (liquor stores) hours vary but typically 10:00 AM to 9:00 PM. Restaurants serve dinner from 5:30 PM, with prime time at 7:00-8:00 PM."
  }
]

export default function TorontoOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Toronto Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Canada's largest city and financial capital
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Toronto Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Bay Street bankers, timing a call with Canadian clients, 
          or planning to catch a Leafs game — understanding Toronto's time zone is essential for 
          anyone doing business with Canada's economic powerhouse and most populous city.
        </p>
        <p>
          Toronto operates on <strong>Eastern Time (ET)</strong>, the same time zone as{' '}
          <Link href="/new-york/" className={linkColor}>New York</Link>. This means EST (UTC-5) in 
          winter and EDT (UTC-4) in summer. As home to the TSX (Toronto Stock Exchange), Canada's 
          Big Five banks, and a thriving tech sector, Toronto time drives Canadian business rhythms.
        </p>
        <p>
          The good news? If you already know New York time, you know Toronto time. The two cities 
          share identical hours year-round, making cross-border business coordination effortless. 
          But Toronto's multicultural character and Canadian holidays create their own unique scheduling 
          considerations that every international partner should understand.
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
          Understanding Toronto Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          EST vs EDT: Same Rules as the US
        </h3>
        <p>
          Toronto follows the same daylight saving schedule as the United States — not the European 
          Union schedule. This means Canada "springs forward" and "falls back" on the same dates 
          as <Link href="/new-york/" className={linkColor}>New York</Link> and{' '}
          <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>. For 2-3 weeks each 
          spring and fall, Toronto's time difference with <Link href="/london/" className={linkColor}>London</Link> shifts 
          because the UK changes clocks on different dates.
        </p>
        <p>
          This alignment with US schedules is intentional — the vast majority of Canada's trade 
          and business relationships are with the United States, making synchronized hours crucial 
          for cross-border commerce.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Bay Street: Canada's Financial Heartbeat
        </h3>
        <p>
          The Toronto Stock Exchange (TSX) operates 9:30 AM - 4:00 PM ET, perfectly aligned with 
          Wall Street. Bay Street — Toronto's financial district — is home to Canada's Big Five 
          banks (RBC, TD, Scotiabank, BMO, CIBC), making it North America's second-largest financial 
          center after New York. For global investors, this US-aligned schedule simplifies trading 
          in both markets simultaneously.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Toronto Morning (9 AM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 2 PM (GMT) / 2 PM (BST)</li>
                <li>• <Link href="/paris/" className={linkColor}>Paris</Link>: 3 PM (CET) / 3 PM (CEST)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 6 PM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 11 PM (same day)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Toronto Evening (6 PM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 11 PM (same day)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 10 AM (next day)</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 7 AM (next day)</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 3 PM</li>
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
          ? 'bg-gradient-to-r from-red-50 to-rose-50 border border-red-200' 
          : 'bg-gradient-to-r from-red-900/30 to-rose-900/30 border border-red-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Toronto?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Bay Street and your global team.
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
          Practical Tips for Dealing with Toronto Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Toronto's alignment with <Link href="/new-york/" className={linkColor}>New York</Link> makes 
            North American business coordination simple. The UK-Toronto window is excellent: 9 AM - 12 PM ET 
            catches London's afternoon (2-5 PM GMT). For Asia-Pacific, early morning Toronto calls (7-9 AM ET) 
            reach <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link> and{' '}
            <Link href="/singapore/" className={linkColor}>Singapore</Link> before their day ends.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? The 7-8 hour flight to Toronto means you "gain" 5-6 hours heading west — 
            depart London at noon, arrive Toronto early afternoon the same day. From Asia, expect brutal jet lag 
            (13-16 hours difference). Toronto's cold winters (December-March) are notorious — check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> and pack accordingly!
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working remotely with a Toronto team? Europeans have great overlap — afternoon GMT aligns with 
            Toronto's business hours. For Asia-Pacific remote workers, Toronto hours mean very early mornings 
            or late evenings. Toronto's thriving tech scene (MaRS, Waterloo corridor) means many companies 
            are already remote-friendly with flexible meeting policies.
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
            📈 TSX Hours
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
            🍁 Canadian Holidays
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
          Time zone data sourced from IANA Time Zone Database. TSX trading hours verified against official exchange schedules. Canadian statutory holidays sourced from Government of Canada.
        </p>
      </footer>
    </div>
  )
}
