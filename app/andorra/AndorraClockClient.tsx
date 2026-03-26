'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ANDORRA_TZ = 'Europe/Andorra'
export default function AndorraClockClient() {
  return <HeroClockDisplay tz={ANDORRA_TZ} countryCode="AD" countryName="Andorra" tzLabel="CET · UTC+1" />
}
