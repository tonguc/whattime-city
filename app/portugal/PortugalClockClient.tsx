'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PORTUGAL_TZ = 'Europe/Lisbon'
export default function PortugalClockClient() {
  return <HeroClockDisplay tz={PORTUGAL_TZ} countryCode="PT" countryName="Portugal" tzLabel="WET · UTC+0" />
}
