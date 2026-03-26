'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ZIMBABWE_TZ = 'Africa/Harare'
export default function ZimbabweClockClient() {
  return <HeroClockDisplay tz={ZIMBABWE_TZ} countryCode="ZW" countryName="Zimbabwe" tzLabel="CAT · UTC+2" />
}
