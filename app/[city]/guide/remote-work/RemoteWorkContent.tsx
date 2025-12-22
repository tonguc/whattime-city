'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function RemoteWorkContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = nycTime.getHours()
  const timeStr = nycTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Determine NYC work status
  const isWorkHours = currentHour >= 9 && currentHour < 18
  const isEarlyMorning = currentHour >= 6 && currentHour < 9
  const isEvening = currentHour >= 18 && currentHour < 22
  
  const timeZoneOverlaps = [
    { location: 'London', offset: '+5h', nycMorning: '2 PM - 6 PM', nycAfternoon: '6 PM - 11 PM', bestWindow: '2 PM - 5 PM your time', quality: 'Excellent' },
    { location: 'Berlin/Paris', offset: '+6h', nycMorning: '3 PM - 7 PM', nycAfternoon: '7 PM - 12 AM', bestWindow: '3 PM - 6 PM your time', quality: 'Good' },
    { location: 'Dubai', offset: '+9h', nycMorning: '6 PM - 10 PM', nycAfternoon: '10 PM - 3 AM', bestWindow: '6 PM - 8 PM your time', quality: 'Limited' },
    { location: 'Mumbai', offset: '+10.5h', nycMorning: '7:30 PM - 11:30 PM', nycAfternoon: '11:30 PM - 4:30 AM', bestWindow: '7:30 PM - 9 PM your time', quality: 'Challenging' },
    { location: 'Singapore', offset: '+13h', nycMorning: '10 PM - 2 AM', nycAfternoon: '2 AM - 7 AM', bestWindow: '9 PM - 10 PM your time', quality: 'Difficult' },
    { location: 'Tokyo', offset: '+14h', nycMorning: '11 PM - 3 AM', nycAfternoon: '3 AM - 8 AM', bestWindow: '8 AM - 10 AM your time', quality: 'Difficult' },
    { location: 'Sydney', offset: '+16h', nycMorning: '1 AM - 5 AM', nycAfternoon: '5 AM - 10 AM', bestWindow: '7 AM - 9 AM your time', quality: 'Very Difficult' },
    { location: 'Los Angeles', offset: '-3h', nycMorning: '6 AM - 10 AM', nycAfternoon: '10 AM - 3 PM', bestWindow: '9 AM - 2 PM your time', quality: 'Excellent' },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Working with New York Teams
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Time zone strategies for remote collaboration with NYC-based colleagues
        </p>
        
        {/* Live Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isWorkHours ? 'bg-green-500' : isEarlyMorning || isEvening ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            NYC: {timeStr} — {isWorkHours ? 'Core work hours' : isEarlyMorning ? 'Early morning' : isEvening ? 'Evening' : 'Outside work hours'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          New York operates on <strong>Eastern Time (ET)</strong>, with core business hours from{' '}
          <strong>9 AM to 6 PM</strong>. For Europeans, aim for late afternoon meetings. For Asia-Pacific, 
          early mornings or late evenings work best. The key is finding a 2-3 hour overlap window 
          and protecting it for synchronous communication.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          If you're working remotely with a New York-based team — whether you're in London, Tokyo, 
          or anywhere in between — time zones are probably your biggest daily challenge. I've been 
          there. The 3 AM calls, the "let's find a time that works for everyone" emails that never 
          seem to work for anyone.
        </p>
        <p>
          Here's what I've learned about making remote collaboration with NYC actually work, 
          without destroying your sleep schedule or missing every important decision.
        </p>
      </section>
      
      {/* Time Zone Overlap Matrix */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 NYC Overlap Hours by Location
        </h2>
        
        <p className="mb-4">
          This table shows when NYC's 9 AM - 6 PM workday falls in your local time:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Your Location</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>NYC 9AM-12PM</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>NYC 12PM-6PM</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Best Window</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {timeZoneOverlaps.map((tz, i) => (
                <tr key={tz.location} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{tz.location}</td>
                  <td className="p-3">{tz.nycMorning}</td>
                  <td className="p-3">{tz.nycAfternoon}</td>
                  <td className="p-3">{tz.bestWindow}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      tz.quality === 'Excellent' ? 'bg-green-100 text-green-700' :
                      tz.quality === 'Good' ? 'bg-blue-100 text-blue-700' :
                      tz.quality === 'Limited' ? 'bg-yellow-100 text-yellow-700' :
                      tz.quality === 'Challenging' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tz.quality}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className={`mt-3 text-sm ${mutedColor}`}>
          Need exact calculations? Use our{' '}
          <Link href="/tools/meeting-planner/" className={linkColor}>Meeting Planner</Link>.
        </p>
      </section>
      
      {/* Strategies by Region */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📍 Strategies by Region
        </h2>
        
        <div className="space-y-4">
          {/* Europe */}
          <div className={`p-5 rounded-xl border ${isLight ? 'border-blue-200 bg-blue-50' : 'border-blue-800 bg-blue-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🇪🇺 From Europe (UK, EU)</h3>
            <p className="text-sm mb-3">
              You're in the sweet spot. NYC's morning overlaps with your afternoon, giving you 
              a solid 4-5 hour window for real-time collaboration.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Recommended schedule:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Morning: Focus time (NYC is sleeping)</li>
                <li>• 2 PM - 6 PM: Overlap window for meetings & Slack</li>
                <li>• After 6 PM: Wrap up, async handoffs</li>
              </ul>
            </div>
          </div>
          
          {/* Middle East */}
          <div className={`p-5 rounded-xl border ${isLight ? 'border-yellow-200 bg-yellow-50' : 'border-yellow-800 bg-yellow-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🇦🇪 From Middle East (Dubai, Israel)</h3>
            <p className="text-sm mb-3">
              Trickier, but workable. NYC's day starts when yours is ending. You'll need to 
              protect early evening hours for sync time.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Recommended schedule:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Morning/afternoon: Deep work, async communication</li>
                <li>• 5 PM - 8 PM: Overlap window (NYC 9 AM - 12 PM)</li>
                <li>• Late evening: Check Slack, respond to urgent items</li>
              </ul>
            </div>
          </div>
          
          {/* Asia */}
          <div className={`p-5 rounded-xl border ${isLight ? 'border-orange-200 bg-orange-50' : 'border-orange-800 bg-orange-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🇯🇵 From Asia (Tokyo, Singapore, India)</h3>
            <p className="text-sm mb-3">
              This is the hardest time zone gap. NYC's workday is your night. You'll need to 
              embrace async-first workflows and pick your sync battles carefully.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Recommended schedule:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• 7 AM - 9 AM: Catch up on NYC's previous day</li>
                <li>• Daytime: Independent work, async updates</li>
                <li>• 8 PM - 10 PM: Limited sync window (if needed)</li>
                <li>• Use Loom videos instead of live meetings when possible</li>
              </ul>
            </div>
          </div>
          
          {/* West Coast */}
          <div className={`p-5 rounded-xl border ${isLight ? 'border-green-200 bg-green-50' : 'border-green-800 bg-green-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🇺🇸 From US West Coast</h3>
            <p className="text-sm mb-3">
              Only 3 hours difference — practically nothing. You have massive overlap, but 
              watch out for the early meeting trap.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Recommended schedule:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Push meetings to 10 AM+ your time (1 PM+ NYC)</li>
                <li>• 9 AM - 3 PM: Full overlap window</li>
                <li>• Afternoon: NYC wraps up, you have focus time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Async Communication */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💬 Making Async Work Actually Work
        </h2>
        
        <p className="mb-4">
          The secret to remote work across time zones isn't finding more overlap — it's 
          getting really good at async communication. Here's what that looks like in practice:
        </p>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Write like they'll read it tomorrow</h3>
            <p className="text-sm mt-1">
              Because they will. Include all context in your message. Don't say "let's discuss" — 
              say what you need and give a deadline. Assume they can't ask clarifying questions 
              in real time.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Use Loom instead of meetings</h3>
            <p className="text-sm mt-1">
              A 5-minute video explaining your work can replace a 30-minute meeting. Record 
              yourself walking through designs, code, or proposals. They watch on their 
              schedule, you save an awkward timezone meeting.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Set clear response time expectations</h3>
            <p className="text-sm mt-1">
              "Reply within 24 hours" is reasonable for async teams. "Reply immediately" is not. 
              Define what's urgent (and deserves a text/call) vs. what can wait for the next 
              overlap window.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Document everything</h3>
            <p className="text-sm mt-1">
              Decisions made in meetings should be written down immediately. If it's not 
              documented, it didn't happen — especially when half the team was asleep.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meeting Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 When You Do Need Real Meetings
        </h2>
        
        <p className="mb-4">
          Some things genuinely need live discussion. Here's how to make cross-timezone 
          meetings less painful:
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-3 ${headingColor}`}>Meeting Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Rotate the pain.</strong> Don't make the same people take the 6 AM or 10 PM call every time. Share the burden.</li>
            <li><strong>Make it shorter.</strong> A 45-minute meeting at an inconvenient time hurts. A 25-minute meeting is survivable.</li>
            <li><strong>Record everything.</strong> Someone couldn't make it? They watch the recording. No guilt.</li>
            <li><strong>Send the agenda in advance.</strong> 24 hours minimum. Let people prepare async so the meeting is efficient.</li>
            <li><strong>Start with decisions.</strong> Don't save the important stuff for the end when everyone's tired.</li>
          </ul>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-l-4 border-amber-500 ${cardBg}`}>
          <p className="text-sm">
            <strong>Pro tip:</strong> Block your overlap hours on your calendar. Label them 
            "NYC Sync Window" or similar. This protects your time for actual collaboration 
            instead of random meetings.
          </p>
        </div>
      </section>
      
      {/* Tools */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🛠️ Useful Tools
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/tools/meeting-planner/"
            className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
              isLight ? 'border-amber-200 bg-amber-50 hover:border-amber-400' : 'border-amber-800 bg-amber-900/20 hover:border-amber-600'
            }`}
          >
            <h3 className={`font-medium ${headingColor}`}>📅 Meeting Planner</h3>
            <p className={`text-sm mt-1 ${mutedColor}`}>
              Find the best meeting time across multiple time zones
            </p>
          </Link>
          
          <Link
            href="/tools/converter/"
            className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
              isLight ? 'border-blue-200 bg-blue-50 hover:border-blue-400' : 'border-blue-800 bg-blue-900/20 hover:border-blue-600'
            }`}
          >
            <h3 className={`font-medium ${headingColor}`}>🔄 Time Converter</h3>
            <p className={`text-sm mt-1 ${mutedColor}`}>
              Quick conversions between any time zones
            </p>
          </Link>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What's the best time to schedule a meeting with New York?
            </h3>
            <p className="text-sm">
              From Europe: 2-5 PM your time (9 AM - 12 PM NYC). From Asia: Consider 8-10 PM 
              your time or 7-9 AM your time. From West Coast US: 10 AM - 2 PM your time gives 
              you the most flexibility.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              How do I handle urgent issues when NYC is asleep?
            </h3>
            <p className="text-sm">
              Define "urgent" clearly as a team (hint: most things aren't). For true emergencies, 
              have a phone tree or on-call rotation. For everything else, document the issue 
              thoroughly and flag it for their morning.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Should I adjust my schedule to match NYC hours?
            </h3>
            <p className="text-sm">
              Not fully — that's a recipe for burnout. Find a sustainable overlap window (2-4 hours) 
              and protect it. The rest of your day should work for your life and timezone. 
              If your company expects you to work US hours from Asia, that's a company problem.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Does NYC observe Daylight Saving Time?
            </h3>
            <p className="text-sm">
              Yes. Clocks spring forward in March (EDT, UTC-4) and fall back in November (EST, UTC-5). 
              This can temporarily change your overlap by an hour if your country has different 
              DST dates — or doesn't observe it at all.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/call-times/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📞</span>
            <span>Best Time to Call NYC</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/time-difference/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌐</span>
            <span>NYC Time Difference</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🎒</span>
            <span>Digital Nomad Guide</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📖</span>
            <span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2025. Time differences may shift slightly during DST transitions.
      </p>
    </div>
  )
}
