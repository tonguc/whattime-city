'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const RWANDA_TZ = 'Africa/Kigali'
export default function RwandaClockClient() {
  return <HeroClockDisplay tz={RWANDA_TZ} countryCode="RW" countryName="Rwanda" tzLabel="CAT · UTC+2" />
}
