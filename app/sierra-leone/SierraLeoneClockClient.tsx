'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SIERRA_LEONE_TZ = 'Africa/Freetown'
export default function SierraLeoneClockClient() {
  return <HeroClockDisplay tz={SIERRA_LEONE_TZ} countryCode="SL" countryName="Sierra Leone" tzLabel="GMT · UTC+0" />
}
