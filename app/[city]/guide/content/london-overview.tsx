'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function LondonOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      {/* Hero Section */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          London Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the capital of the United Kingdom
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current London Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Introduction - Natural, conversational tone */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're scheduling a meeting with colleagues in the UK, planning a trip to see 
          Big Ben, or trying to catch the opening of the London Stock Exchange — understanding 
          London's time zone is essential.
        </p>
        <p>
          London operates on <strong>Greenwich Mean Time (GMT)</strong> in winter and <strong>British 
          Summer Time (BST)</strong> in summer. As the home of the Prime Meridian, London's time zone 
          is literally the reference point for the entire world's timekeeping.
        </p>
        <p>
          But there's more to London time than just knowing it's "GMT." What matters is understanding 
          when businesses actually open, how the Tube schedule changes, and when you can realistically 
          expect a British colleague to respond to your email (hint: probably after their tea break).
        </p>
        <p>
          This guide covers everything you need to know — from business hours and bank holidays to 
          the best times to call London from abroad and tips for beating jet lag.
        </p>
      </section>
      
      {/* Quick Facts Box */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: London Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> GMT (UTC+0)</li>
              <li>• <strong>Summer Time:</strong> BST (UTC+1)</li>
              <li>• <strong>Clocks Forward:</strong> Last Sunday of March</li>
              <li>• <strong>Clocks Back:</strong> Last Sunday of October</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> -5 hours (usually)</li>
              <li>• <strong>Tokyo:</strong> +9 hours</li>
              <li>• <strong>Dubai:</strong> +4 hours</li>
              <li>• <strong>Sydney:</strong> +11 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/time-converter/" className={linkColor}>Time Converter</Link>
        </p>
      </section>
      
      {/* Guide Topics Grid */}
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
      
      {/* Understanding London Time - Detailed content */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding London Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          GMT vs BST: What's the Difference?
        </h3>
        <p>
          London uses two time zones throughout the year. <strong>Greenwich Mean Time (GMT)</strong> is 
          used from late October to late March — this is UTC+0, the baseline for world time. During 
          summer months, clocks move forward one hour to <strong>British Summer Time (BST)</strong>, 
          which is UTC+1.
        </p>
        <p>
          The switch happens on the last Sunday of March (clocks "spring forward") and the last 
          Sunday of October (clocks "fall back"). This aligns closely with most European countries, 
          though the exact dates can differ from the US by a week or two.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why Greenwich Mean Time Matters
        </h3>
        <p>
          London's connection to timekeeping is historic. The Royal Observatory in Greenwich established 
          the Prime Meridian — the line of 0° longitude — in 1851. This made Greenwich the reference 
          point for global time zones. Even though UTC (Coordinated Universal Time) is now the official 
          standard, GMT remains synonymous with London time.
        </p>
        <p>
          For travellers and business people, this means London is the natural "zero point" for 
          calculating time differences. New York is GMT-5, Tokyo is GMT+9, and so on. This makes 
          London a convenient hub for international coordination.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          When London Changes Time
        </h3>
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Spring Forward (to BST)</h4>
              <p className={mutedColor}>Last Sunday of March at 1:00 AM</p>
              <p className="mt-1">Clocks move from 1:00 AM → 2:00 AM</p>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Fall Back (to GMT)</h4>
              <p className={mutedColor}>Last Sunday of October at 2:00 AM</p>
              <p className="mt-1">Clocks move from 2:00 AM → 1:00 AM</p>
            </div>
          </div>
        </div>
        <p className={`text-sm mt-3 ${mutedColor}`}>
          <strong>Pro tip:</strong> During the weeks when the UK and US change clocks on different dates, 
          the time difference shifts temporarily. London-NYC is usually 5 hours, but briefly becomes 4 hours 
          in late March and 6 hours in early November.
        </p>
      </section>
      
      {/* London vs Major Cities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          London Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in London</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇺🇸 New York</td>
                <td className="px-4 py-3">-5 hours</td>
                <td className="px-4 py-3">7:00 AM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇺🇸 Los Angeles</td>
                <td className="px-4 py-3">-8 hours</td>
                <td className="px-4 py-3">4:00 AM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇫🇷 Paris</td>
                <td className="px-4 py-3">+1 hour</td>
                <td className="px-4 py-3">1:00 PM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇦🇪 Dubai</td>
                <td className="px-4 py-3">+4 hours</td>
                <td className="px-4 py-3">4:00 PM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇮🇳 Mumbai</td>
                <td className="px-4 py-3">+5.5 hours</td>
                <td className="px-4 py-3">5:30 PM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇸🇬 Singapore</td>
                <td className="px-4 py-3">+8 hours</td>
                <td className="px-4 py-3">8:00 PM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇯🇵 Tokyo</td>
                <td className="px-4 py-3">+9 hours</td>
                <td className="px-4 py-3">9:00 PM</td>
              </tr>
              <tr className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                <td className="px-4 py-3">🇦🇺 Sydney</td>
                <td className="px-4 py-3">+11 hours</td>
                <td className="px-4 py-3">11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Times shown are approximate and may vary during daylight saving transitions.{' '}
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>
            See detailed time differences →
          </Link>
        </p>
      </section>
      
      {/* Practical Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Practical Tips for Dealing with London Time
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌍 For International Business</h3>
            <p className="text-sm">
              London's position makes it ideal for bridging time zones. A 9 AM meeting in London catches 
              New York at 4 AM (too early), but a 2 PM London meeting is 9 AM NYC — perfect for both sides. 
              For Asia, early morning London calls (7-8 AM) align with end-of-day in Singapore and Tokyo.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
            <p className="text-sm">
              Flying from North America? You'll "lose" 5-8 hours travelling east. Take an overnight flight, 
              arrive in the morning, and push through the first day to adjust faster. Flying from Asia or 
              Australia? You'll "gain" time — but jet lag can still hit hard. Plan a quiet first day.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📱 For Remote Workers</h3>
            <p className="text-sm">
              London's GMT base makes it surprisingly central for global teams. You can comfortably overlap 
              with European colleagues all day, catch Americas in the afternoon, and start early for 
              Asia-Pacific standups. Many remote workers consider London one of the best locations for 
              distributed team coordination.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is London on GMT or BST right now?</h3>
            <p className="text-sm">
              London uses GMT from late October to late March, and BST from late March to late October. 
              Check the current date — if it's between April and October, London is most likely on BST (GMT+1).
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between London and New York?</h3>
            <p className="text-sm">
              Usually 5 hours — London is ahead. When it's noon in London, it's 7 AM in New York. 
              However, for about 2-3 weeks in spring and autumn, the difference changes to 4 or 6 hours 
              because the US and UK change clocks on different dates.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does all of the UK use the same time zone?</h3>
            <p className="text-sm">
              Yes — all of England, Scotland, Wales, and Northern Ireland use the same time (GMT/BST). 
              The only exception is the British Overseas Territories, which have various time zones.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why doesn't the UK stay on BST year-round?</h3>
            <p className="text-sm">
              There have been proposals, but changing would mean darker winter mornings in Scotland 
              (sunrise after 10 AM in December). The current system balances light across seasons, 
              though debates continue about potential changes.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
        <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className="mb-4">
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            💼 Business Hours
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📈 Stock Market
          </Link>
          <Link href={`/${city.slug}/guide/call-times/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📞 Best Time to Call
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📅 UK Holidays
          </Link>
        </div>
      </section>
      
      {/* Schema-friendly last updated */}
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2024. This guide is regularly updated to reflect current information.
      </p>
    </div>
  )
}
