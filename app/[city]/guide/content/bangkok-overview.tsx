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

// Long-tail keyword optimized FAQ data for Bangkok
const FAQ_DATA = [
  {
    question: "What is the time difference between Bangkok and London?",
    answer: "Bangkok is 7 hours ahead of London during GMT (winter). When it's 12:00 PM in London, it's 7:00 PM in Bangkok. During British Summer Time (late March to late October), the difference reduces to 6 hours. Thailand doesn't observe daylight saving time, so Bangkok stays on UTC+7 year-round while London adjusts."
  },
  {
    question: "What time zone is Bangkok in?",
    answer: "Bangkok is in the Indochina Time Zone (ICT), which is UTC+7. This timezone is shared with Vietnam, Cambodia, and Laos. Thailand does not observe daylight saving time, so ICT (UTC+7) applies year-round. Bangkok is sometimes also referred to as being on 'Thailand Standard Time' but ICT is the official designation."
  },
  {
    question: "What is the time difference between Bangkok and New York?",
    answer: "Bangkok is 12 hours ahead of New York during Eastern Standard Time (EST/winter). When it's 9:00 AM in New York, it's 9:00 PM the same day in Bangkok. During US daylight saving time (March-November), the difference is 11 hours. This makes real-time collaboration challenging, but Bangkok mornings overlap with NYC late evenings."
  },
  {
    question: "What is the best time to call Bangkok from the UK?",
    answer: "The best time to call Bangkok from the UK is 7:00 AM - 11:00 AM GMT, which reaches Bangkok during afternoon business hours (2:00 PM - 6:00 PM ICT). For personal calls, 4:00 PM - 6:00 PM GMT catches Bangkok late evening (11:00 PM - 1:00 AM). Avoid calling after 6:00 PM GMT as Bangkok will be past midnight."
  },
  {
    question: "What are typical business hours in Bangkok?",
    answer: "Standard Bangkok business hours are 8:30 AM to 5:30 PM ICT, Monday through Friday. Government offices typically operate 8:30 AM to 4:30 PM. Banks are open 8:30 AM to 3:30 PM (some until 7:00 PM in malls). Shopping malls open 10:00 AM to 10:00 PM daily. Thai businesses often close for lunch between 12:00 and 1:00 PM."
  },
  {
    question: "What time does the SET stock exchange open in Bangkok?",
    answer: "The Stock Exchange of Thailand (SET) operates in two trading sessions: Morning session 10:00 AM to 12:30 PM ICT, and Afternoon session 2:30 PM to 4:30 PM ICT. Pre-opening is 9:30 AM to 10:00 AM. The lunch break is longer than most exchanges. For London investors, SET morning session runs 3:00 AM to 5:30 AM GMT (winter)."
  },
  {
    question: "What is the time difference between Bangkok and Sydney?",
    answer: "Bangkok is 4 hours behind Sydney during Australian Eastern Standard Time (AEST). When it's 12:00 PM in Sydney, it's 8:00 AM in Bangkok. During Australian Daylight Saving Time (October-April), the difference increases to 4 hours. This makes Bangkok-Sydney collaboration comfortable with good overlap during business hours."
  },
  {
    question: "When is Songkran (Thai New Year)?",
    answer: "Songkran, Thai New Year, is celebrated April 13-15 every year. It's Thailand's biggest holiday with massive water fights across the country. Most businesses close for 3-5 days, and many Thais travel to their home provinces. Banks and government offices are closed. If you're planning business or travel, avoid this period or embrace the festivities!"
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

export default function BangkokOverviewContent({ city, config, isLight, timeStr }: Props) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
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
          {config.icon} Bangkok Time Zone: The Complete Guide to Thailand's City of Angels
        </h1>
        <p className={`text-lg mb-4 ${mutedColor}`}>
          Current time in Bangkok: <span className="font-semibold">{timeStr}</span>
        </p>
        
        {/* Intro paragraphs - SEO optimized */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>Bangkok operates on Indochina Time (ICT)</strong>, which is <strong>UTC+7</strong> year-round. 
            Known as Krung Thep Maha Nakhon ("City of Angels") in Thai, Bangkok is Thailand's sprawling capital 
            where ancient temples stand alongside futuristic malls, and street food vendors serve some of the 
            world's best cuisine around the clock.
          </p>
          <p>
            <strong>Thailand does not observe daylight saving time</strong>, making Bangkok's time wonderfully 
            consistent. While London and New York shift their clocks twice a year, Bangkok stays steady at UTC+7. 
            This means the time difference between Bangkok and Western cities changes throughout the year — 
            something important to remember when scheduling international calls.
          </p>
          <p>
            Bangkok has become the <strong>world's digital nomad capital</strong>, offering affordable living, 
            excellent internet, amazing food, and a vibrant expat community. Whether you're coordinating with 
            Thai business partners, planning a visit to explore ancient temples, or considering remote work from 
            this tropical paradise, understanding Bangkok time is your first step.
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
          📚 Explore Bangkok Guides
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
      
      {/* Understanding Bangkok Time - Deep Content */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          🕐 Understanding Bangkok Time
        </h2>
        
        <div className="space-y-6">
          {/* ICT Explanation */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Indochina Time: UTC+7 All Year
            </h3>
            <p className="mb-3">
              Indochina Time (ICT) covers Thailand, Vietnam, Cambodia, and Laos — countries that share 
              historical and geographical connections. At UTC+7, Bangkok is perfectly positioned between 
              European and Australian business hours, making it a strategic location for regional headquarters.
            </p>
            <p>
              <strong>No DST simplicity:</strong> Thailand experimented with daylight saving briefly during 
              WWII but abandoned it. Today's consistent UTC+7 makes international scheduling easier — you 
              only need to track DST changes in other countries, not Thailand's. Bangkok's time remains 
              constant while the rest of the world shifts around it.
            </p>
          </div>
          
          {/* Business & Markets */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Thai Business Culture & SET Market
            </h3>
            <p className="mb-3">
              Bangkok's business culture blends traditional Thai values with modern corporate practices. 
              The "wai" greeting (hands pressed together) is standard, hierarchy is respected, and building 
              relationships (often over meals) precedes business dealings.
            </p>
            <p className="mb-3">
              <strong>SET (Stock Exchange of Thailand) hours:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pre-opening: 9:30 AM - 10:00 AM ICT</li>
              <li>Morning session: 10:00 AM - 12:30 PM ICT</li>
              <li>Lunch break: 12:30 PM - 2:30 PM ICT</li>
              <li>Afternoon session: 2:30 PM - 4:30 PM ICT</li>
            </ul>
            <p className="mt-3">
              <strong>Note:</strong> The extended lunch break is characteristic of Thai business culture 
              and can be useful for international calls during that window.
            </p>
          </div>
          
          {/* Digital Nomad Paradise */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Bangkok: Digital Nomad Capital
            </h3>
            <p className="mb-3">
              Bangkok consistently ranks as the world's top digital nomad destination. Fast internet, 
              countless coworking spaces, affordable cost of living, incredible food, and a massive 
              international community make it irresistible for remote workers.
            </p>
            <p>
              <strong>Time zone advantage:</strong> ICT allows morning work overlap with Australian 
              colleagues and evening overlap with European teams. For US-based clients, Bangkok nomads 
              often work evening hours (which aligns with US mornings) — a trade-off for the lifestyle benefits.
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
              <li>• <strong>UK overlap:</strong> 7:00 AM - 11:00 AM GMT (2:00 PM - 6:00 PM ICT)</li>
              <li>• <strong>Australia overlap:</strong> Excellent all day</li>
              <li>• <strong>US overlap:</strong> Very limited — evening work required</li>
              <li>• Build relationships before business discussions</li>
              <li>• Avoid Songkran week (April 13-15) for meetings</li>
            </ul>
          </div>
          
          {/* Travelers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✈️ For Travellers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>From London:</strong> 11-hour flight, +7h time change</li>
              <li>• <strong>From Sydney:</strong> 9-hour flight, -4h adjustment</li>
              <li>• <strong>From Tokyo:</strong> 6-hour flight, -2h change</li>
              <li>• BKK (Suvarnabhumi): Airport Rail Link to center, 30 min</li>
              <li>• DMK (Don Mueang): Budget airlines, bus to BTS</li>
            </ul>
          </div>
          
          {/* Remote Workers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 For Digital Nomads</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>Cost:</strong> $1,000-1,500/month comfortable living</li>
              <li>• <strong>Internet:</strong> Excellent (100+ Mbps common)</li>
              <li>• <strong>Coworking:</strong> Hubba, The Hive, Spaces everywhere</li>
              <li>• <strong>Visa:</strong> 30-day visa-free, or new Digital Nomad Visa</li>
              <li>• <strong>Best areas:</strong> Thonglor, Ekkamai, Silom, Ari</li>
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
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
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🎒 Digital Nomad Guide
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
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            ☀️ Best Time to Visit
          </Link>
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🎉 Songkran & Holidays
          </Link>
        </div>
      </section>
      
      {/* Internal Links to Related Cities */}
      <section className="mb-10">
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🌏 Related City Guides
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/singapore/guide/" className={`text-sm ${linkColor}`}>
            Singapore Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/hong-kong/guide/" className={`text-sm ${linkColor}`}>
            Hong Kong Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/tokyo/guide/" className={`text-sm ${linkColor}`}>
            Tokyo Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/dubai/guide/" className={`text-sm ${linkColor}`}>
            Dubai Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/sydney/guide/" className={`text-sm ${linkColor}`}>
            Sydney Time Guide
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
          Time zone data sourced from IANA Time Zone Database. SET trading hours verified against Stock Exchange of Thailand official schedule. 
          Songkran dates per Royal Thai Government calendar. Business hours reflect typical Bangkok corporate practices.
        </p>
      </footer>
    </div>
  )
}
