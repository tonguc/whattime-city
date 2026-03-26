'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const DENMARK_TZ = 'Europe/Copenhagen'
export default function DenmarkClockClient() {
  return <HeroClockDisplay tz={DENMARK_TZ} countryCode="DK" countryName="Denmark" tzLabel="CET · UTC+1" />
}
