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

// Long-tail keyword optimized FAQ data for Shanghai
// Target: high search volume questions about Shanghai/China time
const FAQ_DATA = [
  {
    question: "What is the time difference between Shanghai and London right now?",
    answer: "Shanghai is 8 hours ahead of London during GMT (winter), and 7 hours ahead during BST (British Summer Time, March-October). When it's 12:00 PM in Shanghai, it's 4:00 AM in London (GMT) or 5:00 AM (BST). China does not observe daylight saving time, so the difference only changes when the UK adjusts its clocks."
  },
  {
    question: "Does China observe daylight saving time?",
    answer: "No, China has not observed daylight saving time since 1991. The entire country uses China Standard Time (CST, UTC+8) year-round, despite spanning five geographical time zones. This means the time difference with Western countries changes when they switch clocks, but Shanghai's time remains constant throughout the year."
  },
  {
    question: "What time does the Shanghai Stock Exchange open and close?",
    answer: "The SSE (Shanghai Stock Exchange) has two trading sessions: morning session 9:30 AM - 11:30 AM CST, and afternoon session 1:00 PM - 3:00 PM CST, Monday through Friday. Unlike most Western exchanges, SSE has a 90-minute lunch break. For London investors, that's 1:30 AM - 7:00 AM GMT (with a gap 3:30-5:00 AM)."
  },
  {
    question: "What is the best time to call Shanghai from New York?",
    answer: "The best time to call Shanghai from New York is between 7:00 PM and 10:00 PM EST, which reaches Shanghai during their morning business hours (8:00 AM - 11:00 AM CST). For afternoon calls, 6:00-8:00 AM EST catches Shanghai's afternoon (7:00-9:00 PM CST). Shanghai is 13 hours ahead of New York (EST)."
  },
  {
    question: "Is Shanghai time the same as Beijing time?",
    answer: "Yes, Shanghai and Beijing use identical time — China Standard Time (CST, UTC+8). Despite China's vast size (spanning 5 geographical time zones), the entire country uses a single time zone set to Beijing time. This means Shanghai, Beijing, Hong Kong, and even far-western cities like Urumqi all share the same official time."
  },
  {
    question: "How many hours ahead is Shanghai from New York?",
    answer: "Shanghai is 13 hours ahead of New York during EST (November-March), and 12 hours ahead during EDT (March-November). When it's 9:00 AM in New York, it's 10:00 PM the same day in Shanghai (EST) or 9:00 PM (EDT). China doesn't observe DST, so the difference shifts when the US changes clocks."
  },
  {
    question: "What time zone is Shanghai in?",
    answer: "Shanghai is in China Standard Time (CST), which is UTC+8. This is the same time as Hong Kong, Singapore, Perth, and Taipei. The entire People's Republic of China uses this single time zone, officially called Beijing Time (北京时间), regardless of geographical location."
  },
  {
    question: "What are typical business hours in Shanghai?",
    answer: "Standard Shanghai business hours are 9:00 AM to 6:00 PM CST, Monday through Friday, though many companies work 9:00 AM to 9:00 PM (the '996' culture in tech). Banks typically open 9:00 AM to 5:00 PM. Shopping malls open 10:00 AM to 10:00 PM. Government offices: 9:00 AM to 5:00 PM with lunch break (12:00-1:30 PM)."
  }
]

