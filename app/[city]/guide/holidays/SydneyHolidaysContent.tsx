'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const holidays2025 = [
    { date: 'January 1', name: 'New Year\'s Day', type: 'National', closures: 'Banks, offices, most retail closed' },
    { date: 'January 26', name: 'Australia Day', type: 'National', closures: 'Banks, offices closed. Tourist areas open' },
    { date: 'April 18', name: 'Good Friday', type: 'National', closures: 'Most businesses closed' },
    { date: 'April 19', name: 'Easter Saturday', type: 'National', closures: 'Some shops open, banks closed' },
    { date: 'April 21', name: 'Easter Monday', type: 'National', closures: 'Banks closed, some retail open' },
    { date: 'April 25', name: 'Anzac Day', type: 'National', closures: 'Morning services, afternoon opens' },
    { date: 'June 9', name: 'Queen\'s Birthday', type: 'NSW', closures: 'Banks, offices closed' },
    { date: 'August 4', name: 'Bank Holiday', type: 'NSW', closures: 'Banks and some offices only' },
    { date: 'October 6', name: 'Labour Day', type: 'NSW', closures: 'Banks, offices closed' },
    { date: 'December 25', name: 'Christmas Day', type: 'National', closures: 'Everything closed' },
    { date: 'December 26', name: 'Boxing Day', type: 'National', closures: 'Sales! Retail open, banks closed' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Sydney Public Holidays 2025
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete calendar of bank holidays, closures, and what to expect
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Summary</h2>
        <p>
          Sydney (NSW) has 11 public holidays in 2025. On these days: banks and government offices close, 
          retail varies (tourist areas usually open), restaurants open with 10-15% surcharge. Plan ahead!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 Public Holiday Calendar</h2>
        
        <div className={`overflow-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Holiday</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">What's Closed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              {holidays2025.map((holiday, index) => (
                <tr key={index}>
                  <td className="p-3 whitespace-nowrap">{holiday.date}</td>
                  <td className="p-3 font-medium">{holiday.name}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      holiday.type === 'National' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {holiday.type}
                    </span>
                  </td>
                  <td className="p-3 text-xs">{holiday.closures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏪 What's Open on Public Holidays?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Usually Closed</h3>
            <ul className="text-sm space-y-1">
              <li>• Banks and government offices</li>
              <li>• Most office buildings</li>
              <li>• Some retail (especially Christmas)</li>
              <li>• Public transport (reduced service)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Usually Open</h3>
            <ul className="text-sm space-y-1">
              <li>• Tourist attractions (Circular Quay area)</li>
              <li>• Restaurants & cafes (with surcharge)</li>
              <li>• Convenience stores</li>
              <li>• Major shopping centers (except Christmas)</li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-2 border-dashed ${isLight ? 'border-amber-300' : 'border-amber-500/50'}`}>
          <p className="text-sm">
            <strong>💰 Public Holiday Surcharge:</strong> Most restaurants and cafes add 10-15% surcharge on 
            public holidays to cover penalty rates for staff. This is normal and legal in Australia.
          </p>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>💼</span>
            <span className={`font-medium ${headingColor}`}>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>🏖️</span>
            <span className={`font-medium ${headingColor}`}>Best Time to Visit</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
