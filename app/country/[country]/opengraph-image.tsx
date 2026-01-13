import { ImageResponse } from 'next/og'
import { getCountryBySlug } from '@/lib/cities'

export const runtime = 'nodejs'
export const alt = 'Country Time Zones'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage({ params }: { params: { country: string } }) {
  const country = getCountryBySlug(params.country)
  
  if (!country) {
    return new ImageResponse(
      (
        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: 'white', fontSize: 48 }}>Country Not Found</div>
        </div>
      ),
      { ...size }
    )
  }

  // Country flag emoji from country code
  const flagEmoji = country.code
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join('')

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e293b 100%)',
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
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: 200, background: 'rgba(59, 130, 246, 0.1)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, borderRadius: 250, background: 'rgba(34, 211, 238, 0.05)' }} />

        {/* Flag */}
        <div style={{ fontSize: 80, marginBottom: 16 }}>{flagEmoji}</div>

        {/* Country Name */}
        <div style={{ color: 'white', fontSize: 64, fontWeight: 700, marginBottom: 16 }}>
          {country.name}
        </div>

        {/* Time zones count */}
        <div style={{ color: '#22d3ee', fontSize: 36, marginBottom: 24 }}>
          {country.timezones.length} Time Zone{country.timezones.length > 1 ? 's' : ''}
        </div>

        {/* Info row */}
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.7)', fontSize: 24 }}>
          <span>Capital: {country.capital}</span>
          <span style={{ margin: '0 24px' }}>•</span>
          <span>Currency: {country.currencySymbol}</span>
          <span style={{ margin: '0 24px' }}>•</span>
          <span>Population: {country.population}</span>
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
