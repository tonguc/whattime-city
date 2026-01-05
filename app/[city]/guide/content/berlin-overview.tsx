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

// Long-tail keyword optimized FAQ data for Berlin
// Target: high search volume questions about Berlin/Germany time
const FAQ_DATA = [
  {
    question: "What is the time difference between Berlin and London right now?",
    answer: "Berlin is 1 hour ahead of London during both winter and summer. When it's 12:00 PM in Berlin, it's 11:00 AM in London. Both cities observe daylight saving time on the same dates (last Sunday of March and October), so the 1-hour difference remains constant year-round."
  },
  {
    question: "Does Germany observe daylight saving time?",
    answer: "Yes, Germany observes daylight saving time. Clocks spring forward on the last Sunday of March (CET to CEST, UTC+1 to UTC+2) and fall back on the last Sunday of October. Germany follows the same EU schedule as France, Italy, Spain, and other European countries, though there's ongoing debate about abolishing the practice."
  },
  {
    question: "Is Berlin time the same as Paris time?",
    answer: "Yes, Berlin and Paris are always on the same time — both use Central European Time (CET, UTC+1) in winter and Central European Summer Time (CEST, UTC+2) in summer. This applies to most of continental Western Europe, including Amsterdam, Rome, Madrid, and Vienna."
  },
  {
    question: "What time does the German stock market open and close?",
    answer: "The main German exchange, Xetra (based in Frankfurt), opens at 9:00 AM and closes at 5:30 PM CET, Monday through Friday. This is where DAX stocks trade. For London investors, that's 8:00 AM to 4:30 PM GMT. Pre-market trading starts at 8:00 AM CET."
  },
  {
    question: "What is the best time to call Berlin from New York?",
    answer: "The best time to call Berlin from New York is between 8:00 AM and 12:00 PM EST, which reaches Berlin during their afternoon (2:00 PM - 6:00 PM CET). For morning Berlin time, you'd need to call very early — 3:00-6:00 AM EST reaches 9:00 AM - 12:00 PM CET. Berlin is 6 hours ahead of New York (EST)."
  },
  {
    question: "How many hours ahead is Berlin from New York?",
    answer: "Berlin is 6 hours ahead of New York during EST (November-March), and also 6 hours ahead during EDT (March-November). Unlike US-Asia differences, the gap stays constant because both the US and EU change clocks around the same time — though exact dates differ by 1-2 weeks, causing brief periods of 5 or 7 hours difference."
  },
  {
    question: "What time zone is Berlin in?",
    answer: "Berlin is in the Central European Time zone (CET, UTC+1) during winter and Central European Summer Time (CEST, UTC+2) during summer. This is the same time zone as Paris, Rome, Amsterdam, Madrid, and most of continental Western Europe."
  },
  {
    question: "What are typical business hours in Berlin?",
    answer: "Standard Berlin business hours are 9:00 AM to 6:00 PM CET, Monday through Friday. However, Germans value work-life balance — expect offices to empty by 5:30-6:00 PM. Shops typically open 10:00 AM to 8:00 PM Monday-Saturday. Critical: most shops are CLOSED on Sundays by law (Sonntagsruhe), except Spätis (convenience stores), restaurants, and some tourist areas."
  }
]

export default function BerlinOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Berlin Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Germany's capital and Europe's startup hub
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Berlin Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Berlin's thriving tech startups, planning a trip to 
          experience legendary nightlife, or timing a call with German business partners — understanding 
          Berlin's time zone is essential for anyone engaging with Europe's largest economy and 
          one of the world's most creative cities.
        </p>
        <p>
          Berlin operates on <strong>Central European Time (CET)</strong>, which is UTC+1 in winter 
          and UTC+2 (CEST) in summer. This puts Berlin on the same time as{' '}
          <Link href="/paris/" className={linkColor}>Paris</Link>, Amsterdam, Rome, and Madrid — 
          making European business coordination seamless. The city is just 1 hour ahead of{' '}
          <Link href="/london/" className={linkColor}>London</Link>, enabling easy collaboration 
          with the UK.
        </p>
        <p>
          As home to Europe's largest startup ecosystem, a world-famous club scene that runs 
          continuously from Friday night to Monday morning, and strict Sunday shopping laws, 
          Berlin operates on its own unique rhythm. Understanding when things open, close, 
          and keep going all night is key to making the most of this extraordinary city.
        </p>
      </section>
      
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
      
      {/* Understanding Time Section */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Berlin Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          CET: The European Standard
        </h3>
        <p>
          Berlin shares its time zone with most of continental Western Europe — from Madrid to 
          Warsaw, Oslo to Rome. This Central European bloc means scheduling meetings with{' '}
          <Link href="/paris/" className={linkColor}>Paris</Link> or Amsterdam requires zero 
          time conversion, while <Link href="/london/" className={linkColor}>London</Link> is 
          always exactly 1 hour behind.
        </p>
        <p>
          Germany follows EU daylight saving rules: clocks change on the last Sundays of March 
          and October. The EU has debated abolishing DST, but for now, Berlin continues to 
          spring forward and fall back like its neighbors.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Sonntagsruhe: The Sacred Sunday
        </h3>
        <p>
          One quirk visitors must understand: Germany's <em>Sonntagsruhe</em> (Sunday rest) laws 
          mean almost all shops are closed on Sundays. This includes supermarkets, department 
          stores, and most retail. Exceptions: restaurants, cafés, gas stations, train station 
          shops, and the beloved <em>Spätis</em> (late-night convenience stores). Plan your 
          grocery shopping for Saturday!
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Berlin Morning (9 AM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 8 AM</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 3 AM (EST)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 12 PM (noon)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 5 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Berlin Evening (6 PM CET)</h4>
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
      
      {/* Region-based City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200' 
          : 'bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Berlin?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Mitte and your global team.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      {/* Practical Tips - 3 Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Berlin Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Berlin's 6-hour gap with <Link href="/new-york/" className={linkColor}>New York</Link> allows 
            excellent overlap — afternoon EST meetings (1-5 PM) align with Berlin's end of day (7-11 PM), 
            though Germans prefer not to work late. For Asia-Pacific, early Berlin mornings (7-9 AM) 
            catch <Link href="/singapore/" className={linkColor}>Singapore</Link>/<Link href="/hong-kong/" className={linkColor}>Hong Kong</Link> afternoons. 
            Germans value punctuality intensely — arriving late to meetings is a serious faux pas.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from <Link href="/london/" className={linkColor}>London</Link>? Just 2 hours and 
            minimal jet lag (1 hour). From <Link href="/new-york/" className={linkColor}>New York</Link>, 
            it's about 8-9 hours with manageable 6-hour adjustment. Remember: shops close Sundays, 
            but Berlin's legendary club scene (Berghain, Tresor, Watergate) runs from Friday night 
            straight through to Monday morning. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Berlin is Europe's digital nomad capital — affordable rent (by Western European standards), 
            excellent coworking spaces (Factory, Betahaus, St. Oberholz), and the famous freelancer 
            visa. The city's creative energy and café culture make it perfect for remote work. Time 
            zone-wise, you get good overlap with both London (1 hour) and US East Coast (6 hours), 
            though Asia-Pacific requires early mornings or late nights.
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
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
            📈 DAX Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🎊 German Holidays
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
          Time zone data sourced from IANA Time Zone Database. Xetra trading hours verified against official Deutsche Börse schedules. German public holidays sourced from federal government publications.
        </p>
      </footer>
    </div>
  )
}
