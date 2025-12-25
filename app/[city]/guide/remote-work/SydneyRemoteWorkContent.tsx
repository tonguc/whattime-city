'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyRemoteWorkContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Remote Work Guide: Working with Sydney Teams
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Time zones, communication tips, and collaboration strategies
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Key Challenges</h2>
        <p>
          Sydney's timezone (UTC+10/+11) creates major overlap challenges with US/Europe but works perfectly 
          with Asia. Expect early mornings or late nights if you're coordinating from the West.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌏 Working Across Time Zones</h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From US East Coast</h3>
            <p className="text-sm mb-2"><strong>Time difference:</strong> +16 hours (Sydney ahead)</p>
            <p className="text-sm mb-2"><strong>Overlap window:</strong> 6-8 PM EST = End of Sydney's workday</p>
            <p className="text-sm"><strong>Strategy:</strong> Async communication, detailed handoffs, use Loom videos</p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Europe (London)</h3>
            <p className="text-sm mb-2"><strong>Time difference:</strong> +11 hours (Sydney ahead)</p>
            <p className="text-sm mb-2"><strong>Overlap window:</strong> Very early morning UK = Sydney afternoon</p>
            <p className="text-sm"><strong>Strategy:</strong> One person takes early/late shift, rotate weekly</p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Asia (Singapore, Tokyo)</h3>
            <p className="text-sm mb-2"><strong>Time difference:</strong> +2-3 hours (Sydney ahead)</p>
            <p className="text-sm mb-2"><strong>Overlap window:</strong> Full workday overlap!</p>
            <p className="text-sm"><strong>Strategy:</strong> Real-time collaboration works great</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Async Communication</h3>
            <ul className="text-sm space-y-1">
              <li>• Use Loom for video updates</li>
              <li>• Write detailed Slack messages</li>
              <li>• Document everything in Notion/Confluence</li>
              <li>• Set clear deadlines with timezones</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Meeting Strategies</h3>
            <ul className="text-sm space-y-1">
              <li>• Rotate meeting times (share pain!)</li>
              <li>• Record all meetings</li>
              <li>• Use our <Link href="/tools/meeting-planner/" className={linkColor}>Meeting Planner</Link></li>
              <li>• Bi-weekly is better than weekly</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Communication Tools</h3>
            <ul className="text-sm space-y-1">
              <li>• Slack with timezone display</li>
              <li>• Calendly with multiple timezones</li>
              <li>• World Clock widget in Slack</li>
              <li>• Google Calendar timezone overlay</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Sydney Work Culture</h3>
            <ul className="text-sm space-y-1">
              <li>• 9-5 PM strict (work-life balance!)</li>
              <li>• Friday arvo drinks (don't schedule 4 PM)</li>
              <li>• Direct communication style</li>
              <li>• Less formal than US</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>📞</span>
            <span className={`font-medium ${headingColor}`}>Best Time to Call</span>
          </Link>
          <Link href="/tools/meeting-planner/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>📅</span>
            <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
