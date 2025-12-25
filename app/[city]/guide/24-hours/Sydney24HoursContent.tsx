'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function Sydney24HoursContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const timeBlocks = [
    {
      time: '5:00 AM - 7:00 AM',
      icon: '🌅',
      title: 'Early Morning',
      desc: 'Bondi Beach comes alive with sunrise swimmers and joggers. Coastal walks are stunning at this hour. Early cafes start serving. Fitness enthusiasts hit the gym or outdoor boot camps.',
    },
    {
      time: '7:00 AM - 9:00 AM',
      icon: '☕',
      title: 'Breakfast Rush',
      desc: 'Coffee culture peaks. Cafes in Surry Hills and Newtown are packed. Commuters flood trains and ferries into the CBD. Bondi to Bronte coastal walk gets busy.',
    },
    {
      time: '9:00 AM - 12:00 PM',
      icon: '💼',
      title: 'Business Morning',
      desc: 'Offices in full swing. Banks and government services open. CBD foot traffic at maximum. Quieter at beaches as locals work. Best time to visit tourist attractions (less crowded).',
    },
    {
      time: '12:00 PM - 2:00 PM',
      icon: '🍽️',
      title: 'Lunch Break',
      desc: 'Office workers flood Circular Quay, Martin Place, and Barangaroo for lunch. Restaurants and food courts packed. Parks like Hyde Park and Domain fill with picnickers. Ferries busy.',
    },
    {
      time: '2:00 PM - 5:00 PM',
      icon: '🌊',
      title: 'Afternoon',
      desc: 'Post-lunch lull in CBD. Beaches fill up as people finish work early (especially Fridays). School kids at beaches. Retail stores busy. Museums and galleries have moderate crowds.',
    },
    {
      time: '5:00 PM - 7:00 PM',
      icon: '🍺',
      title: 'After Work',
      desc: 'Rush hour on public transport. Rooftop bars and pubs fill up. Friday drinks are a ritual. Beaches still busy in summer. Circular Quay bustling with tourists and locals.',
    },
    {
      time: '7:00 PM - 10:00 PM',
      icon: '🍴',
      title: 'Dinner Time',
      desc: 'Restaurants across Darling Harbour, The Rocks, and Surry Hills peak. Theatre-goers head to shows. Harbour lights up. Luna Park glows. Late shopping in CBD (Thursday/Friday).',
    },
    {
      time: '10:00 PM - 12:00 AM',
      icon: '🌃',
      title: 'Late Night',
      desc: 'Bars and clubs in Kings Cross, Oxford Street, and CBD heat up. Late-night dining in Chinatown. Some 24-hour gyms busy. Streets quiet in residential areas.',
    },
    {
      time: '12:00 AM - 5:00 AM',
      icon: '🌙',
      title: 'Late Night / Early Morning',
      desc: 'Clubs still open on weekends. Night shift workers active. 24-hour convenience stores and some McDonald\'s. Early morning bakeries start prep. City mostly quiet.',
    },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24 Hours in Sydney: The City's Daily Rhythm
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          How the harbour city lives, works, and plays around the clock
        </p>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Sydney's daily rhythm is shaped by its unique geography — wrapped around one of the world's most 
          beautiful harbours, with beaches on one side and the CBD on the other. The city wakes early (those 
          sunrise swims!), works hard, but definitely knows how to relax.
        </p>
        <p>
          Unlike New York or London, Sydney doesn't truly run 24/7. Most things shut down by midnight on 
          weekdays, and the city genuinely sleeps. But what it lacks in round-the-clock action, it makes 
          up for in lifestyle — think rooftop sundowners, harbour ferries, and beach culture.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          ⏰ Hour by Hour Breakdown
        </h2>
        <div className="space-y-4">
          {timeBlocks.map((block, index) => (
            <div key={index} className={`p-5 rounded-xl border ${
              isLight ? 'border-slate-200' : 'border-slate-600'
            }`}>
              <div className="flex items-start gap-3 mb-2">
                <span className="text-3xl">{block.icon}</span>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${headingColor}`}>{block.title}</h3>
                  <p className={`text-sm ${mutedColor}`}>{block.time}</p>
                </div>
              </div>
              <p className="text-sm">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌊 A Typical Summer vs Winter Day
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl ${cardBg}`}>
            <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>☀️ Summer (Dec-Feb)</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>5:30 AM:</strong> Sunrise swim clubs in full force</li>
              <li>• <strong>8:00 AM:</strong> Beaches already busy with morning swimmers</li>
              <li>• <strong>12:00 PM:</strong> Office workers eat lunch outdoors</li>
              <li>• <strong>5:30 PM:</strong> After-work beach sessions peak</li>
              <li>• <strong>8:00 PM:</strong> Sunset (long summer days!)</li>
              <li>• <strong>10:00 PM:</strong> Outdoor dining still popular</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl ${cardBg}`}>
            <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>❄️ Winter (Jun-Aug)</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>7:00 AM:</strong> Later sunrise, slower morning</li>
              <li>• <strong>9:00 AM:</strong> Offices fill up (less beach action)</li>
              <li>• <strong>12:00 PM:</strong> Indoor lunches more common</li>
              <li>• <strong>5:00 PM:</strong> Sunset (shorter days)</li>
              <li>• <strong>6:00 PM:</strong> Pubs fill up early (it's dark!)</li>
              <li>• <strong>9:00 PM:</strong> Restaurants quieter than summer</li>
            </ul>
          </div>
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
