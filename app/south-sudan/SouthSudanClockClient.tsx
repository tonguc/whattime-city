'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOUTH_SUDAN_TZ = 'Africa/Juba'
export default function SouthSudanClockClient() {
  return <HeroClockDisplay tz={SOUTH_SUDAN_TZ} countryCode="SS" countryName="South Sudan" tzLabel="CAT · UTC+2" />
}
