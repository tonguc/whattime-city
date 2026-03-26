'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GABON_TZ = 'Africa/Libreville'
export default function GabonClockClient() {
  return <HeroClockDisplay tz={GABON_TZ} countryCode="GA" countryName="Gabon" tzLabel="WAT · UTC+1" />
}
