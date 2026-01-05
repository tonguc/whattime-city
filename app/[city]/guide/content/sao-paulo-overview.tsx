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

// Long-tail keyword optimized FAQ data for São Paulo
const FAQ_DATA = [
  {
    question: "What is the time difference between São Paulo and New York?",
    answer: "São Paulo is typically 2 hours ahead of New York during US Eastern Standard Time (EST). When it's 12:00 PM in New York, it's 2:00 PM in São Paulo. However, during US daylight saving time (March-November), the difference is only 1 hour since Brazil abolished DST in 2019. So when New York is on EDT, São Paulo is just 1 hour ahead."
  },
  {
    question: "Does São Paulo observe daylight saving time?",
    answer: "No, Brazil abolished Daylight Saving Time in 2019. São Paulo now stays on Brasília Time (BRT/UTC-3) year-round. This means the time difference between São Paulo and Northern Hemisphere cities changes throughout the year based on whether those cities observe DST, not São Paulo. This can be confusing for scheduling — always confirm current time differences."
  },
  {
    question: "What time does the B3 stock exchange open in São Paulo?",
    answer: "B3 (Brasil Bolsa Balcão), the Brazilian stock exchange, opens at 10:00 AM BRT and closes at 5:00 PM BRT for regular trading. Pre-market runs from 9:45 AM to 10:00 AM, and after-market trading runs until 6:00 PM. For US investors, this means B3 opens at 8:00 AM EST (winter) or 9:00 AM EDT (summer), overlapping significantly with NYSE hours."
  },
  {
    question: "What is the time difference between São Paulo and London?",
    answer: "São Paulo is 3 hours behind London during British Standard Time (winter). When it's 3:00 PM in London (GMT), it's 12:00 PM in São Paulo (BRT). During British Summer Time (late March to late October), the difference increases to 4 hours. Brazil's lack of DST means London-São Paulo scheduling requires attention to UK clock changes."
  },
  {
    question: "What time zone is São Paulo in?",
    answer: "São Paulo is in the Brasília Time Zone (BRT), which is UTC-3. This is Brazil's official time zone, used by São Paulo, Rio de Janeiro, and Brasília. Brazil spans four time zones, but BRT covers the most populous regions. Since 2019, there is no daylight saving time, so BRT (UTC-3) applies year-round."
  },
  {
    question: "What is the best time to call São Paulo from the US?",
    answer: "The best time to call São Paulo from the US East Coast is 9:00 AM - 3:00 PM EST, which reaches São Paulo during business hours (11:00 AM - 5:00 PM BRT in winter, or 10:00 AM - 4:00 PM BRT in summer when the US is on EDT). From the West Coast, try 6:00 AM - 12:00 PM PST. Brazilians often work late, so evening calls can also work."
  },
  {
    question: "What are typical business hours in São Paulo?",
    answer: "Standard São Paulo business hours are 9:00 AM to 6:00 PM BRT, Monday through Friday. However, Paulistanos are known for working late — it's not unusual for meetings to run until 8:00 PM or later. Banks operate 10:00 AM to 4:00 PM. Shops typically open 10:00 AM to 10:00 PM, and restaurants serve until midnight or later."
  },
  {
    question: "When is Carnival in São Paulo?",
    answer: "São Paulo's Carnival typically falls in February or early March, 47 days before Easter (dates vary yearly). While Rio's Carnival is more famous, São Paulo has massive street parties (blocos) and samba school parades. During Carnival week, many businesses close or operate on reduced hours from Friday through Ash Wednesday. Plan accordingly for business travel."
  }
]

// JSON-LD Schema for FAQ rich results
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

