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

// Long-tail keyword optimized FAQ data for Mumbai
// Target: high search volume questions about Mumbai/India Standard Time
const FAQ_DATA = [
  {
    question: "What is the time difference between Mumbai and London right now?",
    answer: "Mumbai is 5 hours and 30 minutes ahead of London during GMT (winter). When it's 12:00 PM in London, it's 5:30 PM in Mumbai. During British Summer Time (BST, late March to late October), the difference reduces to 4 hours 30 minutes. India doesn't observe daylight saving, so the gap changes when the UK adjusts clocks."
  },
  {
    question: "Is Mumbai on IST? What does IST mean?",
    answer: "Yes, Mumbai operates on IST (India Standard Time), which is UTC+5:30. IST is unique globally because of its 30-minute offset — India chose this to split the difference between two full time zones. All of India, from Mumbai to Kolkata, uses the same timezone. IST doesn't change throughout the year since India doesn't observe daylight saving time."
  },
  {
    question: "What time does BSE and NSE open in Mumbai?",
    answer: "The Bombay Stock Exchange (BSE) and National Stock Exchange (NSE) both open at 9:15 AM IST and close at 3:30 PM IST, Monday through Friday. Pre-market session runs from 9:00 AM to 9:15 AM. For international traders: this is 3:45 AM - 10:00 AM GMT in winter, or 4:45 AM - 11:00 AM BST in summer."
  },
  {
    question: "What is the time difference between Mumbai and New York?",
    answer: "Mumbai is 9 hours 30 minutes ahead of New York during EST (winter) and 10 hours 30 minutes ahead during EDT (summer). When it's Monday 9:00 AM in New York, it's Monday 6:30 PM in Mumbai (EST) or 7:30 PM (EDT). The unusual gap is due to India's 30-minute offset and US daylight saving changes."
  },
  {
    question: "What is the best time to call Mumbai from the UK?",
    answer: "The best time to call Mumbai from the UK is between 8:00 AM and 12:30 PM UK time, which reaches Mumbai during business hours (1:30 PM - 6:00 PM IST). For personal calls, 7:00-9:00 PM UK time catches Mumbai in morning hours (12:30 AM - 2:30 AM next day IST). Avoid calling during Indian lunch (1:00-2:00 PM IST)."
  },
  {
    question: "What time zone is Mumbai in?",
    answer: "Mumbai is in the India Standard Time (IST) zone, which is UTC+5:30. Unlike most time zones that use full hour offsets, India uses a 30-minute offset. This single timezone covers the entire country — a decision made for national unity despite India spanning what could be two time zones geographically."
  },
  {
    question: "What is the time difference between Mumbai and Dubai?",
    answer: "Mumbai is 1 hour and 30 minutes ahead of Dubai. When it's 12:00 PM in Dubai (GST/UTC+4), it's 1:30 PM in Mumbai (IST/UTC+5:30). Neither city observes daylight saving time, so this difference remains constant year-round. This makes Dubai-Mumbai business collaboration relatively easy."
  },
  {
    question: "What are typical business hours in Mumbai?",
    answer: "Standard Mumbai business hours are 9:30 AM to 6:30 PM IST, Monday through Friday. Banks typically operate 10:00 AM to 4:00 PM (some till 6:00 PM). Government offices run 9:30 AM to 5:30 PM. Many shops stay open until 9:00-10:00 PM. The IT sector often works 10:00 AM to 7:00 PM. Saturday is often a half-day for offices."
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

export default function MumbaiOverviewContent({ city, config, isLight, timeStr }: Props) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
  const linkColor = isLight ? 'text-orange-600 hover:text-orange-700' : 'text-orange-400 hover:text-orange-300'
  
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
          {config.icon} Mumbai Time Zone: The Complete Guide to India Standard Time
        </h1>
        <p className={`text-lg mb-4 ${mutedColor}`}>
          Current time in Mumbai: <span className="font-semibold">{timeStr}</span>
        </p>
        
        {/* Intro paragraphs - SEO optimized */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>Mumbai operates on India Standard Time (IST)</strong>, which is <strong>UTC+5:30</strong> — 
            one of the world's few time zones with a 30-minute offset. As India's financial capital and home 
            to Bollywood, Mumbai is a city of relentless energy where business never truly stops. Understanding 
            Mumbai time is essential whether you're trading on BSE/NSE, coordinating with Indian tech teams, 
            or planning your visit to the "Maximum City."
          </p>
          <p>
            Unlike most countries, <strong>all of India uses a single time zone</strong> despite spanning 
            nearly 3,000 kilometers east to west. This means Mumbai shares the same time as Kolkata, Delhi, 
            Bangalore, and Chennai. India doesn't observe daylight saving time, making IST constant throughout 
            the year — a relief for international businesses tired of tracking clock changes.
          </p>
          <p>
            The <strong>30-minute offset</strong> creates unique challenges for global scheduling. When New York 
            opens at 9:30 AM, it's already 7:00 PM in Mumbai. When London finishes work at 5:00 PM, Mumbai is 
            at 10:30 PM. This guide covers everything from BSE/NSE trading hours to the best times to call 
            Mumbai from anywhere in the world.
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
          📚 Explore Mumbai Guides
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
      
      {/* Understanding Mumbai Time - Deep Content */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          🕐 Understanding Mumbai Time
        </h2>
        
        <div className="space-y-6">
          {/* IST Explanation */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              The Unique 30-Minute Offset: Why IST is UTC+5:30
            </h3>
            <p className="mb-3">
              India Standard Time's unusual 30-minute offset dates back to 1906 when British India established 
              a unified time zone. Rather than choosing UTC+5 (too early for eastern India) or UTC+6 (too late 
              for western India), the compromise was UTC+5:30. This places the sun at its highest point around 
              noon for most of India's population.
            </p>
            <p>
              For international business, this means Mumbai is never at a "clean" hour difference from major 
              cities: <strong>London +5:30</strong>, <strong>New York +9:30/+10:30</strong>, 
              <strong>Singapore -2:30</strong>, <strong>Sydney -4:30/-5:30</strong>. Always factor in those 
              extra 30 minutes when scheduling calls.
            </p>
          </div>
          
          {/* Financial Markets */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Dalal Street: India's Financial Heartbeat
            </h3>
            <p className="mb-3">
              Mumbai's Dalal Street houses both the Bombay Stock Exchange (BSE) — Asia's oldest stock exchange 
              (est. 1875) — and the National Stock Exchange (NSE). Together they represent over $3.5 trillion 
              in market capitalization, making India the world's 5th largest stock market.
            </p>
            <p className="mb-3">
              <strong>Key trading hours (IST):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pre-open session: 9:00 AM - 9:15 AM</li>
              <li>Regular trading: 9:15 AM - 3:30 PM</li>
              <li>Post-close session: 3:40 PM - 4:00 PM</li>
            </ul>
            <p className="mt-3">
              <strong>For UK investors:</strong> Indian markets are open 3:45 AM - 10:00 AM GMT (winter) or 
              4:45 AM - 11:00 AM BST (summer). Early mornings required!
            </p>
          </div>
          
          {/* Bollywood Schedule */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Bollywood Time: The Entertainment Industry
            </h3>
            <p className="mb-3">
              Mumbai's famous film industry operates on its own schedule. Film shoots often start early morning 
              (6:00-7:00 AM) or run late into the night. "Mahurat shots" (auspicious first takes) are timed to 
              specific moments. Award shows and premieres typically begin at 7:00-8:00 PM IST.
            </p>
            <p>
              For international entertainment industry contacts, production offices generally operate 10:00 AM - 
              7:00 PM IST, though talent availability follows the shooting schedule.
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
              <li>• <strong>UK overlap:</strong> 9:30 AM - 1:00 PM GMT (3:00 PM - 6:30 PM IST)</li>
              <li>• <strong>US East overlap:</strong> Very limited — 8:00-10:00 AM EST catches Mumbai evening</li>
              <li>• <strong>Dubai/Middle East:</strong> Excellent overlap all day (1.5h difference)</li>
              <li>• <strong>Singapore:</strong> Full business day overlap (2.5h difference)</li>
              <li>• Saturday is often a half-working day in India</li>
            </ul>
          </div>
          
          {/* Travelers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✈️ For Travellers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>From London:</strong> 9-hour flight, +5:30 time change</li>
              <li>• <strong>From Dubai:</strong> 3-hour flight, only +1:30 difference</li>
              <li>• <strong>From Singapore:</strong> 5.5-hour flight, -2:30 adjustment</li>
              <li>• <strong>Jet lag tip:</strong> Flights from UK arrive late night — sleep on the plane</li>
              <li>• Chhatrapati Shivaji Airport (BOM) is 26km from city centre</li>
            </ul>
          </div>
          
          {/* Remote Workers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 For Remote Workers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>Working with India:</strong> Expect 9:30 AM - 6:30 PM IST availability</li>
              <li>• Indian IT industry often has flexible "US shift" or "UK shift" workers</li>
              <li>• Major IT holidays: Diwali (~5 days), Holi, Republic Day, Independence Day</li>
              <li>• Friday afternoons may see reduced availability</li>
              <li>• WhatsApp is the preferred business messaging app</li>
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-orange-50 border border-orange-200' : 'bg-orange-900/20 border border-orange-700/30'}`}>
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
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            🏦 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            📈 BSE/NSE Hours
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
          <Link 
            href={`/${city.slug}/guide/holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-orange-900/40 text-orange-300 hover:bg-orange-900/60'
            }`}
          >
            🪔 Indian Holidays
          </Link>
        </div>
      </section>
      
      {/* Internal Links to Related Cities */}
      <section className="mb-10">
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🌏 Related City Guides
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/dubai/guide/" className={`text-sm ${linkColor}`}>
            Dubai Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/singapore/guide/" className={`text-sm ${linkColor}`}>
            Singapore Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/london/guide/" className={`text-sm ${linkColor}`}>
            London Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/hong-kong/guide/" className={`text-sm ${linkColor}`}>
            Hong Kong Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/tokyo/guide/" className={`text-sm ${linkColor}`}>
            Tokyo Time Guide
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
          Time zone data sourced from IANA Time Zone Database. BSE/NSE trading hours verified against official exchange schedules. 
          IST offset per Government of India standards. Business hours reflect typical Mumbai corporate practices.
        </p>
      </footer>
    </div>
  )
}
