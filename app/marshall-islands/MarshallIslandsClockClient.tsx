'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MARSHALL_ISLANDS_TZ = 'Pacific/Majuro'
export default function MarshallIslandsClockClient() {
  return <HeroClockDisplay tz={MARSHALL_ISLANDS_TZ} countryCode="MH" countryName="Marshall Islands" tzLabel="MHT · UTC+12" />
}
