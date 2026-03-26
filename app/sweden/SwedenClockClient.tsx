'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SWEDEN_TZ = 'Europe/Stockholm'
export default function SwedenClockClient() {
  return <HeroClockDisplay tz={SWEDEN_TZ} countryCode="SE" countryName="Sweden" tzLabel="CET · UTC+1" />
}
