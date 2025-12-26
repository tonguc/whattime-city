'use client'

import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function ParisStockMarketContent({ city }: Props) {
  const { time } = useCityContext()
  const parisTime = new Date(time.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const hour = parisTime.getHours()
  const minutes = parisTime.getMinutes()
  const day = parisTime.getDay()
  const currentMinutes = hour * 60 + minutes

  const getMarketStatus = () => {
    if (day === 0 || day === 6) return { status: 'Closed', color: 'bg-red-100 text-red-800', desc: 'Weekend' }
    if (currentMinutes >= 540 && currentMinutes < 1050) return { status: 'Open', color: 'bg-green-100 text-green-800', desc: '9:00 AM - 5:30 PM CET' }
    if (currentMinutes >= 510 && currentMinutes < 540) return { status: 'Pre-Open', color: 'bg-yellow-100 text-yellow-800', desc: 'Opening auction' }
    if (currentMinutes >= 1050 && currentMinutes < 1065) return { status: 'Closing', color: 'bg-yellow-100 text-yellow-800', desc: 'Closing auction' }
    return { status: 'Closed', color: 'bg-red-100 text-red-800', desc: 'After hours' }
  }

  const marketStatus = getMarketStatus()

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Euronext Paris Hours: CAC 40 Trading Times for Global Investors</h1>
      
      <p className="lead">
        Euronext Paris is one of Europe's leading stock exchanges and home to the CAC 40 index. 
        Understanding its trading hours is essential for global investors.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Euronext Paris Market Status</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Real-time based on current Paris time</p>
          </div>
          <div className={`px-4 py-2 rounded-full font-bold ${marketStatus.color}`}>
            {marketStatus.status}
          </div>
        </div>
        <p className="text-sm mt-2">{marketStatus.desc}</p>
      </div>

      <h2>Euronext Paris Trading Hours</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">Session</th>
              <th className="p-3 text-left">Paris Time (CET)</th>
              <th className="p-3 text-left">UTC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">Pre-Opening</td><td className="p-3 font-mono">7:15 AM - 9:00 AM</td><td className="p-3 font-mono">6:15 AM - 8:00 AM</td></tr>
            <tr><td className="p-3">Opening Auction</td><td className="p-3 font-mono">8:30 AM - 9:00 AM</td><td className="p-3 font-mono">7:30 AM - 8:00 AM</td></tr>
            <tr className="bg-green-50 dark:bg-green-900/20"><td className="p-3 font-bold">Continuous Trading</td><td className="p-3 font-mono font-bold">9:00 AM - 5:30 PM</td><td className="p-3 font-mono font-bold">8:00 AM - 4:30 PM</td></tr>
            <tr><td className="p-3">Closing Auction</td><td className="p-3 font-mono">5:30 PM - 5:35 PM</td><td className="p-3 font-mono">4:30 PM - 4:35 PM</td></tr>
            <tr><td className="p-3">Trading at Last</td><td className="p-3 font-mono">5:35 PM - 5:40 PM</td><td className="p-3 font-mono">4:35 PM - 4:40 PM</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Key Information</h2>

      <ul>
        <li><strong>Exchange:</strong> Euronext Paris (part of pan-European Euronext group)</li>
        <li><strong>Main Index:</strong> CAC 40 (40 largest French companies)</li>
        <li><strong>Other Indices:</strong> SBF 120, CAC Next 20, CAC Mid 60</li>
        <li><strong>Trading Days:</strong> Monday - Friday</li>
        <li><strong>Currency:</strong> Euro (EUR)</li>
      </ul>

      <h2>Paris Time vs Global Markets</h2>

      <div className="not-prose my-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <h3 className="font-bold mb-3">When Euronext Paris Opens (9:00 AM CET):</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div>🇺🇸 New York<br/><strong>3:00 AM</strong> (pre-market)</div>
          <div>🇬🇧 London<br/><strong>8:00 AM</strong> (open)</div>
          <div>🇭🇰 Hong Kong<br/><strong>4:00 PM</strong> (closed)</div>
          <div>🇯🇵 Tokyo<br/><strong>5:00 PM</strong> (closed)</div>
        </div>
      </div>

      <h3>Market Overlap Windows</h3>

      <ul>
        <li><strong>Paris + London:</strong> 9:00 AM - 4:30 PM CET (nearly full overlap)</li>
        <li><strong>Paris + New York:</strong> 2:30 PM - 5:30 PM CET (3+ hours)</li>
        <li><strong>Paris + Hong Kong:</strong> 9:00 AM - 10:00 AM CET (brief morning overlap)</li>
        <li><strong>Paris + Tokyo:</strong> No direct overlap (Tokyo closes before Paris opens)</li>
      </ul>

      <h2>2025 Euronext Paris Holidays</h2>

      <div className="not-prose my-6">
        <div className="grid gap-2 text-sm">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>New Year's Day</span><span className="font-mono">Wed, Jan 1</span>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>Good Friday</span><span className="font-mono">Fri, Apr 18</span>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>Easter Monday</span><span className="font-mono">Mon, Apr 21</span>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>Labour Day</span><span className="font-mono">Thu, May 1</span>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>Christmas Day</span><span className="font-mono">Thu, Dec 25</span>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg flex justify-between">
            <span>Boxing Day</span><span className="font-mono">Fri, Dec 26</span>
          </div>
        </div>
      </div>

      <h2>CAC 40 Key Companies</h2>

      <p>The CAC 40 includes major French and European corporations:</p>

      <ul>
        <li><strong>Luxury:</strong> LVMH, Kering, Hermès, L'Oréal</li>
        <li><strong>Energy:</strong> TotalEnergies, Engie</li>
        <li><strong>Finance:</strong> BNP Paribas, Société Générale, AXA</li>
        <li><strong>Industrial:</strong> Airbus, Saint-Gobain, Schneider Electric</li>
        <li><strong>Tech:</strong> Capgemini, Dassault Systèmes</li>
        <li><strong>Consumer:</strong> Danone, Pernod Ricard, Carrefour</li>
      </ul>

      <h2>Trading from Different Time Zones</h2>

      <h3>From New York</h3>
      <ul>
        <li><strong>Paris opens:</strong> 3:00 AM ET</li>
        <li><strong>Paris closes:</strong> 11:30 AM ET</li>
        <li><strong>Overlap with NYSE:</strong> 9:30 AM - 11:30 AM ET</li>
        <li><strong>Strategy:</strong> Pre-market US can react to Paris close</li>
      </ul>

      <h3>From Singapore/Hong Kong</h3>
      <ul>
        <li><strong>Paris opens:</strong> 4:00 PM SGT / 4:00 PM HKT</li>
        <li><strong>Paris closes:</strong> 12:30 AM SGT/HKT (next day)</li>
        <li><strong>Strategy:</strong> End of Asia day to monitor Paris open</li>
      </ul>

      <h3>From Tokyo</h3>
      <ul>
        <li><strong>Paris opens:</strong> 5:00 PM JST</li>
        <li><strong>Paris closes:</strong> 1:30 AM JST (next day)</li>
        <li><strong>Strategy:</strong> Evening monitoring in Japan</li>
      </ul>

      <div className="not-prose my-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <h3 className="font-bold mb-3">📈 Quick Facts</h3>
        <ul className="text-sm space-y-1">
          <li>• CAC 40 launched in 1987 with base of 1,000 points</li>
          <li>• Euronext formed in 2000 (Paris, Amsterdam, Brussels merger)</li>
          <li>• Total trading hours: 8 hours 30 minutes</li>
          <li>• No midday break (unlike some Asian markets)</li>
          <li>• Summer time (CEST): Add 1 hour to all times</li>
        </ul>
      </div>
    </article>
  )
}
