'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ESWATINI_TZ = 'Africa/Mbabane'
export default function EswatiniClockClient() {
  return <HeroClockDisplay tz={ESWATINI_TZ} countryCode="SZ" countryName="Eswatini" tzLabel="SAST · UTC+2" />
}
