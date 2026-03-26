'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UTAH_TZ = 'America/Denver'
export default function UtahClockClient() {
  return <HeroClockDisplay tz={UTAH_TZ} countryCode="US" countryName="Utah" tzLabel="Denver" />
}
