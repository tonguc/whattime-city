'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MEXICO_TZ = 'America/Mexico_City'
export default function MexicoClockClient() {
  return <HeroClockDisplay tz={MEXICO_TZ} countryCode="MX" countryName="Mexico" tzLabel="EST · UTC-5" />
}
