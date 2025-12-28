import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'whattime.city - World Clock'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const cities = [
    { city: 'New York', timezone: 'America/New_York', flag: '🇺🇸' },
    { city: 'London', timezone: 'Europe/London', flag: '🇬🇧' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
    { city: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺' },
  ]

  const now = new Date()
  
  const cityTimes = cities.map(c => ({
    ...c,
    time: now.toLocaleTimeString('en-US', {
      timeZone: c.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }))

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, borderRadius: 150, background: 'rgba(59, 130, 246, 0.1)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: 200, background: 'rgba(34, 211, 238, 0.08)' }} />

        {/* Logo/Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 64, marginRight: 16 }}>🌍</span>
          <span style={{ color: 'white', fontSize: 64, fontWeight: 700 }}>whattime.city</span>
        </div>

        {/* Tagline */}
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 32, marginBottom: 48 }}>
          World Clock • Time Zones • Sunrise & Sunset
        </div>

        {/* City times grid */}
        <div style={{ display: 'flex' }}>
          {cityTimes.map((c, i) => (
            <div
              key={c.city}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '24px 32px',
                marginLeft: i > 0 ? 24 : 0,
              }}
            >
              <span style={{ fontSize: 32, marginBottom: 8 }}>{c.flag}</span>
              <span style={{ color: 'white', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{c.city}</span>
              <span style={{ color: '#22d3ee', fontSize: 36, fontWeight: 700 }}>{c.time}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 32, color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>
          Free World Clock for 168+ Cities
        </div>
      </div>
    ),
    { ...size }
  )
}
