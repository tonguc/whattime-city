'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const EQUATORIAL_GUINEA_TZ = 'Africa/Malabo'
export default function EquatorialGuineaClockClient() {
  return <HeroClockDisplay tz={EQUATORIAL_GUINEA_TZ} countryCode="GQ" countryName="Equatorial Guinea" tzLabel="WAT · UTC+1" />
}
