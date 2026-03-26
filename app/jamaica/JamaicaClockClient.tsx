'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const JAMAICA_TZ = 'America/Jamaica'
export default function JamaicaClockClient() {
  return <HeroClockDisplay tz={JAMAICA_TZ} countryCode="JM" countryName="Jamaica" tzLabel="EST · UTC-5" />
}