export default function SaoPauloOverviewContent({ city, config, isLight, timeStr }: Props) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
  const linkColor = isLight ? 'text-green-600 hover:text-green-700' : 'text-green-400 hover:text-green-300'
  
  return (
    <div className={textColor}>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="mb-10">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {config.icon} São Paulo Time Zone: The Complete Guide to Brazil's Megacity
        </h1>
        <p className={`text-lg mb-4 ${mutedColor}`}>
          Current time in São Paulo: <span className="font-semibold">{timeStr}</span>
        </p>
        
        {/* Intro paragraphs - SEO optimized */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>São Paulo operates on Brasília Time (BRT)</strong>, which is <strong>UTC-3</strong> year-round. 
            As the largest city in South America and the Southern Hemisphere, São Paulo is the economic heart 
            of Brazil and Latin America — home to the B3 stock exchange, countless multinational headquarters, 
            and a vibrant culture that never sleeps.
          </p>
          <p>
            <strong>Brazil abolished Daylight Saving Time in 2019</strong>, which has significant implications 
            for international business. São Paulo no longer changes clocks, meaning its time difference with 
            Northern Hemisphere cities shifts throughout the year. When New York moves to EDT in March, the gap 
            with São Paulo shrinks from 2 hours to just 1 hour — a detail that catches many off guard.
          </p>
          <p>
            Beyond finance, São Paulo is a <strong>global cultural powerhouse</strong> with world-class 
            museums, the largest Japanese community outside Japan, and a restaurant scene rivaling any 
            global capital. Understanding São Paulo time is essential whether you're trading on B3, 
            coordinating with Brazilian partners, or planning to explore this magnificent megacity.
          </p>
        </div>
      </section>
      
      {/* Quick Facts Component */}
      <section className="mb-10">
        <QuickFacts config={config} isLight={isLight} />
      </section>
      
      {/* Cluster Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          📚 Explore São Paulo Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.clusters.map((cluster) => (
            <Link 
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform`}
            >
              <div className="text-2xl mb-2">{cluster.icon}</div>
              <h3 className={`font-semibold mb-1 ${headingColor}`}>{cluster.title}</h3>
              <p className={`text-sm ${mutedColor}`}>{cluster.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* City Comparison Table */}
      <section className="mb-10">
        <CityComparisonTable config={config} isLight={isLight} />
      </section>
      
      {/* Understanding São Paulo Time - Deep Content */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          🕐 Understanding São Paulo Time
        </h2>
        
        <div className="space-y-6">
          {/* BRT Explanation */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Brasília Time: No More Daylight Saving
            </h3>
            <p className="mb-3">
              In 2019, Brazil permanently ended daylight saving time after studies showed it no longer 
              provided energy savings due to changes in electricity consumption patterns. This means 
              São Paulo stays on UTC-3 throughout the entire year.
            </p>
            <p>
              <strong>What this means for international scheduling:</strong> The time difference between 
              São Paulo and Northern Hemisphere cities now changes based on their DST transitions, not Brazil's. 
              For example, São Paulo is 2 hours ahead of New York in winter (EST) but only 1 hour ahead in 
              summer (EDT). Keep a calendar of US/European DST changes when scheduling calls.
            </p>
          </div>
          
          {/* Financial Markets */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              B3: Latin America's Largest Stock Exchange
            </h3>
            <p className="mb-3">
              B3 (Brasil Bolsa Balcão) is the result of a 2017 merger between BM&FBOVESPA and CETIP, 
              creating one of the world's largest exchanges by market capitalization. It's the primary 
              venue for trading Brazilian equities, derivatives, and fixed income.
            </p>
            <p className="mb-3">
              <strong>Key trading hours (BRT):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pre-market: 9:45 AM - 10:00 AM</li>
              <li>Regular session: 10:00 AM - 5:00 PM</li>
              <li>After-market: 5:30 PM - 6:00 PM</li>
              <li>Derivatives may have extended hours</li>
            </ul>
            <p className="mt-3">
              <strong>For US investors:</strong> B3 regular hours overlap well with NYSE (10:00 AM - 5:00 PM BRT 
              = 8:00 AM - 3:00 PM EST in winter).
            </p>
          </div>
          
          {/* Cultural Context */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              São Paulo Work Culture: The City That Never Stops
            </h3>
            <p className="mb-3">
              Paulistanos (São Paulo residents) are known for their work ethic. Unlike the beach-focused 
              stereotype of Rio, São Paulo is all business — often compared to New York for its relentless 
              pace. Late meetings, dinners that start at 9 PM, and working weekends are common.
            </p>
            <p>
              <strong>Language note:</strong> While business leaders often speak English, most Brazilians 
              do not. Having Portuguese language support for calls and emails significantly improves 
              business relationships. "Jeitinho brasileiro" (the Brazilian way) means flexibility and 
              relationship-building are valued over rigid schedules.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practical Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          💡 Practical Tips for Different Needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Business */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🏢 For International Business</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>NYC overlap:</strong> Excellent (1-2h difference)</li>
              <li>• <strong>London overlap:</strong> Good (3-4h behind)</li>
              <li>• <strong>Relationships matter:</strong> Build rapport before deals</li>
              <li>• Brazilians often run 15-30 min late — it's cultural</li>
              <li>• Carnival week = country essentially shuts down</li>
            </ul>
          </div>
          
          {/* Travelers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✈️ For Travellers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>From NYC:</strong> 10-hour flight, +2h time change</li>
              <li>• <strong>From London:</strong> 11-hour flight, -3h adjustment</li>
              <li>• <strong>From Miami:</strong> 8-hour flight, +2h change</li>
              <li>• GRU (Guarulhos): International flights, 25km from center</li>
              <li>• CGH (Congonhas): Domestic flights, much closer</li>
            </ul>
          </div>
          
          {/* Remote Workers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 For Remote Workers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>Brazilian work style:</strong> Warm, relationship-focused</li>
              <li>• Core hours: 9:00 AM - 6:00 PM BRT, but flexibility common</li>
              <li>• WhatsApp is essential for business communication</li>
              <li>• Coffee culture = meetings often start with cafezinho</li>
              <li>• Friday afternoons may wind down early</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ Section with Schema Markup */}
      <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          ❓ Frequently Asked Questions
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🔗 Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/business-hours/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-900/60'
            }`}
          >
            📈 B3 Bovespa Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-900/60'
            }`}
          >
            💻 Remote Work
          </Link>
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-900/60'
            }`}
          >
            🎭 Carnival & Holidays
          </Link>
        </div>
      </section>
      
      {/* Internal Links to Related Cities */}
      <section className="mb-10">
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🌎 Related City Guides
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/new-york/guide/" className={`text-sm ${linkColor}`}>
            New York Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/london/guide/" className={`text-sm ${linkColor}`}>
            London Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/los-angeles/guide/" className={`text-sm ${linkColor}`}>
            Los Angeles Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/toronto/guide/" className={`text-sm ${linkColor}`}>
            Toronto Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/chicago/guide/" className={`text-sm ${linkColor}`}>
            Chicago Time Guide
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
          Time zone data sourced from IANA Time Zone Database. B3 trading hours verified against official exchange schedule. 
          Brazil DST abolition confirmed per Presidential Decree 9,772 (April 2019). Business hours reflect typical São Paulo corporate practices.
        </p>
      </footer>
    </div>
  )
}
