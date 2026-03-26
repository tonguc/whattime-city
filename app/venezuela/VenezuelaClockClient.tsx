'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const VENEZUELA_TZ = 'America/Caracas'
export default function VenezuelaClockClient() {
  return <HeroClockDisplay tz={VENEZUELA_TZ} countryCode="VE" countryName="Venezuela" tzLabel="VET · UTC-4" />
}
