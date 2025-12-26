'use client'

import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function ParisTwentyFourHoursContent({ city }: Props) {
  const { time } = useCityContext()
  const parisTime = new Date(time.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const hour = parisTime.getHours()

  const getTimeStatus = () => {
    if (hour >= 6 && hour < 12) return { period: 'Morning', emoji: '🌅', desc: 'Cafés buzzing, croissants fresh' }
    if (hour >= 12 && hour < 14) return { period: 'Lunch', emoji: '🍽️', desc: 'Sacred déjeuner time' }
    if (hour >= 14 && hour < 18) return { period: 'Afternoon', emoji: '☀️', desc: 'Shopping & sightseeing' }
    if (hour >= 18 && hour < 22) return { period: 'Evening', emoji: '🌆', desc: 'Apéro & dinner time' }
    if (hour >= 22 || hour < 2) return { period: 'Night', emoji: '🌙', desc: 'Nightlife awakens' }
    return { period: 'Late Night', emoji: '🌃', desc: 'The city sleeps' }
  }

  const status = getTimeStatus()

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>24 Hours in Paris: How Parisians Live Around the Clock</h1>
      
      <p className="lead">
        Paris has its own rhythm — from early morning baguette runs to late-night jazz clubs. 
        Understanding the daily pulse of the city helps you experience it like a local.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{status.emoji}</span>
          <div>
            <div className="text-lg font-bold">Right Now in Paris: {status.period}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{status.desc}</div>
          </div>
        </div>
      </div>

      <h2>🌅 Morning: 6:00 AM - 12:00 PM</h2>

      <h3>6:00 - 7:30 AM: The Early Start</h3>
      <ul>
        <li>Boulangeries open — the smell of fresh croissants fills the streets</li>
        <li>Early risers jog along the Seine or in Luxembourg Gardens</li>
        <li>Markets start setting up (Marché d'Aligre, Marché Bastille)</li>
        <li>Metro opens at 5:30 AM — first trains are quiet</li>
      </ul>

      <h3>7:30 - 9:00 AM: Café Culture Begins</h3>
      <ul>
        <li>Terraces fill with locals having "petit déjeuner"</li>
        <li>Espresso and croissant — the Parisian breakfast</li>
        <li>Metro rush hour begins (peak: 8:00 - 9:30 AM)</li>
        <li>Office workers hurry through Châtelet-Les Halles</li>
      </ul>

      <h3>9:00 - 12:00 PM: Business Hours</h3>
      <ul>
        <li>Offices in full swing in La Défense, Opéra, Saint-Lazare</li>
        <li>Museums open (Louvre 9 AM, Orsay 9:30 AM)</li>
        <li>Tourist queues form at major attractions</li>
        <li>Local shops open around 10:00 AM</li>
      </ul>

      <h2>🍽️ Lunch: 12:00 PM - 2:00 PM</h2>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <strong>The Sacred Lunch Hour:</strong> This is not a quick sandwich at the desk. French 
        lunch is a proper meal, often with colleagues. Many small shops close during this time.
      </div>

      <ul>
        <li>Restaurants packed for "le déjeuner" (lunch menu typically €12-20)</li>
        <li>Brasseries offer quicker options</li>
        <li>Parks fill with picnickers if weather is nice</li>
        <li>Business emails slow dramatically</li>
      </ul>

      <h2>☀️ Afternoon: 2:00 PM - 6:00 PM</h2>

      <h3>2:00 - 4:00 PM: Post-Lunch Lull</h3>
      <ul>
        <li>Streets quieter as lunch digests</li>
        <li>Best time to visit popular museums (less crowded)</li>
        <li>Shops reopen after lunch break</li>
        <li>Café terraces perfect for people-watching</li>
      </ul>

      <h3>4:00 - 6:00 PM: Le Goûter & Pre-Rush</h3>
      <ul>
        <li>"Le goûter" — afternoon snack time (especially for children)</li>
        <li>Patisseries busy with after-school crowds</li>
        <li>Department stores at their busiest</li>
        <li>Metro starts getting crowded again</li>
      </ul>

      <h2>🌆 Evening: 6:00 PM - 10:00 PM</h2>

      <h3>6:00 - 8:00 PM: L'Apéro</h3>
      <ul>
        <li>The magical "apéro" hour — pre-dinner drinks</li>
        <li>Terraces overflow with locals unwinding</li>
        <li>Wine bars, cocktail spots fill up</li>
        <li>Evening rush hour (peak: 5:30 - 7:30 PM)</li>
        <li>Shops close around 7:00 PM</li>
      </ul>

      <h3>8:00 - 10:00 PM: Dinner Time</h3>
      <ul>
        <li>Restaurants serve dinner (first seating ~7:30 PM)</li>
        <li>Parisians typically eat 8:00 - 9:00 PM</li>
        <li>Eiffel Tower sparkles on the hour (after dark)</li>
        <li>Evening strolls along the Seine</li>
        <li>Last kitchen orders typically 10:00 - 10:30 PM</li>
      </ul>

      <h2>🌙 Night: 10:00 PM - 2:00 AM</h2>

      <h3>10:00 PM - Midnight: Nightlife Begins</h3>
      <ul>
        <li>Bars in Le Marais, Oberkampf, Pigalle get lively</li>
        <li>Jazz clubs start their sets (Sunset-Sunside, Duc des Lombards)</li>
        <li>Late-night restaurants in Saint-Germain</li>
        <li>Metro runs until 12:40 AM (2:15 AM Fri-Sat)</li>
      </ul>

      <h3>Midnight - 2:00 AM: The Night Crowd</h3>
      <ul>
        <li>Clubs open (Rex Club, Concrete, Silencio)</li>
        <li>Late kebab and falafel runs (Rue des Rosiers)</li>
        <li>After-theater crowds at Les Halles</li>
        <li>Noctilien (night buses) take over from Metro</li>
      </ul>

      <h2>🌃 Late Night: 2:00 AM - 6:00 AM</h2>

      <ul>
        <li>Clubs peak 2:00 - 4:00 AM</li>
        <li>24-hour spots: Brasserie Wepler (Place de Clichy), Au Pied de Cochon (Les Halles)</li>
        <li>Night buses (Noctilien) every 30-60 minutes</li>
        <li>Les Halles area stays active</li>
        <li>First bakers arrive at boulangeries by 4:00 AM</li>
        <li>Early Metro opens at 5:30 AM — a new day begins</li>
      </ul>

      <h2>What's Open Late in Paris</h2>

      <div className="not-prose my-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <h3 className="font-bold mb-2">🍽️ Late Night Food</h3>
            <ul className="text-sm space-y-1">
              <li>• Au Pied de Cochon (24h) - Les Halles</li>
              <li>• Le Tambour (until 6 AM) - 2e</li>
              <li>• Bouillon Chartier (until 12 AM) - 9e</li>
              <li>• L'As du Fallafel (until 12 AM) - Marais</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <h3 className="font-bold mb-2">🎵 Live Music & Clubs</h3>
            <ul className="text-sm space-y-1">
              <li>• Rex Club - Techno temple</li>
              <li>• New Morning - Jazz/World</li>
              <li>• La Bellevilloise - Eclectic</li>
              <li>• Le Baron - Chic nightclub</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Paris Rush Hours to Avoid</h2>

      <ul>
        <li><strong>Morning rush:</strong> 7:30 - 9:30 AM (especially Lines 1, 4, 13)</li>
        <li><strong>Evening rush:</strong> 5:30 - 7:30 PM</li>
        <li><strong>Lunch crowds:</strong> 12:30 - 1:30 PM at popular spots</li>
        <li><strong>Museum queues:</strong> 10:00 AM - 12:00 PM at major sites</li>
      </ul>

      <div className="not-prose my-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <h3 className="font-bold mb-3">🕐 Daily Paris Rhythm Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div><strong>6-9 AM</strong><br/>Boulangerie, café</div>
          <div><strong>12-2 PM</strong><br/>Sacred lunch</div>
          <div><strong>6-8 PM</strong><br/>Apéro hour</div>
          <div><strong>8-10 PM</strong><br/>Dinner service</div>
        </div>
      </div>
    </article>
  )
}
