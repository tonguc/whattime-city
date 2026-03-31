import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'World Time Map'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const cities = [
    { city: 'New York', timezone: 'America/New_York', x: 180, y: 280 },
    { city: 'London', timezone: 'Europe/London', x: 520, y: 220 },
    { city: 'Dubai', timezone: 'Asia/Dubai', x: 720, y: 320 },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', x: 1000, y: 260 },
    { city: 'Sydney', timezone: 'Australia/Sydney', x: 1020, y: 480 },
  ]

  const now = new Date()
  const utcH = now.getUTCHours()
  const utcM = now.getUTCMinutes()

  // UTC offsets in minutes — avoids Intl timezone lookup on cold edge start
  const UTC_OFFSETS: Record<string, number> = {
    'America/New_York': -300, // EST (DST not factored, close enough for OG)
    'Europe/London': 0,
    'Asia/Dubai': 240,
    'Asia/Tokyo': 540,
    'Australia/Sydney': 600,
  }

  const cityTimes = cities.map(c => {
    const offset = UTC_OFFSETS[c.timezone] ?? 0
    const totalMin = (utcH * 60 + utcM + offset + 1440) % 1440
    const h = Math.floor(totalMin / 60)
    const m = totalMin % 60
    const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    return { ...c, time }
  })

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 64, marginRight: 16 }}>🗺️</span>
          <span style={{ color: 'white', fontSize: 56, fontWeight: 700 }}>World Time Map</span>
        </div>

        {/* Map representation with cities */}
        <div
          style={{
            display: 'flex',
            width: 1100,
            height: 350,
            background: 'rgba(30, 58, 95, 0.5)',
            borderRadius: 24,
            position: 'relative',
          }}
        >
          {cityTimes.map((c) => (
            <div
              key={c.city}
              style={{
                position: 'absolute',
                left: c.x - 50,
                top: c.y - 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  background: 'rgba(34, 211, 238, 0.9)',
                  padding: '8px 16px',
                  borderRadius: 8,
                  marginBottom: 4,
                }}
              >
                <span style={{ color: 'white', fontSize: 28, fontWeight: 700 }}>{c.time}</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>{c.city}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', position: 'absolute', bottom: 32, color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>
          whattime.city - Live World Clock Map
        </div>
      </div>
    ),
    { ...size }
  )
}
