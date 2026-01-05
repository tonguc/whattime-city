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

// Long-tail keyword optimized FAQ data for Dubai
const FAQ_DATA = [
  {
    question: "What is the time difference between Dubai and New York right now?",
    answer: "Dubai is 9 hours ahead of New York during Eastern Standard Time (EST). When it's 9:00 AM in New York, it's 6:00 PM in Dubai. During US daylight saving time (EDT), the difference reduces to 8 hours. Dubai does not observe daylight saving time."
  },
  {
    question: "Does Dubai use daylight saving time?",
    answer: "No, Dubai and the UAE do not observe daylight saving time. Dubai remains on Gulf Standard Time (GST, UTC+4) year-round. This means while Dubai's clocks never change, the time difference with countries that use DST (US, UK, Europe) shifts twice annually."
  },
  {
    question: "What time does the Dubai Financial Market open and close?",
    answer: "The Dubai Financial Market (DFM) opens at 10:00 AM and closes at 2:00 PM GST, Sunday through Thursday. Note: UAE's weekend is Friday-Saturday, not Saturday-Sunday. For New York investors, that's 1:00 AM to 5:00 AM ET. For London, it's 6:00 AM to 10:00 AM GMT."
  },
  {
    question: "What is the best time to call Dubai from the UK?",
    answer: "The best time to call Dubai from the UK is between 9:00 AM and 1:00 PM GMT, which reaches Dubai during their business hours (1:00 PM - 5:00 PM GST). Morning UK calls catch Dubai's afternoon perfectly. Remember Dubai's weekend is Friday-Saturday, not Saturday-Sunday."
  },
  {
    question: "What are Dubai working days and weekend?",
    answer: "Dubai's working week is Sunday through Thursday. The weekend is Friday-Saturday (changed from the traditional Friday-only weekend in 2022 to better align with global markets). Government offices work Sunday-Thursday 7:30 AM to 2:30 PM. Private sector typically 9 AM to 6 PM."
  },
  {
    question: "How many hours ahead is Dubai from London?",
    answer: "Dubai is 4 hours ahead of London during GMT (winter). When it's 12:00 PM in London, it's 4:00 PM in Dubai. During British Summer Time (BST), the difference reduces to 3 hours. This makes UK-Dubai scheduling relatively convenient for business calls."
  },
  {
    question: "What time zone is Dubai UAE in?",
    answer: "Dubai is in Gulf Standard Time (GST), which is UTC+4. All of the UAE uses the same time zone. GST is shared with Oman, Mauritius, and the Seychelles. It's one hour behind India (IST) and one hour ahead of Moscow (MSK). Dubai never changes clocks for daylight saving."
  },
  {
    question: "What is the best time to call Dubai from India?",
    answer: "Dubai is 1.5 hours behind India (IST). The best time to call Dubai from India is between 11:30 AM and 7:30 PM IST, which covers Dubai's full business day (10:00 AM - 6:00 PM GST). This convenient time difference makes India-Dubai business communication easy."
  }
]

export default function DubaiOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

  // Generate FAQ Schema JSON-LD
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
      
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Dubai Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the UAE's global business hub
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Dubai Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with Dubai investors, planning a stopover at the world's 
          busiest international airport, or tracking the DFM opening — understanding Dubai's 
          time zone (and unique weekend) is essential for global business.
        </p>
        <p>
          Dubai operates on <strong>Gulf Standard Time (GST)</strong>, which is UTC+4 year-round. 
          Like most of the Middle East, the UAE does not observe daylight saving time, keeping 
          time calculations consistent throughout the year.
        </p>
        <p>
          But the real surprise for visitors? The UAE weekend is <strong>Friday-Saturday</strong>, 
          not Saturday-Sunday. This shifted from the traditional Friday-only weekend in 2022 to 
          better align with global financial markets.
        </p>
      </section>
      
            {/* Quick Facts - Technical info only, no city links (moved to table) */}
      <QuickFacts config={config} isLight={isLight} />
      
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
                  ? 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-emerald-500/50'
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
      
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Dubai Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Friday-Saturday Weekend
        </h3>
        <p>
          Until 2022, the UAE had a Friday-only weekend (with some organizations taking Thursday 
          afternoon off). The shift to Friday-Saturday was designed to improve work-life balance 
          and better align with global financial markets. Sunday is now a full working day — 
          this catches many Western visitors off guard!
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Strategic Time Zone Position
        </h3>
        <p>
          Dubai's UTC+4 position makes it a global business hub. Morning meetings catch the end 
          of the Asian business day (<Link href="/tokyo/" className={linkColor}>Tokyo</Link>, <Link href="/singapore/" className={linkColor}>Singapore</Link>), while afternoon meetings overlap with 
          European markets. Late afternoon can even catch early morning US East Coast.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Dubai Morning (9 AM GST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 12 AM (midnight, prev day)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 5 AM</li>
                <li>• <Link href="/mumbai/" className={linkColor}>Mumbai</Link>: 10:30 AM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 1 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Dubai Evening (6 PM GST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 9 AM</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 2 PM</li>
                <li>• <Link href="/mumbai/" className={linkColor}>Mumbai</Link>: 7:30 PM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 11 PM</li>
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
          ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200' 
          : 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with Dubai?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time (and remember — their weekend is Friday-Saturday!).
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Dubai Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            The best time for UK-Dubai calls is 10 AM - 2 PM GMT, catching Dubai's afternoon. 
            For US East Coast, 8-10 AM ET reaches Dubai's late afternoon/early evening. Remember 
            that Friday is off in Dubai — schedule important calls Sunday-Thursday only.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Dubai International (DXB) is a major transit hub. Flying from Europe? Minimal jet lag 
            (3-4 hours). From the US East Coast, expect significant adjustment (9 hour shift). 
            Dubai's 24-hour culture helps — many attractions and malls stay open very late. 
            Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Dubai's position makes it ideal for bridging European and Asian markets. You get 
            significant overlap with both <Link href="/london/" className={linkColor}>London</Link> and <Link href="/mumbai/" className={linkColor}>Mumbai</Link>/<Link href="/singapore/" className={linkColor}>Singapore</Link>. 
            The growing expat community and excellent infrastructure make Dubai popular for digital nomads.
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
      
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/time-business/`}
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
            📈 DFM & ADX
          </Link>
          <Link 
            href={`/${city.slug}/guide/best-time-to-call/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/public-holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🇦🇪 UAE Holidays
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
          Time zone data sourced from IANA Time Zone Database. This guide is regularly reviewed and updated to ensure accuracy.
        </p>
      </footer>
    </div>
  )
}
