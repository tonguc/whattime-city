'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOUTH_AFRICA_TZ = 'Africa/Johannesburg'
export default function SouthAfricaClockClient() {
  return <HeroClockDisplay tz={SOUTH_AFRICA_TZ} countryCode="ZA" countryName="South Africa" tzLabel="SAST · UTC+2" />
}
