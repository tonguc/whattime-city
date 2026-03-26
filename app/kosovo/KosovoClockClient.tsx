'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KOSOVO_TZ = 'Europe/Belgrade'
export default function KosovoClockClient() {
  return <HeroClockDisplay tz={KOSOVO_TZ} countryCode="XK" countryName="Kosovo" tzLabel="CET · UTC+1" />
}
