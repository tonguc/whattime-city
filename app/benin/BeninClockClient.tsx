'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BENIN_TZ = 'Africa/Porto-Novo'
export default function BeninClockClient() {
  return <HeroClockDisplay tz={BENIN_TZ} countryCode="BJ" countryName="Benin" tzLabel="WAT · UTC+1" />
}
