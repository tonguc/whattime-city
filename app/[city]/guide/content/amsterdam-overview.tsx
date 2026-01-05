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

// Long-tail keyword optimized FAQ data for Amsterdam
// Target: high search volume questions about Amsterdam/Netherlands time
const FAQ_DATA = [
  {
    question: "What is the time difference between Amsterdam and London right now?",
    answer: "Amsterdam is 1 hour ahead of London during both winter and summer. When it's 12:00 PM in Amsterdam, it's 11:00 AM in London. Both cities observe daylight saving time on the same dates (last Sunday of March and October), so the 1-hour difference remains constant year-round."
  },
  {
    question: "Does the Netherlands observe daylight saving time?",
    answer: "Yes, the Netherlands observes daylight saving time following EU rules. Clocks spring forward on the last Sunday of March (CET to CEST, UTC+1 to UTC+2) and fall back on the last Sunday of October. This is synchronized with all EU countries, so the time difference with other European cities stays constant."
  },
  {
    question: "Is Amsterdam time the same as Berlin time?",
    answer: "Yes, Amsterdam and Berlin are always on the same time — both use Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) in summer. This also applies to Paris, Rome, Madrid, Brussels, and most of continental Western Europe."
  },
  {
    question: "What time does the Amsterdam Stock Exchange open and close?",
    answer: "Euronext Amsterdam (home of the AEX index) opens at 9:00 AM and closes at 5:30 PM CET, Monday through Friday. Pre-market trading begins at 7:15 AM CET. For London investors, that's 8:00 AM to 4:30 PM GMT. The AEX is one of the oldest stock exchanges in the world, founded in 1602."
  },
  {
    question: "What is the best time to call Amsterdam from New York?",
    answer: "The best time to call Amsterdam from New York is between 8:00 AM and 12:00 PM EST, which reaches Amsterdam during their afternoon (2:00 PM - 6:00 PM CET). For morning Amsterdam time, call between 3:00 AM and 6:00 AM EST to reach 9:00 AM - 12:00 PM CET. Amsterdam is 6 hours ahead of New York (EST)."
  },
  {
    question: "How many hours ahead is Amsterdam from New York?",
    answer: "Amsterdam is 6 hours ahead of New York during EST (November-March), and also 6 hours ahead during EDT (March-November). The gap stays relatively constant because both the US and EU observe daylight saving time, though exact transition dates differ by 1-2 weeks, creating brief periods of 5 or 7 hours difference."
  },
  {
    question: "What time zone is Amsterdam in?",
    answer: "Amsterdam is in the Central European Time zone (CET, UTC+1) during winter and Central European Summer Time (CEST, UTC+2) during summer. This is the same time zone as Berlin, Paris, Rome, Madrid, Brussels, and most of continental Western Europe."
  },
  {
    question: "What are typical business hours in Amsterdam?",
    answer: "Standard Amsterdam business hours are 9:00 AM to 5:30 PM CET, Monday through Friday. The Dutch value work-life balance highly — expect offices to empty promptly at 5:30 PM. Shops typically open 10:00 AM to 6:00 PM (until 9:00 PM on 'koopavond' Thursday). Many shops now open Sundays ('koopzondag'), typically 12:00 PM to 6:00 PM, especially in central Amsterdam."
  }
]

