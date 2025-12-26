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

export default function TokyoOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Tokyo Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Japan's bustling capital
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Tokyo Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Planning a call with colleagues in Tokyo, trying to catch the Nikkei opening, or wondering 
          if that ramen shop in Shinjuku will still be open when you arrive? Understanding Tokyo's 
          time zone is essential.
        </p>
        <p>
          Tokyo runs on <strong>Japan Standard Time (JST)</strong>, which is UTC+9 year-round. 
          Unlike most countries, Japan does not observe daylight saving time — the clocks never 
          change, making time calculations refreshingly simple.
        </p>
        <p>
          But knowing JST is just the beginning. What matters is understanding how time works 
          <em>in practice</em> in Tokyo — when businesses actually open, when the last train leaves, 
          and why you should never schedule a meeting during Golden Week.
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Tokyo Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Time Zone:</strong> JST (UTC+9)</li>
              <li>• <strong>Daylight Saving:</strong> Not observed</li>
              <li>• <strong>Clocks Change:</strong> Never</li>
              <li>• <strong>Same as:</strong> Korea (KST), parts of Indonesia</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> +14 hours</li>
              <li>• <strong>London:</strong> +9 hours</li>
              <li>• <strong>Sydney:</strong> +2 hours (varies)</li>
              <li>• <strong>Los Angeles:</strong> +17 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Converter</Link>
        </p>
      </section>
      
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
                  ? 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-rose-500/50'
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
          Understanding Tokyo Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why Japan Doesn't Use Daylight Saving
        </h3>
        <p>
          Japan briefly used DST during the US occupation (1948-1951) but abandoned it due to 
          public opposition. The Japanese lifestyle, with its emphasis on long working hours and 
          the importance of natural light for agriculture, made the change unpopular. Today, 
          Japan's consistent UTC+9 makes international scheduling easier — you only need to 
          account for other countries' DST changes.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Challenge of Tokyo Time for Westerners
        </h3>
        <p>
          Tokyo is 14 hours ahead of New York and 9 hours ahead of London. This creates a 
          significant challenge for real-time collaboration. When Tokyo's business day starts 
          at 9 AM, it's 7 PM the previous day in New York. The limited overlap window 
          (early morning Tokyo = late afternoon US) requires careful planning.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Tokyo Morning (9 AM JST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 7 PM previous day (EST)</li>
                <li>• London: 12 AM midnight (GMT)</li>
                <li>• Sydney: 11 AM same day (AEDT)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Tokyo Evening (6 PM JST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 4 AM same day (EST)</li>
                <li>• London: 9 AM same day (GMT)</li>
                <li>• Sydney: 8 PM same day (AEDT)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Tokyo Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in Tokyo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 New York</td><td className="px-4 py-3">-14 hours</td><td className="px-4 py-3">10:00 PM (previous day)</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 Los Angeles</td><td className="px-4 py-3">-17 hours</td><td className="px-4 py-3">7:00 PM (previous day)</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 London</td><td className="px-4 py-3">-9 hours</td><td className="px-4 py-3">3:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇫🇷 Paris</td><td className="px-4 py-3">-8 hours</td><td className="px-4 py-3">4:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇦🇪 Dubai</td><td className="px-4 py-3">-5 hours</td><td className="px-4 py-3">7:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 Mumbai</td><td className="px-4 py-3">-3.5 hours</td><td className="px-4 py-3">8:30 AM</td></tr>
              <tr><td className="px-4 py-3">🇸🇬 Singapore</td><td className="px-4 py-3">-1 hour</td><td className="px-4 py-3">11:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇰🇷 Seoul</td><td className="px-4 py-3">0 hours</td><td className="px-4 py-3">12:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇺 Sydney</td><td className="px-4 py-3">+2 hours</td><td className="px-4 py-3">2:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Sydney difference varies due to Australian DST.{' '}
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>
            See detailed time differences →
          </Link>
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Practical Tips for Dealing with Tokyo Time
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌍 For International Business</h3>
            <p className="text-sm">
              The best overlap with US East Coast is 8-10 AM Tokyo (6-8 PM previous day NYC). 
              For Europe, 5-7 PM Tokyo catches morning hours in London/Paris. Consider async 
              communication — Japanese companies increasingly accept it for global teams.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
            <p className="text-sm">
              Flying from the US? You'll cross the International Date Line and "lose" a day going 
              west. Arrive exhausted but in daylight — push through to evening for faster adjustment. 
              From Europe, it's a brutal 12-hour flight but only +8/9 hours time change.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📱 For Remote Workers</h3>
            <p className="text-sm">
              Tokyo's timezone makes real-time collaboration with the West challenging. Consider 
              early morning Tokyo meetings (7-9 AM) for US afternoon overlap, or embrace async 
              workflows. The upside: you're ahead of everyone, so you set the agenda.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Tokyo have daylight saving time?</h3>
            <p className="text-sm">
              No. Japan is one of the few developed countries that doesn't observe DST. The clocks 
              stay at UTC+9 year-round, making time calculations simpler.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between Tokyo and New York?</h3>
            <p className="text-sm">
              Tokyo is 14 hours ahead of New York (EST) and 13 hours ahead during EDT. When it's 
              noon in Tokyo, it's 10 PM the previous day in New York.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is all of Japan in the same time zone?</h3>
            <p className="text-sm">
              Yes — all of Japan uses JST (UTC+9), from Hokkaido in the north to Okinawa in the 
              south. This makes domestic travel timing simple.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${isLight ? 'bg-rose-50 border border-rose-200' : 'bg-rose-900/20 border border-rose-700'}`}>
        <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className="mb-4">
          Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            💼 Business Hours
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📈 Stock Market
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            🌸 Cherry Blossoms
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📅 Holidays
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2024.
      </p>
    </div>
  )
}
