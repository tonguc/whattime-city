import { ImageResponse } from 'next/og'

// ✅ DÜZELTİLDİ: Vercel'in limitini aşmamak için Node.js kullanıyoruz.
// (Eski 'edge' satırı silindi)
export const runtime = 'nodejs'

export const alt = 'Time Zones by Country'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const continents = [
    { name: 'Americas', emoji: '🌎', count: 16 },
    { name: 'Europe', emoji: '🌍', count: 32 },
    { name: 'Asia', emoji: '🌏', count: 22 },
    { name: 'Africa', emoji: '🌍', count: 8 },
    { name: 'Oceania', emoji: '🌏', count: 2 },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
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
        <div style={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, borderRadius: 150, background: 'rgba(34, 211, 238, 0.1)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: 200, background: 'rgba(59, 130, 246, 0.08)' }} />

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 64, marginRight: 16 }}>🌐</span>
          <span style={{ color: 'white', fontSize: 56, fontWeight: 700 }}>Time Zones by Country</span>
        </div>

        {/* Subtitle */}
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 28, marginBottom: 48 }}>
          80+ Countries • All Continents • Live Time Data
        </div>

        {/* Continents grid */}
        <div style={{ display: 'flex', gap: 24 }}>
          {continents.map((c) => (
            <div
              key={c.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '20px 28px',
              }}
            >
              <span style={{ fontSize: 36, marginBottom: 8 }}>{c.emoji}</span>
              <span style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>{c.name}</span>
              <span style={{ color: '#22d3ee', fontSize: 18 }}>{c.count} countries</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 32, color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>
          whattime.city
        </div>
      </div>
    ),
    { ...size }
  )
}