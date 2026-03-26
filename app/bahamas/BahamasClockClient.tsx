'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BAHAMAS_TZ = 'America/Nassau'
export default function BahamasClockClient() {
  return <HeroClockDisplay tz={BAHAMAS_TZ} countryCode="BS" countryName="Bahamas" tzLabel="EST · UTC-5" />
}
