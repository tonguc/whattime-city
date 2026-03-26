'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const HAITI_TZ = 'America/Port-au-Prince'
export default function HaitiClockClient() {
  return <HeroClockDisplay tz={HAITI_TZ} countryCode="HT" countryName="Haiti" tzLabel="EST · UTC-5" />
}
