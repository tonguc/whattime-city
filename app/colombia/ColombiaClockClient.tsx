'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const COLOMBIA_TZ = 'America/Bogota'
export default function ColombiaClockClient() {
  return <HeroClockDisplay tz={COLOMBIA_TZ} countryCode="CO" countryName="Colombia" tzLabel="COT · UTC-5" />
}
