'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisBusinessHoursContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Paris Business Hours: Complete Guide to Shopping, Banks & Restaurants</h1>
      
      <p className="lead">
        Understanding Paris business hours is essential for any visitor or professional. The French 
        approach to work-life balance means specific rhythms that differ from other major cities.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">⚡ Quick Reference: Paris Business Hours</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>🏢 Offices:</strong> 9:00 AM - 6:00 PM (Mon-Fri)<br/>
            <strong>🏦 Banks:</strong> 9:00 AM - 5:00 PM (Mon-Fri)<br/>
            <strong>🛍️ Shops:</strong> 10:00 AM - 7:00 PM (Mon-Sat)
          </div>
          <div>
            <strong>🍽️ Restaurants:</strong> 12-2 PM, 7-10:30 PM<br/>
            <strong>☕ Cafés:</strong> 7:00 AM - 11:00 PM<br/>
            <strong>🏛️ Museums:</strong> 9:30 AM - 6:00 PM (closed Tue)
          </div>
        </div>
      </div>

      <h2>Shop & Retail Hours</h2>
      
      <h3>Department Stores & Chain Retailers</h3>
      <ul>
        <li><strong>Galeries Lafayette / Printemps:</strong> 10:00 AM - 8:00 PM (Mon-Sat), Sunday 11 AM - 7 PM</li>
        <li><strong>BHV Marais:</strong> 10:00 AM - 8:00 PM (Mon-Sat), Sunday 11 AM - 7 PM</li>
        <li><strong>Le Bon Marché:</strong> 10:00 AM - 8:00 PM (Mon-Sat), closed Sundays</li>
        <li><strong>Champs-Élysées shops:</strong> 10:00 AM - 10:00 PM daily (tourist exception)</li>
      </ul>

      <h3>Small Local Shops ("Commerces de Proximité")</h3>
      <p>
        Local boutiques typically operate 10:00 AM - 7:00 PM, but many still observe the traditional 
        lunch break from 12:30 PM to 2:00 PM. Always check before visiting small specialty shops 
        around lunchtime.
      </p>

      <h3>Sunday Shopping</h3>
      <p>
        France has strict Sunday trading laws. Most shops are closed, with exceptions:
      </p>
      <ul>
        <li><strong>Tourist zones:</strong> Champs-Élysées, Le Marais, Montmartre, Saint-Germain</li>
        <li><strong>Supermarkets:</strong> Often open until 1:00 PM only</li>
        <li><strong>Boulangeries:</strong> Open morning (one day off per week, often Monday)</li>
      </ul>

      <h2>Bank Hours in Paris</h2>
      
      <div className="not-prose my-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <h3 className="font-bold mb-2">French Bank Hours</h3>
        <p className="text-sm mb-2">
          <strong>Standard:</strong> Monday-Friday 9:00 AM - 5:00 PM (some close 12-2 PM)<br/>
          <strong>Saturday:</strong> Some branches 9:00 AM - 12:30 PM (not all)
        </p>
        <p className="text-xs text-slate-500">Major banks: BNP Paribas, Société Générale, Crédit Agricole, LCL</p>
      </div>

      <p>
        Many older bank branches still close for lunch. Main branches in business districts often 
        stay open continuously. ATMs (distributeurs) are available 24/7 throughout Paris.
      </p>

      <h2>Restaurant & Café Hours</h2>
      
      <h3>Restaurants</h3>
      <ul>
        <li><strong>Lunch service:</strong> 12:00 PM - 2:00 PM (kitchen closes at 2 PM sharp!)</li>
        <li><strong>Dinner service:</strong> 7:00 PM - 10:30 PM (arrive by 9:30 PM to be seated)</li>
        <li><strong>Brasseries:</strong> Often continuous service 12:00 PM - 11:00 PM</li>
      </ul>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
        <strong>⚠️ Important:</strong> Unlike some countries, most Paris restaurants do NOT serve 
        between lunch and dinner (2-7 PM). Plan accordingly!
      </div>

      <h3>Cafés</h3>
      <p>
        Parisian cafés are more flexible: typically 7:00 AM - 11:00 PM. You can usually get coffee, 
        croissants, and simple food (croque-monsieur, salads) throughout the day. Terrace seating 
        is weather-dependent.
      </p>

      <h2>Museum Hours</h2>
      
      <ul>
        <li><strong>The Louvre:</strong> 9:00 AM - 6:00 PM (Wed & Fri until 9:45 PM), closed Tuesdays</li>
        <li><strong>Musée d'Orsay:</strong> 9:30 AM - 6:00 PM (Thu until 9:45 PM), closed Mondays</li>
        <li><strong>Centre Pompidou:</strong> 11:00 AM - 9:00 PM, closed Tuesdays</li>
        <li><strong>Musée Rodin:</strong> 10:00 AM - 6:30 PM, closed Mondays</li>
      </ul>

      <p>
        Most Paris museums are closed on either Monday or Tuesday. <strong>First Sunday of each 
        month</strong> offers free entry to many national museums.
      </p>

      <h2>Pharmacy Hours</h2>
      
      <p>
        Regular pharmacies: 9:00 AM - 7:00 PM (Mon-Sat). Each arrondissement has a "pharmacie de 
        garde" for nights and Sundays. Look for the green cross sign.
      </p>

      <p><strong>24-hour pharmacies:</strong></p>
      <ul>
        <li>Pharmacie des Champs-Élysées (84 Ave Champs-Élysées, 8e)</li>
        <li>Grande Pharmacie de la Nation (13 Place de la Nation, 11e)</li>
      </ul>

      <h2>Post Office (La Poste)</h2>
      
      <p>
        Standard hours: 9:00 AM - 6:00 PM (Mon-Fri), Saturday 9:00 AM - 12:00 PM.
      </p>
      <p>
        <strong>24-hour post office:</strong> 52 Rue du Louvre, 1er (near Les Halles)
      </p>

      <h2>Supermarket Hours</h2>
      
      <ul>
        <li><strong>Carrefour City / Franprix:</strong> 8:00 AM - 10:00 PM (Mon-Sat)</li>
        <li><strong>Monoprix:</strong> 9:00 AM - 9:00 PM (Mon-Sat)</li>
        <li><strong>Sunday:</strong> Most open 9:00 AM - 1:00 PM only</li>
      </ul>

      <h2>August: The Exception Month</h2>
      
      <p>
        Be warned: August sees many local businesses close for annual vacation. Small shops, 
        restaurants, and even some services may close for 2-4 weeks. Tourist areas remain open, 
        but authentic local spots often take "congés annuels."
      </p>

      <div className="not-prose my-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <h3 className="font-bold mb-3">🗓️ Key Dates When Many Shops Close</h3>
        <ul className="text-sm space-y-1">
          <li>• <strong>August 1-31:</strong> Many local shops closed for vacation</li>
          <li>• <strong>Sundays:</strong> Most non-tourist shops closed</li>
          <li>• <strong>Public holidays:</strong> Banks, post offices, government closed</li>
          <li>• <strong>May 1 (Labour Day):</strong> Almost everything closed</li>
        </ul>
      </div>

      <h2>Tips for Navigating Paris Business Hours</h2>
      
      <ol>
        <li><strong>Never assume lunchtime availability</strong> - Many places close 12-2 PM</li>
        <li><strong>Check museum days</strong> - Most close Monday OR Tuesday</li>
        <li><strong>Book dinner early</strong> - Arrive by 7:30 PM for first seating</li>
        <li><strong>Sunday = rest day</strong> - Plan tourist areas only</li>
        <li><strong>Avoid August</strong> - for any local business dealings</li>
      </ol>
    </article>
  )
}
