'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SURINAME_TZ = 'America/Paramaribo'
export default function SurinameClockClient() {
  return <HeroClockDisplay tz={SURINAME_TZ} countryCode="SR" countryName="Suriname" tzLabel="SRT · UTC-3" />
}
