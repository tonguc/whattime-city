'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LIECHTENSTEIN_TZ = 'Europe/Vaduz'
export default function LiechtensteinClockClient() {
  return <HeroClockDisplay tz={LIECHTENSTEIN_TZ} countryCode="LI" countryName="Liechtenstein" tzLabel="CET · UTC+1" />
}
