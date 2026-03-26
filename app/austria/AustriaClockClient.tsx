'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const AUSTRIA_TZ = 'Europe/Vienna'
export default function AustriaClockClient() {
  return <HeroClockDisplay tz={AUSTRIA_TZ} countryCode="AT" countryName="Austria" tzLabel="CET · UTC+1" />
}
