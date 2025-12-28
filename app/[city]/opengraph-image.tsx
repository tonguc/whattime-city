import { ImageResponse } from 'next/og'
import { getCityBySlug } from '@/lib/cities'

export const runtime = 'nodejs'
export const alt = 'City Time'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return new ImageResponse(
      (
        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: 'white', fontSize: 48 }}>City Not Found</div>
        </div>
      ),
      { ...size }
    )
  }

  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone: city.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  
  const dateStr = now.toLocaleDateString('en-US', {
    timeZone: city.timezone,
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })

  const hour = parseInt(now.toLocaleTimeString('en-US', {
    timeZone: city.timezone,
    hour: 'numeric',
    hour12: false,
  }))
  
  const isNight = hour < 6 || hour >= 19
  const isDawn = hour >= 6 && hour < 8
  const isDusk = hour >= 17 && hour < 19
  
  let bgGradient = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)'
  let accentColor = '#fbbf24'
  let timeIcon = '☀️'
  
  if (isNight) {
    bgGradient = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)'
    accentColor = '#22d3ee'
    timeIcon = '🌙'
  } else if (isDawn) {
    bgGradient = 'linear-gradient(135deg, #1e293b 0%, #9a3412 50%, #f59e0b 100%)'
    accentColor = '#fb923c'
    timeIcon = '🌅'
  } else if (isDusk) {
    bgGradient = 'linear-gradient(135deg, #4c1d95 0%, #be185d 50%, #f59e0b 100%)'
    accentColor = '#f472b6'
    timeIcon = '🌆'
  }

  const offset = now.toLocaleString('en-US', {
    timeZone: city.timezone,
    timeZoneName: 'shortOffset',
  }).split(' ').pop() || ''

  return new ImageResponse(
    (
      <div
        style={{
          background: bgGradient,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: 200, background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, borderRadius: 250, background: 'rgba(255,255,255,0.03)' }} />

        {/* Country */}
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 28, textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          {city.country}
        </div>

        {/* City Name */}
        <div style={{ color: 'white', fontSize: 72, fontWeight: 700, marginBottom: 24 }}>
          {city.city}
        </div>

        {/* Time Display */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontSize: 48, marginRight: 20 }}>{timeIcon}</span>
          <span style={{ color: accentColor, fontSize: 96, fontWeight: 700 }}>{timeStr}</span>
        </div>

        {/* Date and Timezone */}
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 28, display: 'flex' }}>
          <span>{dateStr}</span>
          <span style={{ margin: '0 16px' }}>•</span>
          <span>{offset}</span>
        </div>

        {/* Footer branding */}
        <div style={{ position: 'absolute', bottom: 40, color: 'rgba(255,255,255,0.6)', fontSize: 24 }}>
          🌍 whattime.city
        </div>
      </div>
    ),
    { ...size }
  )
}
