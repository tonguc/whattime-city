'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const IVORY_COAST_TZ = 'Africa/Abidjan'
export default function IvoryCoastClockClient() {
  return <HeroClockDisplay tz={IVORY_COAST_TZ} countryCode="CI" countryName="Ivory Coast" tzLabel="GMT · UTC+0" />
}
