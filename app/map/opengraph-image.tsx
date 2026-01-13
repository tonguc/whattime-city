import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
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
        <div style={{ position: 'absolute', bottom: 32, color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>
          whattime.city - Live World Clock Map
        </div>
      </div>
    ),
    { ...size }
  )
}
