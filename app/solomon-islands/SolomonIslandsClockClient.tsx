'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOLOMON_ISLANDS_TZ = 'Pacific/Guadalcanal'
export default function SolomonIslandsClockClient() {
  return <HeroClockDisplay tz={SOLOMON_ISLANDS_TZ} countryCode="SB" countryName="Solomon Islands" tzLabel="SBT · UTC+11" />
}
