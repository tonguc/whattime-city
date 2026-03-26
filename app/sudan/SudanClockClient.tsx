'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SUDAN_TZ = 'Africa/Khartoum'
export default function SudanClockClient() {
  return <HeroClockDisplay tz={SUDAN_TZ} countryCode="SD" countryName="Sudan" tzLabel="CAT · UTC+2" />
}
