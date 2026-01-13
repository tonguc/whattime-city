'use client'

import { useState } from 'react'
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

const FAQ_DATA = [
  {
    question: "What is the time difference between Miami and New York right now?",
    answer: "Miami and New York are in the same time zone — Eastern Time (ET). There is no time difference between the two cities. Both observe daylight saving time simultaneously, switching to EDT in March and back to EST in November. When it's 9:00 AM in Miami, it's also 9:00 AM in New York."
  },
  {
    question: "Is Miami on EST or EDT right now?",
    answer: "Miami follows Eastern Daylight Time (EDT, UTC-4) from the second Sunday in March through the first Sunday in November. During winter months (November to March), Miami uses Eastern Standard Time (EST, UTC-5). In January 2025, Miami is on EST. The next switch to EDT occurs on March 9, 2025."
  },
  {
    question: "When do the clocks change in Florida in 2025?",
    answer: "In 2025, Florida springs forward on Sunday, March 9 at 2:00 AM (clocks move to 3:00 AM). Florida falls back on Sunday, November 2 at 2:00 AM (clocks move to 1:00 AM). Note: The Florida legislature passed the Sunshine Protection Act, but it still awaits federal approval to make DST permanent."
  },
  {
    question: "What time does the New York Stock Exchange open in Miami time?",
    answer: "Since Miami is in the same time zone as New York, the NYSE opens at 9:30 AM and closes at 4:00 PM Miami time. Pre-market trading begins at 4:00 AM, and after-hours trading extends until 8:00 PM. Miami traders have no time conversion needed for US markets."
  },
  {
    question: "What is the best time to call Miami from the US West Coast?",
    answer: "The best time to call Miami from the US West Coast (PST/PDT) is between 6:00 AM and 3:00 PM Pacific Time. This reaches Miami during standard business hours (9:00 AM - 6:00 PM ET). Remember Miami is 3 hours ahead of Los Angeles year-round, as both regions observe DST simultaneously."
  },
  {
    question: "What is the best time to call Miami from the UK?",
    answer: "The best time to call Miami from the UK is between 2:00 PM and 6:00 PM GMT, which reaches Miami during business hours (9:00 AM - 1:00 PM ET). During British Summer Time, call between 3:00 PM and 7:00 PM BST. Miami is 5 hours behind London in winter, 5 hours behind in summer."
  },
  {
    question: "What time zone is Miami, Florida in?",
    answer: "Miami is in the Eastern Time Zone (ET). This includes Eastern Standard Time (EST, UTC-5) in winter and Eastern Daylight Time (EDT, UTC-4) in summer. Miami shares this time zone with major cities like New York, Washington D.C., Atlanta, and Toronto. It's the same as the entire US East Coast."
  },
  {
    question: "What are typical business hours in Miami?",
    answer: "Standard business hours in Miami are 9:00 AM to 5:00 PM or 9:00 AM to 6:00 PM, Monday through Friday. Banks typically operate 9:00 AM to 4:00 PM. Due to strong Latin American business ties, many Miami companies accommodate calls with São Paulo (2 hours ahead) and Mexico City (1 hour behind)."
  }
]

