'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ESTONIA_TZ = 'Europe/Tallinn'
export default function EstoniaClockClient() {
  return <HeroClockDisplay tz={ESTONIA_TZ} countryCode="EE" countryName="Estonia" tzLabel="EET · UTC+2" />
}
