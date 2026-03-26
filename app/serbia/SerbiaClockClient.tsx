'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SERBIA_TZ = 'Europe/Belgrade'
export default function SerbiaClockClient() {
  return <HeroClockDisplay tz={SERBIA_TZ} countryCode="RS" countryName="Serbia" tzLabel="CET · UTC+1" />
}
