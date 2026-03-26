'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BULGARIA_TZ = 'Europe/Sofia'
export default function BulgariaClockClient() {
  return <HeroClockDisplay tz={BULGARIA_TZ} countryCode="BG" countryName="Bulgaria" tzLabel="EET · UTC+2" />
}
