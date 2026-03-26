'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MICRONESIA_TZ = 'Pacific/Pohnpei'
export default function MicronesiaClockClient() {
  return <HeroClockDisplay tz={MICRONESIA_TZ} countryCode="FM" countryName="Micronesia" tzLabel="CHUT · UTC+10" />
}
