/**
 * Dynamic Content Component
 * SEO-optimized city-specific meeting content
 */

import { City } from '@/lib/cities'
import { calculateTimeDifference, formatHour, getLocalHour } from '@/lib/meetingPlanner'

interface Props {
  city1: City
  city2: City
  isLight?: boolean // <-- YENİ EKLENEN
}

export default function DynamicContent({ city1, city2, isLight }: Props) {
  const timeDiff = calculateTimeDifference(city1, city2)
  const diffText = `${timeDiff.hours}${timeDiff.minutes > 0 ? `.5` : ''} hours`

  // Generate time comparison table data
  const timeSlots = [8, 9, 10, 11, 14, 15, 16, 17]
  const comparisons = timeSlots.map(hour => {
    const city2Hour = getLocalHour(city2, hour)
    const isCity1Work = hour >= 9 && hour <= 17
    const isCity2Work = city2Hour >= 9 && city2Hour <= 17
    const status = isCity1Work && isCity2Work 
      ? '✅ Ideal for both'
      : isCity1Work || isCity2Work
        ? '🟡 Possible'
        : '⚠️ Outside hours'
    
    return {
      city1Hour: hour,
      city2Hour,
      status
    }
  })

  // Find best windows
  const bestWindows = comparisons
    .filter(c => c.status === '✅ Ideal for both')
    .map(c => `${formatHour(c.city1Hour)} ${city1.city} (${formatHour(c.city2Hour)} ${city2.city})`)
  
  const avoidTimes = timeDiff.hours >= 12 
    ? `Large time difference makes real-time collaboration challenging. Consider async work methods.`
    : `After ${formatHour(18)} ${city1.city} is generally too late for ${city2.city}`

  // Renkleri isLight durumuna göre ayarla
  const textColor = isLight ? 'text-slate-700' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-900' : 'text-white'
  const cardBg = isLight ? 'bg-slate-100' : 'bg-slate-800'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-700'
  const tableHeaderBorder = isLight ? 'border-slate-300' : 'border-slate-600'

  return (
    <div className={`prose max-w-none ${textColor}`}>
      {/* Time Difference Section */}
      <section className="mb-8">
        <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
          Time Difference: {city1.city} and {city2.city}
        </h2>
        <p className="text-lg">
          <strong className={headingColor}>
            {city1.city} is {diffText} {timeDiff.direction === 'ahead' ? 'ahead of' : 'behind'} {city2.city}.
          </strong>{' '}
          When it's 9:00 AM in {city1.city} ({city1.timezone}), it's{' '}
          {formatHour(getLocalHour(city2, 9))} in {city2.city} ({city2.timezone}).
        </p>
        <p>
          This time difference means that {timeDiff.hours >= 8 
            ? 'scheduling live meetings requires careful planning, as working hours have limited overlap.'
            : 'there are good opportunities for real-time collaboration during overlapping business hours.'}
        </p>
      </section>

      {/* Quick Reference Table */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Quick Reference Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className={`border-b-2 ${tableHeaderBorder}`}>
                <th className={`text-left py-2 px-4 ${headingColor}`}>{city1.city} Time</th>
                <th className={`text-left py-2 px-4 ${headingColor}`}>{city2.city} Time</th>
                <th className={`text-left py-2 px-4 ${headingColor}`}>Best For</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comp, index) => (
                <tr key={index} className={`border-b ${tableBorder}`}>
                  <td className="py-2 px-4">{formatHour(comp.city1Hour)}</td>
                  <td className="py-2 px-4">{formatHour(comp.city2Hour)}</td>
                  <td className="py-2 px-4 text-sm">{comp.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
          Meeting Tips for {city1.city}-{city2.city}
        </h3>
        <ul className="space-y-2">
          {bestWindows.length > 0 && (
            <li>
              <strong className={headingColor}>Best time window:</strong> {bestWindows.slice(0, 2).join(' or ')}
            </li>
          )}
          <li>
            <strong className={headingColor}>Avoid:</strong> {avoidTimes}
          </li>
          {timeDiff.hours >= 10 && (
            <li>
              <strong className={headingColor}>Alternative approach:</strong> Due to the large time difference, consider recording meetings for async review or rotating meeting times to share the inconvenience fairly between teams.
            </li>
          )}
          <li>
            <strong className={headingColor}>Planning ahead:</strong> Send meeting invites with times in both time zones to avoid confusion. Tools like calendar apps automatically convert times.
          </li>
        </ul>
      </section>

      {/* Business Hours Analysis */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Business Hours Comparison</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-semibold mb-2 ${headingColor}`}>{city1.city}</h4>
            <p className="text-sm">
              <strong className={headingColor}>Timezone:</strong> {city1.timezone}<br/>
              <strong className={headingColor}>Business hours:</strong> 9:00 AM - 5:00 PM<br/>
              <strong className={headingColor}>When {city2.city} starts work (9 AM):</strong> {formatHour(getLocalHour(city1, 9))} in {city1.city}
            </p>
          </div>
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-semibold mb-2 ${headingColor}`}>{city2.city}</h4>
            <p className="text-sm">
              <strong className={headingColor}>Timezone:</strong> {city2.timezone}<br/>
              <strong className={headingColor}>Business hours:</strong> 9:00 AM - 5:00 PM<br/>
              <strong className={headingColor}>When {city1.city} starts work (9 AM):</strong> {formatHour(getLocalHour(city2, 9))} in {city2.city}
            </p>
          </div>
        </div>
        <p className={`mt-4 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          {bestWindows.length > 0 
            ? `There is an overlap during business hours, making real-time collaboration feasible. The ${bestWindows.length} hour(s) of overlap typically occur ${bestWindows[0]}.`
            : `There is no overlap during standard business hours (9-5). Teams will need to be flexible with meeting times, with one party joining early or late.`}
        </p>
      </section>

      {/* Common Use Cases */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Common Scenarios</h3>
        <div className="space-y-3">
          <div>
            <h4 className={`font-medium ${headingColor}`}>Daily standups</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {bestWindows.length > 0 
                ? `Best scheduled at ${bestWindows[0]} when both teams are in office.`
                : `Consider async updates via Slack/email instead of live meetings.`}
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Client calls</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Schedule during the {timeDiff.direction === 'ahead' ? 'morning' : 'afternoon'} in {city1.city} 
              for most convenient timing for both parties.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Emergency coordination</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Establish on-call schedules that account for time zones. {city1.city} handles daytime issues, 
              {city2.city} covers overnight (their daytime).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className={`font-medium ${headingColor}`}>Does the time difference account for Daylight Saving Time?</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Yes, the calculations automatically account for DST based on current dates. The time difference 
              between {city1.city} and {city2.city} may vary by 1 hour when DST starts or ends.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>What if I need to add more participants?</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Use the participant dropdowns above to add a third city, or visit our interactive 
              time slider to compare up to 6 cities simultaneously.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Can I share this meeting plan with my team?</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Yes! Use the "Copy Link" button above to share this exact meeting configuration. 
              The URL preserves your city selections so everyone sees the same time comparison.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
