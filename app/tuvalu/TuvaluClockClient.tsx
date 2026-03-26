'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TUVALU_TZ = 'Pacific/Funafuti'
export default function TuvaluClockClient() {
  return <HeroClockDisplay tz={TUVALU_TZ} countryCode="TV" countryName="Tuvalu" tzLabel="TVT · UTC+12" />
}
