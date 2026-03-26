'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MOLDOVA_TZ = 'Europe/Chisinau'
export default function MoldovaClockClient() {
  return <HeroClockDisplay tz={MOLDOVA_TZ} countryCode="MD" countryName="Moldova" tzLabel="EET · UTC+2" />
}