export default function AmsterdamOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Amsterdam Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the Netherlands' creative capital and Europe's cycling paradise
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Amsterdam Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Dutch tech companies, planning to see the tulips in 
          bloom, or timing a call with Amsterdam's creative agencies — understanding Amsterdam's 
          time zone is essential for anyone engaging with the Netherlands' vibrant capital and 
          one of Europe's most international cities.
        </p>
        <p>
          Amsterdam operates on <strong>Central European Time (CET)</strong>, which is UTC+1 in winter 
          and UTC+2 (CEST) in summer. This puts Amsterdam on the same time as{' '}
          <Link href="/berlin/" className={linkColor}>Berlin</Link>,{' '}
          <Link href="/paris/" className={linkColor}>Paris</Link>, Rome, and Brussels — 
          making European business coordination effortless. The city is just 1 hour ahead of{' '}
          <Link href="/london/" className={linkColor}>London</Link>, enabling seamless collaboration 
          with the UK.
        </p>
        <p>
          Known for its direct communication style, excellent English proficiency, and strong 
          work-life balance culture, Amsterdam offers a unique business environment. The city 
          is home to major multinationals (Heineken, ING, Philips), a thriving startup scene, 
          and the world's oldest stock exchange — all operating on efficient Dutch time.
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
          Understanding Amsterdam Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          CET: Synchronized with Europe
        </h3>
        <p>
          Amsterdam shares its time zone with most of continental Western Europe — from Madrid to 
          Warsaw, Stockholm to Rome. This Central European bloc means scheduling meetings with{' '}
          <Link href="/berlin/" className={linkColor}>Berlin</Link>,{' '}
          <Link href="/paris/" className={linkColor}>Paris</Link>, or Brussels requires zero 
          time conversion, while <Link href="/london/" className={linkColor}>London</Link> is 
          always exactly 1 hour behind.
        </p>
        <p>
          The Netherlands follows EU daylight saving rules, changing clocks on the last Sundays 
          of March and October. This keeps Amsterdam perfectly synchronized with its European 
          trading partners, crucial for the country's export-driven economy and its role as a 
          European headquarters location for many multinationals.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Dutch Work Culture: Efficiency & Balance
        </h3>
        <p>
          The Dutch are famous for their direct communication and strict work-life boundaries. 
          Unlike the long-hours cultures of <Link href="/tokyo/" className={linkColor}>Tokyo</Link> or{' '}
          <Link href="/new-york/" className={linkColor}>New York</Link>, Amsterdam offices typically 
          empty by 5:30-6:00 PM sharp. Part-time work is extremely common — the Netherlands has 
          Europe's highest rate of part-time employment. Don't expect responses to emails sent 
          after 6 PM until the next morning.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Amsterdam Morning (9 AM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 8 AM</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 3 AM (EST)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 12 PM (noon)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 5 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Amsterdam Evening (6 PM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 5 PM</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 12 PM (noon)</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 1 AM (+1)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 4 AM (+1)</li>
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
          ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200' 
          : 'bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Amsterdam?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Zuidas and your global team.
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
          Practical Tips for Dealing with Amsterdam Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Amsterdam's 6-hour gap with <Link href="/new-york/" className={linkColor}>New York</Link> enables 
            excellent transatlantic collaboration — afternoon EST meetings (1-4 PM) reach Amsterdam's 
            late afternoon (7-10 PM), though Dutch professionals prefer earlier. English proficiency 
            is exceptional (95%+ speak English fluently), eliminating language barriers. Expect 
            direct, straightforward communication — Dutch business culture values efficiency over 
            small talk. Decisions can be surprisingly quick once consensus is reached.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from <Link href="/london/" className={linkColor}>London</Link>? Just 1 hour flight 
            with minimal jet lag. From <Link href="/new-york/" className={linkColor}>New York</Link>, 
            it's about 7-8 hours with manageable 6-hour adjustment. Schiphol is one of Europe's 
            best-connected airports, with direct trains to Centraal taking just 15 minutes. 
            Best times to visit: April for tulips and King's Day (27th), or September for perfect 
            weather and fewer tourists. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Amsterdam offers excellent remote work infrastructure — fast WiFi, countless cafés 
            (note: "coffee shops" are cannabis; "cafés" serve actual coffee), and professional 
            coworking spaces like WeWork, Spaces, and B. Amsterdam. The city's compact size and 
            bike culture mean everything is accessible. Cost of living is high, but the time zone 
            gives great overlap with both <Link href="/london/" className={linkColor}>London</Link> (1 hour) 
            and US East Coast (6 hours). The freelancer/DAFT visa is available for Americans.
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
            📈 AEX Hours
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
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            👑 Dutch Holidays
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
          Time zone data sourced from IANA Time Zone Database. Euronext Amsterdam trading hours verified against official exchange schedules. Dutch public holidays sourced from Rijksoverheid.nl.
        </p>
      </footer>
    </div>
  )
}