export default function ShanghaiOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          Shanghai Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in China's financial powerhouse and largest city
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Shanghai Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Intro Section - 3 paragraphs with semantic richness */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Lujiazui bankers, timing a call with Chinese suppliers, 
          or planning to watch the sunrise over the Bund — understanding Shanghai's time zone is 
          essential for anyone doing business with China's economic capital and the world's largest city.
        </p>
        <p>
          Shanghai operates on <strong>China Standard Time (CST)</strong>, which is UTC+8 year-round. 
          Unlike most major economies, China doesn't observe daylight saving time, making scheduling 
          predictable. Shanghai shares its time zone with{' '}
          <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link>,{' '}
          <Link href="/singapore/" className={linkColor}>Singapore</Link>, and{' '}
          <Link href="/beijing/" className={linkColor}>Beijing</Link> — the entire Chinese mainland 
          uses a single time zone despite spanning five geographical zones.
        </p>
        <p>
          As home to the Shanghai Stock Exchange (SSE), one of the world's largest by market cap, 
          and countless multinational headquarters, Shanghai time influences global trade flows. 
          But navigating business here requires understanding not just the clock, but the culture — 
          from the infamous "996" work schedule to the complete shutdowns during Golden Week.
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
          Understanding Shanghai Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          One Country, One Time Zone
        </h3>
        <p>
          China made a remarkable decision in 1949: despite spanning five geographical time zones 
          (from UTC+5 to UTC+9), the entire country would use a single time zone — Beijing Time 
          (北京时间), UTC+8. This means when it's 9 AM in Shanghai, it's also officially 9 AM in 
          far-western Xinjiang, even though sunrise there might not occur until 10 AM.
        </p>
        <p>
          For international business, this simplifies scheduling immensely. You never need to ask 
          "which city in China?" — Shanghai,{' '}
          <Link href="/beijing/" className={linkColor}>Beijing</Link>, Shenzhen, and Guangzhou all 
          share identical time. The only "different" Chinese time zone is{' '}
          <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link>, which technically has 
          its own zone (HKT) but is also UTC+8.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          SSE: The Market with a Long Lunch
        </h3>
        <p>
          The Shanghai Stock Exchange operates in two sessions: morning (9:30 AM - 11:30 AM) and 
          afternoon (1:00 PM - 3:00 PM). The 90-minute lunch break is longer than most global 
          exchanges — a vestige of traditional Chinese business culture. Combined with{' '}
          <Link href="/hong-kong/" className={linkColor}>Hong Kong's</Link> HKEX (which has a 
          1-hour lunch), this creates unique trading patterns for Asia-focused investors.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Shanghai Morning (9 AM CST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 1 AM (GMT) / 2 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 8 PM previous day (EST)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 12 PM (AEDT)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 10 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Shanghai Evening (6 PM CST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 10 AM (GMT) / 11 AM (BST)</li>
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 5 AM (EST) / 6 AM (EDT)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 2 PM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 6 PM (same time)</li>
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
          ? 'bg-gradient-to-r from-red-50 to-amber-50 border border-red-200' 
          : 'bg-gradient-to-r from-red-900/30 to-amber-900/30 border border-red-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Shanghai?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for Lujiazui and your global team.
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
          Practical Tips for Dealing with Shanghai Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Shanghai's 13-hour gap with <Link href="/new-york/" className={linkColor}>New York</Link> makes 
            real-time collaboration challenging. The golden window is early evening EST (7-10 PM) catching 
            Shanghai's morning. For Europe, late afternoon GMT works well. Be aware of China's "996" culture 
            in tech (9 AM - 9 PM, 6 days) — your contacts may be available later than expected. WeChat is 
            essential for business communication; email response times are slower.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Europe? The 10-12 hour flight lands you 7-8 hours "into the future." From the US 
            West Coast, it's 12+ hours and nearly half a day forward. Shanghai's jet lag is notorious — 
            the city's late-night dining culture (restaurants busy until 10 PM) can help adjustment. 
            Note: Google, WhatsApp, and most Western social media require a VPN. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Working remotely with a Shanghai team from the West? Expect early mornings or late evenings. 
            European remote workers can catch Shanghai's end-of-day (your morning). US-based workers 
            often work "Shanghai hours" for key meetings (starting 7-8 PM local time). Digital tools: 
            Slack and Zoom work via VPN, but Chinese teams often prefer DingTalk or Feishu (Lark).
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
            📈 SSE Hours
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
            🧧 Chinese Holidays
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
          Time zone data sourced from IANA Time Zone Database. SSE trading hours verified against official Shanghai Stock Exchange schedules. Chinese public holidays sourced from State Council of PRC.
        </p>
      </footer>
    </div>
  )
}
