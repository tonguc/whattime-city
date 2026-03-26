'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SEYCHELLES_TZ = 'Indian/Mahe'
export default function SeychellesClockClient() {
  return <HeroClockDisplay tz={SEYCHELLES_TZ} countryCode="SC" countryName="Seychelles" tzLabel="SCT · UTC+4" />
}
