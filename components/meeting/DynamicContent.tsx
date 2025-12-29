/**
 * Dynamic Content Component
 * SEO-optimized multi-city meeting content
 * Supports 2+ cities dynamically
 */

import { City } from '@/lib/cities'
import { calculateTimeDifference, formatHour, getLocalHour } from '@/lib/meetingPlanner'

interface Props {
  cities: City[] // Changed from city1/city2 to cities array
  isLight?: boolean
  overlapCount?: number // SSR için overlap count
}

export default function DynamicContent({ cities, isLight, overlapCount }: Props) {
  if (cities.length < 2) return null
  
  const firstCity = cities[0]
  const secondCity = cities[1]
  const timeDiff = calculateTimeDifference(firstCity, secondCity)
  const diffText = `${timeDiff.hours}${timeDiff.minutes > 0 ? `.5` : ''} hours`

  // Generate time comparison table data - now supports N cities
  const timeSlots = [8, 9, 10, 11, 14, 15, 16, 17]
  const comparisons = timeSlots.map(hour => {
    // For each time slot, get the local time in ALL cities
    const cityTimes = cities.map(city => ({
      city,
      localHour: getLocalHour(city, hour),
      isWorkHour: hour >= 9 && hour <= 17
    }))
    
    // Check if all cities are in working hours
    const allInWorkHours = cityTimes.every(ct => {
      const adjustedHour = getLocalHour(ct.city, hour)
      return adjustedHour >= 9 && adjustedHour <= 17
    })
    
    return {
      baseHour: hour,
      cityTimes,
      allInWorkHours
    }
  })

  // Find best windows
  const bestWindows = comparisons
    .filter(c => c.allInWorkHours)
    .map(c => {
      const times = c.cityTimes.map(ct => 
        `${formatHour(getLocalHour(ct.city, c.baseHour))} ${ct.city.city}`
      ).join(', ')
      return times
    })
  
  const avoidTimes = timeDiff.hours >= 12 
    ? `Large time difference makes real-time collaboration challenging. Consider async work methods.`
    : `After ${formatHour(18)} ${firstCity.city} is generally too late for ${secondCity.city}`

  // Renkleri isLight durumuna göre ayarla
  const textColor = isLight ? 'text-slate-700' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-900' : 'text-white'
  const cardBg = isLight ? 'bg-slate-100' : 'bg-slate-800'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-700'
  const tableHeaderBorder = isLight ? 'border-slate-300' : 'border-slate-600'

  return (
    <div className={`prose max-w-none ${textColor}`}>
      {/* SSR Result for SEO - Hidden but crawlable */}
      {overlapCount !== undefined && (
        <div 
          className="sr-only" 
          itemProp="result"
          itemScope 
          itemType="https://schema.org/Thing"
        >
          <meta itemProp="name" content="Business Hours Overlap" />
          <span itemProp="value">
            {overlapCount > 0 
              ? `${overlapCount} hours of business overlap found between ${firstCity.city} and ${secondCity.city}`
              : `No business hours overlap between ${firstCity.city} and ${secondCity.city}`
            }
          </span>
        </div>
      )}

      {/* Time Difference Section */}
      <section className="mb-8">
        <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
          {cities.length === 2 
            ? `Time Difference: ${firstCity.city} and ${secondCity.city}`
            : `Time Comparison Across ${cities.length} Cities`
          }
        </h2>
        <p className="text-lg">
          <strong className={headingColor}>
            {cities.length === 2 
              ? `${firstCity.city} is ${diffText} ${timeDiff.direction === 'ahead' ? 'ahead of' : 'behind'} ${secondCity.city}.`
              : `Time spread across ${cities.length} cities ranging from ${cities.map(c => c.city).join(', ')}.`
            }
          </strong>{' '}
          {cities.length === 2 && (
            <>
              When it's 9:00 AM in {firstCity.city} ({firstCity.timezone}), it's{' '}
              {formatHour(getLocalHour(secondCity, 9))} in {secondCity.city} ({secondCity.timezone}).
            </>
          )}
        </p>
        <p>
          {cities.length === 2 
            ? (timeDiff.hours >= 8 
                ? 'This time difference means that scheduling live meetings requires careful planning, as working hours have limited overlap.'
                : 'There are good opportunities for real-time collaboration during overlapping business hours.')
            : `Coordinating across ${cities.length} time zones requires finding overlap windows where all participants are available during working hours.`
          }
        </p>
      </section>

      {/* Quick Reference Table - Now supports N cities */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Quick Reference Table</h3>
        <div className="overflow-x-auto">
          <table 
            className="min-w-full border-collapse" 
            role="table"
            aria-label={`Time comparison table for ${cities.map(c => c.city).join(', ')}`}
          >
            <thead>
              <tr className={`border-b-2 ${tableHeaderBorder}`}>
                <th scope="col" className={`text-left py-2 px-4 ${headingColor}`}>
                  {firstCity.city} Time
                </th>
                {cities.slice(1).map((city, idx) => (
                  <th key={idx} scope="col" className={`text-left py-2 px-4 ${headingColor}`}>
                    {city.city} Time
                  </th>
                ))}
                <th scope="col" className={`text-left py-2 px-4 ${headingColor}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comp, index) => (
                <tr key={index} className={`border-b ${tableBorder}`}>
                  <td className="py-2 px-4 font-medium">{formatHour(comp.baseHour)}</td>
                  {comp.cityTimes.slice(1).map((ct, idx) => (
                    <td key={idx} className="py-2 px-4">
                      {formatHour(getLocalHour(ct.city, comp.baseHour))}
                    </td>
                  ))}
                  <td className="py-2 px-4 text-sm">
                    {comp.allInWorkHours 
                      ? '✅ Ideal for all' 
                      : comp.cityTimes.some(ct => {
                          const h = getLocalHour(ct.city, comp.baseHour)
                          return h >= 9 && h <= 17
                        })
                        ? '🟡 Partial overlap'
                        : '⚠️ Outside hours'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
          Meeting Tips for {cities.map(c => c.city).join('-')}
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
            <strong className={headingColor}>Planning ahead:</strong> Send meeting invites with times in all time zones to avoid confusion. Tools like calendar apps automatically convert times.
          </li>
        </ul>
      </section>

      {/* Business Hours Analysis - Show all cities */}
      <section className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Business Hours Comparison</h3>
        <div className={`grid ${cities.length === 2 ? 'md:grid-cols-2' : cities.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-4`}>
          {cities.map((city, idx) => (
            <div key={idx} className={`p-4 rounded-lg ${cardBg}`}>
              <h4 className={`font-semibold mb-2 ${headingColor}`}>{city.city}</h4>
              <p className="text-sm">
                <strong className={headingColor}>Timezone:</strong> {city.timezone}<br/>
                <strong className={headingColor}>Business hours:</strong> 9:00 AM - 5:00 PM<br/>
                {idx > 0 && (
                  <>
                    <strong className={headingColor}>When {cities[0].city} starts work (9 AM):</strong> {formatHour(getLocalHour(city, 9))} in {city.city}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <p className={`mt-4 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          {bestWindows.length > 0 
            ? `There is an overlap during business hours, making real-time collaboration feasible across all ${cities.length} cities. The ${bestWindows.length} hour(s) of overlap typically occur ${bestWindows[0]}.`
            : `There is limited or no overlap during standard business hours (9-5) across all ${cities.length} cities. Teams will need to be flexible with meeting times.`}
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
                ? `Best scheduled at ${bestWindows[0]} when all teams are in office.`
                : `Consider async updates via Slack/email instead of live meetings.`}
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Client calls</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Schedule during overlapping work hours across {cities.length} time zones 
              for most convenient timing for all parties.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Emergency coordination</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Establish on-call schedules that account for all {cities.length} time zones. 
              Teams can rotate coverage to provide 24/7 support.
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
              between cities may vary by 1 hour when DST starts or ends in different regions.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>What if I need to add more participants?</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Use the "+ Add City" button in the time slider above to compare up to 6 cities simultaneously.
            </p>
          </div>
          <div>
            <h4 className={`font-medium ${headingColor}`}>Can I share this meeting plan with my team?</h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Yes! The URL preserves your city selections so everyone sees the same time comparison when you share the link.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
