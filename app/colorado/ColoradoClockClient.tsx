'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const COLORADO_TZ = 'America/Denver'
export default function ColoradoClockClient() {
  return <HeroClockDisplay tz={COLORADO_TZ} countryCode="US" countryName="Colorado" tzLabel="Denver" />
}