export default function MiamiOverviewContent({ city, config, isLight, timeStr }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Header */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Miami Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the Gateway to the Americas
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Miami Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>

      {/* Instant Answer */}
      <section className="mb-10 space-y-4">
        <p>
          <strong>Miami operates on Eastern Time (ET)</strong> — UTC-5 during standard time (EST) and UTC-4 during daylight saving time (EDT). 
          Miami is the same time as <Link href="/new-york/" className={linkColor}>New York</Link>, 5 hours behind <Link href="/london/" className={linkColor}>London</Link>, and 14 hours behind <Link href="/tokyo/" className={linkColor}>Tokyo</Link>. 
          Example: 9:00 AM in Miami = 2:00 PM in London = 11:00 PM in Tokyo.
        </p>
        <p>
          As the Gateway to the Americas, Miami serves as the primary business bridge between North America and Latin America. 
          The city's time zone position creates convenient overlap with both <Link href="/sao-paulo/" className={linkColor}>São Paulo</Link> (just 2 hours ahead) and <Link href="/mexico-city/" className={linkColor}>Mexico City</Link> (1 hour behind), making it the ideal hub for pan-American commerce.
        </p>
        <p>
          Miami is also the cruise capital of the world and a major aviation hub — Miami International Airport connects to more Latin American destinations than any other US airport. 
          Understanding Miami time is essential for coordinating travel, business, and international calls across the hemisphere.
        </p>
      </section>

      {/* Quick Facts */}
      <QuickFacts config={config} isLight={isLight} />

      {/* Explore Guide */}
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

      {/* Understanding Miami Time */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Miami Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Eastern Time: EST vs EDT
        </h3>
        <p>
          Miami follows Eastern Time year-round but switches between two variants. 
          <strong> Eastern Standard Time (EST)</strong> runs from November through early March at UTC-5. 
          <strong> Eastern Daylight Time (EDT)</strong> runs from March through November at UTC-4, shifting clocks forward one hour.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          2025 DST Schedule
        </h3>
        <p>
          In 2025, Miami springs forward on <strong>March 9</strong> at 2:00 AM (to 3:00 AM EDT) and falls back on <strong>November 2</strong> at 2:00 AM (to 1:00 AM EST). 
          During DST transitions, the time difference with <Link href="/london/" className={linkColor}>London</Link> temporarily shifts — it's 5 hours in winter but briefly 4 hours during the few weeks when UK and US DST schedules don't align.
        </p>

        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Strategic Position for Americas Business
        </h3>
        <p>
          Miami's Eastern Time zone creates exceptional business overlap with Latin America. 
          Morning meetings catch <Link href="/sao-paulo/" className={linkColor}>São Paulo</Link> and Buenos Aires in late morning. 
          Afternoon calls reach <Link href="/mexico-city/" className={linkColor}>Mexico City</Link>, Bogotá, and Lima during their business hours. 
          This makes Miami the natural coordination point for multinational operations across the Americas.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Miami Morning (9 AM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 9:00 AM</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 2:00 PM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 11:00 PM</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 1:00 AM +1</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Miami Evening (6 PM ET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 6:00 PM</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 11:00 PM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 8:00 AM +1</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 10:00 AM +1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />

      {/* CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200' 
          : 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Miami?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time across multiple time zones instantly.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>

      {/* Practical Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Miami Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Miami's sweet spot for European calls is 8:00 AM - 12:00 PM ET, overlapping with London's afternoon. 
            For Latin America, you have all-day flexibility with São Paulo (2 hours ahead) and Mexico City (1 hour behind). 
            Many Miami businesses extend hours to accommodate pan-American clients.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? Expect 5-6 hours of jet lag adjustment. From the US West Coast, just 3 hours — manageable in a day. 
            Miami International (MIA) is a major hub with connections throughout the Americas. 
            Cruise passengers: ships depart from PortMiami on Eastern Time — don't miss your boarding! 
            Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Miami is ideal for remote workers serving US East Coast clients while maintaining Latin American connections. 
            The city's growing tech scene (Miami Tech) offers excellent coworking spaces. 
            Time zone alignment with <Link href="/new-york/" className={linkColor}>New York</Link> means no schedule juggling for US-based companies, while still being close to <Link href="/sao-paulo/" className={linkColor}>São Paulo</Link> and <Link href="/mexico-city/" className={linkColor}>Mexico City</Link> hours.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden ${cardBg}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full p-4 text-left flex items-center justify-between gap-3 ${headingColor} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
              >
                <h3 className="font-medium pr-2">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className={`px-4 pb-4 text-sm ${textColor}`}>
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
            href={`/${city.slug}/guide/travel-planning/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            🌴 Travel Planning
          </Link>
          <Link 
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            💻 Digital Nomad Guide
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
          Time zone data sourced from IANA Time Zone Database. DST schedules verified against official US government sources.
        </p>
      </footer>
    </div>
  )
}
