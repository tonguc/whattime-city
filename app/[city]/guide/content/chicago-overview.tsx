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

// Long-tail keyword optimized FAQ data for Chicago
const FAQ_DATA = [
  {
    question: "What is the time difference between Chicago and New York?",
    answer: "Chicago is 1 hour behind New York year-round. When it's 12:00 PM in New York (EST/EDT), it's 11:00 AM in Chicago (CST/CDT). Both cities observe daylight saving time on the same schedule, so the 1-hour difference remains constant throughout the year. This makes East Coast to Midwest business coordination straightforward."
  },
  {
    question: "What time does the CME open in Chicago?",
    answer: "CME Group's main trading hours vary by product. For equity index futures (S&P 500, Nasdaq), electronic trading on CME Globex runs nearly 24 hours from Sunday 5:00 PM to Friday 4:00 PM CT with a daily break. Regular trading hours are 8:30 AM to 3:15 PM CT. Agricultural futures have different hours. The trading floor opens at 8:30 AM CT for products still traded by open outcry."
  },
  {
    question: "What time zone is Chicago in?",
    answer: "Chicago is in the Central Time Zone. During standard time (November to March), Chicago observes Central Standard Time (CST), which is UTC-6. During daylight saving time (March to November), Chicago observes Central Daylight Time (CDT), which is UTC-5. Central Time is shared by cities like Dallas, Houston, New Orleans, and Minneapolis."
  },
  {
    question: "What is the time difference between Chicago and London?",
    answer: "Chicago is 6 hours behind London during standard time (CST vs GMT). When it's 3:00 PM in London, it's 9:00 AM in Chicago. During summer, when both observe daylight saving, the difference remains 6 hours (CDT vs BST). However, there are brief periods in March and November when the difference is 5 or 7 hours due to different DST transition dates."
  },
  {
    question: "What is the best time to call Chicago from London?",
    answer: "The best time to call Chicago from London is 2:00 PM - 6:00 PM GMT, which reaches Chicago during business hours (8:00 AM - 12:00 PM CST). For evening calls to someone at home, try 11:00 PM - 1:00 AM GMT to catch Chicago's early evening (5:00 PM - 7:00 PM CST). Avoid calling before 2:00 PM GMT as Chicago will still be asleep."
  },
  {
    question: "What are typical business hours in Chicago?",
    answer: "Standard Chicago business hours are 8:00 AM to 5:00 PM or 9:00 AM to 6:00 PM CST, Monday through Friday. The financial district starts early with CME traders arriving by 7:00 AM. Retail shops on the Magnificent Mile typically open 10:00 AM to 8:00 PM. Many restaurants close late, especially in River North and Wicker Park."
  },
  {
    question: "What is the time difference between Chicago and Los Angeles?",
    answer: "Chicago is 2 hours ahead of Los Angeles year-round. When it's 12:00 PM in Chicago (CST/CDT), it's 10:00 AM in Los Angeles (PST/PDT). Both cities observe daylight saving time on the same schedule (second Sunday of March to first Sunday of November), so the 2-hour difference remains constant throughout the year."
  },
  {
    question: "When does daylight saving time start and end in Chicago?",
    answer: "Chicago follows US daylight saving time rules. Clocks 'spring forward' one hour at 2:00 AM on the second Sunday of March, moving to Central Daylight Time (CDT/UTC-5). Clocks 'fall back' one hour at 2:00 AM on the first Sunday of November, returning to Central Standard Time (CST/UTC-6). This schedule applies to most of the United States."
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

export default function ChicagoOverviewContent({ city, config, isLight, timeStr }: Props) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
  
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
          {config.icon} Chicago Time Zone: The Complete Guide to the Windy City
        </h1>
        <p className={`text-lg mb-4 ${mutedColor}`}>
          Current time in Chicago: <span className="font-semibold">{timeStr}</span>
        </p>
        
        {/* Intro paragraphs - SEO optimized */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>Chicago operates on Central Time (CT)</strong> — <strong>UTC-6</strong> during standard time 
            (CST) and <strong>UTC-5</strong> during daylight saving time (CDT). As America's third-largest city 
            and the economic powerhouse of the Midwest, Chicago is home to the world's largest derivatives 
            exchange (CME Group) and serves as a critical hub for finance, transportation, and commerce.
          </p>
          <p>
            The <strong>Central Time Zone</strong> is the second-most populous US time zone, covering major cities 
            from Minneapolis to New Orleans, Dallas to Memphis. Chicago sits at its heart, making it the de facto 
            capital of Central Time. When New York opens for business, Chicago is just getting coffee; when 
            London closes, Chicago still has several hours of trading left.
          </p>
          <p>
            For global traders, Chicago's <strong>CME Group</strong> (Chicago Mercantile Exchange) and <strong>CBOT</strong> 
            (Chicago Board of Trade) are essential. S&P 500 futures, agricultural commodities, and interest rate 
            derivatives all trade here. Understanding Chicago time is crucial whether you're managing portfolios, 
            coordinating with Midwest teams, or planning a visit to the city of broad shoulders.
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
          📚 Explore Chicago Guides
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
      
      {/* Understanding Chicago Time - Deep Content */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          🕐 Understanding Chicago Time
        </h2>
        
        <div className="space-y-6">
          {/* Central Time Explanation */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Central Time Zone: CST and CDT
            </h3>
            <p className="mb-3">
              The Central Time Zone spans from the Canadian border to the Gulf of Mexico, making it America's 
              heartland timezone. Chicago, as the zone's largest city, effectively sets the rhythm for the 
              entire Midwest business world.
            </p>
            <p>
              <strong>Daylight Saving Time:</strong> Chicago follows US DST rules. Clocks spring forward on the 
              second Sunday of March at 2:00 AM local time (moving to CDT/UTC-5), and fall back on the first 
              Sunday of November at 2:00 AM (returning to CST/UTC-6). Unlike Arizona and Hawaii, Illinois 
              participates in DST.
            </p>
          </div>
          
          {/* Financial Markets */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Chicago's Financial Markets: CME Group
            </h3>
            <p className="mb-3">
              Chicago's financial legacy dates back to 1848 with the founding of the Chicago Board of Trade (CBOT). 
              Today, CME Group operates the world's largest and most diverse derivatives marketplace, trading 
              everything from S&P 500 futures to live cattle.
            </p>
            <p className="mb-3">
              <strong>Key trading hours (Central Time):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>CME Globex (electronic): Nearly 24 hours, Sunday 5:00 PM - Friday 4:00 PM</li>
              <li>Equity Index Futures: Regular session 8:30 AM - 3:15 PM</li>
              <li>Agricultural commodities: 8:30 AM - 1:20 PM</li>
              <li>Interest rate products: 7:00 AM - 2:00 PM</li>
            </ul>
            <p className="mt-3">
              <strong>For London traders:</strong> CME equity futures are most active during the US morning 
              session (2:30 PM - 9:15 PM GMT in winter).
            </p>
          </div>
          
          {/* US Time Zone Context */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Chicago in the US Time Zone Map
            </h3>
            <p className="mb-3">
              Understanding Chicago's position relative to other US cities is essential for domestic business:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>1 hour behind</strong> New York, Boston, Miami (Eastern Time)</li>
              <li><strong>Same time as</strong> Dallas, Houston, Minneapolis, New Orleans</li>
              <li><strong>1 hour ahead of</strong> Denver, Phoenix, Salt Lake City (Mountain Time)</li>
              <li><strong>2 hours ahead of</strong> Los Angeles, San Francisco, Seattle (Pacific Time)</li>
            </ul>
            <p className="mt-3">
              This central position makes Chicago ideal for national conference calls — 10:00 AM CT catches 
              both coasts during reasonable business hours.
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
              <li>• <strong>NYC overlap:</strong> Full day (1h difference)</li>
              <li>• <strong>London overlap:</strong> 8:00 AM - 12:00 PM CT (2:00 PM - 6:00 PM GMT)</li>
              <li>• <strong>LA overlap:</strong> Full day (2h difference)</li>
              <li>• Midwesterners value punctuality and directness</li>
              <li>• Friday afternoons may have lighter schedules</li>
            </ul>
          </div>
          
          {/* Travelers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✈️ For Travellers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>From NYC:</strong> 2.5-hour flight, -1h time change</li>
              <li>• <strong>From London:</strong> 8-hour flight, -6h adjustment</li>
              <li>• <strong>From LA:</strong> 4-hour flight, +2h time change</li>
              <li>• O'Hare (ORD): Blue Line to downtown, 45 min</li>
              <li>• Midway (MDW): Orange Line to Loop, 25 min</li>
            </ul>
          </div>
          
          {/* Remote Workers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 For Remote Workers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>Midwest work culture:</strong> Friendly, professional, efficient</li>
              <li>• Core hours: 8:00 AM - 5:00 PM CT typical</li>
              <li>• Winter: Cold weather may increase remote work</li>
              <li>• Summer Fridays often have early departures</li>
              <li>• Cubs/Sox games may affect afternoon availability</li>
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
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-sky-50 border border-sky-200' : 'bg-sky-900/20 border border-sky-700/30'}`}>
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
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            📈 CME & CBOT Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            💻 Remote Work
          </Link>
          <Link 
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            🎭 Best Time to Visit
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
          <Link href="/los-angeles/guide/" className={`text-sm ${linkColor}`}>
            Los Angeles Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/toronto/guide/" className={`text-sm ${linkColor}`}>
            Toronto Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/london/guide/" className={`text-sm ${linkColor}`}>
            London Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/tokyo/guide/" className={`text-sm ${linkColor}`}>
            Tokyo Time Guide
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
          Time zone data sourced from IANA Time Zone Database. CME Group trading hours verified against official exchange schedule. 
          US daylight saving time rules per National Institute of Standards and Technology. Business hours reflect typical Chicago corporate practices.
        </p>
      </footer>
    </div>
  )
}
