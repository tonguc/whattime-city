'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonBestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const months = [
    {
      name: 'January',
      temp: '2-8°C (36-46°F)',
      crowd: 'Low',
      price: '💰 Budget',
      icon: '🌧️',
      desc: 'Post-Christmas quiet. Excellent hotel deals and January sales. Cold and damp but rarely snows. Museums are blissfully empty. Perfect for theatre lovers.',
    },
    {
      name: 'February',
      temp: '2-9°C (36-48°F)',
      crowd: 'Low',
      price: '💰 Budget',
      icon: '💝',
      desc: 'Still cold and grey, but signs of spring appear. Valentine\'s Day restaurant prices spike. Half-term week (mid-Feb) brings families to attractions. Chinese New Year celebrations in Chinatown.',
    },
    {
      name: 'March',
      temp: '4-12°C (39-54°F)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🌷',
      desc: 'Spring starts arriving. Daffodils bloom in parks. Weather is still unpredictable — pack layers. St. Patrick\'s Day parade. Clocks go forward last Sunday.',
    },
    {
      name: 'April',
      temp: '6-15°C (43-59°F)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '🌸',
      desc: 'Cherry blossoms in Kew Gardens and Regent\'s Park. Easter holidays bring crowds. London Marathon (late April). Weather improving but still bring an umbrella.',
    },
    {
      name: 'May',
      temp: '9-18°C (48-64°F)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '☀️',
      desc: 'Chelsea Flower Show. Two bank holiday weekends. Longer evenings (sunset ~9 PM). Outdoor dining becomes pleasant. FA Cup Final atmosphere.',
    },
    {
      name: 'June',
      temp: '12-21°C (54-70°F)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎾',
      desc: 'Wimbledon fever. Trooping the Colour (Queen\'s birthday parade). Longest days (sunset ~10 PM). Pride Month celebrations. Perfect pub garden weather.',
    },
    {
      name: 'July',
      temp: '14-24°C (57-75°F)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🌞',
      desc: 'Peak tourist season. School holidays begin. British Summer Time at its best (occasionally). Heatwaves possible. Rooftop bars and outdoor cinema season.',
    },
    {
      name: 'August',
      temp: '14-23°C (57-73°F)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎭',
      desc: 'Notting Hill Carnival (late August). School holidays continue. Many Londoners leave the city. Good time for less crowded commuter areas. Proms season at Royal Albert Hall.',
    },
    {
      name: 'September',
      temp: '11-19°C (52-66°F)',
      crowd: 'Medium-High',
      price: '💰💰💰 Higher',
      icon: '🍂',
      desc: 'Shoulder season begins. Schools return, families disappear. London Fashion Week. Weather still pleasant. Open House London (free access to buildings). Great month to visit.',
    },
    {
      name: 'October',
      temp: '8-15°C (46-59°F)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🎃',
      desc: 'Autumn colours in parks. Half-term week (late Oct) brings families. Clocks go back. Halloween festivities. London Film Festival. Restaurant Week deals.',
    },
    {
      name: 'November',
      temp: '5-11°C (41-52°F)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🎆',
      desc: 'Bonfire Night (Nov 5) fireworks. Remembrance Day services. Christmas lights switched on (mid-Nov). Days getting very short. Good theatre month.',
    },
    {
      name: 'December',
      temp: '3-9°C (37-48°F)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎄',
      desc: 'Christmas markets and ice rinks. Festive atmosphere everywhere. Extremely busy shopping areas. New Year\'s Eve fireworks require tickets. Hotels expensive but magical.',
    },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit London
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Month-by-month guide to weather, crowds, and events
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Best overall: May, June, September</strong> — pleasant weather, longer days, and 
          manageable crowds. <strong>Best for budget:</strong> January-February (excluding half-term). 
          <strong>Avoid if possible:</strong> August (peak prices, Londoners gone) and late December 
          (unless you want Christmas vibes).
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          London's reputation for rain is somewhat exaggerated — it actually gets less rainfall than 
          New York, Rome, or Sydney. That said, "sunny" in London means something different than in 
          California. The city has its own charm in every season, from cosy pub afternoons in winter 
          to endless summer evenings in pub gardens.
        </p>
        <p>
          What matters more than weather is timing around events, school holidays, and your priorities. 
          Here's the honest breakdown.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>📅 Month by Month</h2>
        
        <div className="space-y-4">
          {months.map((month) => (
            <div 
              key={month.name}
              className={`p-4 rounded-xl ${cardBg} border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-2xl">{month.icon}</span>
                <h3 className={`text-lg font-semibold ${headingColor}`}>{month.name}</h3>
                <span className={`text-sm px-2 py-1 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-600'}`}>
                  {month.temp}
                </span>
                <span className={`text-sm px-2 py-1 rounded ${
                  month.crowd === 'Low' ? 'bg-green-100 text-green-700' :
                  month.crowd === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  month.crowd === 'Medium-High' ? 'bg-orange-100 text-orange-700' :
                  month.crowd === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {month.crowd} crowds
                </span>
                <span className="text-sm">{month.price}</span>
              </div>
              <p className="text-sm">{month.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎯 Best Times by Purpose</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🏛️ Museums & Indoor Culture</h3>
            <p className="text-sm mb-2"><strong>Best: January-February, November</strong></p>
            <p className="text-sm">
              Fewer crowds, lower prices. The British Museum, V&A, and galleries are blissfully 
              quiet on weekday mornings. Perfect for rainy day exploration.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🌳 Parks & Walking</h3>
            <p className="text-sm mb-2"><strong>Best: May-June, September</strong></p>
            <p className="text-sm">
              Long daylight hours (sunset 9-10 PM in summer). Spring flowers or autumn colours. 
              Comfortable walking temperatures. Perfect for Hyde Park, Hampstead Heath, Kew Gardens.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>💰 Budget Travel</h3>
            <p className="text-sm mb-2"><strong>Best: January-February, November</strong></p>
            <p className="text-sm">
              Hotel prices drop significantly. January sales offer retail bargains. Avoid school 
              holiday weeks. Midweek flights are cheapest.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎭 West End & Theatre</h3>
            <p className="text-sm mb-2"><strong>Best: January-March, November</strong></p>
            <p className="text-sm">
              Easier to get tickets, better availability. Summer and December are packed. 
              Many shows offer discounts in quieter months.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🍺 Pub Culture & Nightlife</h3>
            <p className="text-sm mb-2"><strong>Best: May-September</strong></p>
            <p className="text-sm">
              Pub gardens are essential to the experience. Long summer evenings make for perfect 
              outdoor drinking weather. Rooftop bars open seasonally.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎄 Festive Experience</h3>
            <p className="text-sm mb-2"><strong>Best: Late November - December 23</strong></p>
            <p className="text-sm">
              Christmas markets, ice rinks, light displays. Book accommodation months ahead. 
              Very busy but magical atmosphere. Avoid the week between Christmas and New Year 
              (everything closed).
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 UK School Holidays to Know</h2>
        
        <p className="mb-4">
          School holidays bring families to London and spike accommodation prices. Be aware of:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Typical Dates</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="px-4 py-3 font-medium">February Half-Term</td>
                <td className="px-4 py-3">Mid-February (1 week)</td>
                <td className="px-4 py-3">Museums busier, prices up slightly</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Easter Holidays</td>
                <td className="px-4 py-3">2 weeks around Easter</td>
                <td className="px-4 py-3">High impact — very busy everywhere</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">May Half-Term</td>
                <td className="px-4 py-3">Late May/early June (1 week)</td>
                <td className="px-4 py-3">Combined with bank holidays — busy</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Summer Holidays</td>
                <td className="px-4 py-3">Mid-July to early September</td>
                <td className="px-4 py-3">Peak season — maximum crowds & prices</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">October Half-Term</td>
                <td className="px-4 py-3">Late October (1 week)</td>
                <td className="px-4 py-3">Noticeable increase in family visitors</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Christmas Holidays</td>
                <td className="px-4 py-3">~Dec 20 - Jan 3</td>
                <td className="px-4 py-3">Very busy, many closures Dec 25-26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌟 Major Events Calendar</h2>
        
        <div className="space-y-3">
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Chinese New Year (Jan/Feb)</span>
            <span className={` ml-2 ${mutedColor}`}>Chinatown festivities and parade</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">London Marathon (April)</span>
            <span className={` ml-2 ${mutedColor}`}>Road closures; great spectator event</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Chelsea Flower Show (May)</span>
            <span className={` ml-2 ${mutedColor}`}>Tickets sell out months ahead</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Wimbledon (June-July)</span>
            <span className={` ml-2 ${mutedColor}`}>2 weeks; affects SW London transport</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">BBC Proms (July-September)</span>
            <span className={` ml-2 ${mutedColor}`}>Classical music at Royal Albert Hall</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Notting Hill Carnival (August Bank Holiday)</span>
            <span className={` ml-2 ${mutedColor}`}>Europe's largest street festival</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Open House London (September)</span>
            <span className={` ml-2 ${mutedColor}`}>Free access to normally closed buildings</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Bonfire Night (November 5)</span>
            <span className={` ml-2 ${mutedColor}`}>Fireworks displays across the city</span>
          </div>
          <div className={`p-3 rounded-lg ${cardBg}`}>
            <span className="font-medium">Christmas Lights (Mid-November)</span>
            <span className={` ml-2 ${mutedColor}`}>Oxford Street, Regent Street switch-ons</span>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How much rain should I actually expect?</h3>
            <p className="text-sm">
              London averages about 23 days with rain per month in winter, 15 days in summer. 
              But it's usually light rain or drizzle, not heavy downpours. An umbrella or 
              waterproof jacket is essential year-round.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What about daylight hours?</h3>
            <p className="text-sm">
              Dramatic variation. December: sunrise 8 AM, sunset 4 PM (~8 hours daylight). 
              June: sunrise 4:45 AM, sunset 9:20 PM (~17 hours daylight). Plan sightseeing accordingly.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When is the cheapest time to fly to London?</h3>
            <p className="text-sm">
              January-February and November (excluding Thanksgiving week for US travelers). 
              Tuesday and Wednesday departures are usually cheapest. Avoid school holidays.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is summer really worth the crowds?</h3>
            <p className="text-sm">
              It depends. The long evenings and pub garden culture are genuinely wonderful. 
              But major attractions are packed, and many Londoners leave. September offers 
              similar weather with fewer tourists.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UK Bank Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in London</span>
          </Link>
          <Link href={`/${city.slug}/guide/travel-planning/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>✈️</span><span>Travel Planning</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
