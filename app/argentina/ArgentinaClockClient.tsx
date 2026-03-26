'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ARGENTINA_TZ = 'America/Argentina/Buenos_Aires'
export default function ArgentinaClockClient() {
  return <HeroClockDisplay tz={ARGENTINA_TZ} countryCode="AR" countryName="Argentina" tzLabel="ART · UTC-3" />
}
