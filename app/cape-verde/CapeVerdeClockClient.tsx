'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CAPE_VERDE_TZ = 'Atlantic/Cape_Verde'
export default function CapeVerdeClockClient() {
  return <HeroClockDisplay tz={CAPE_VERDE_TZ} countryCode="CV" countryName="Cape Verde" tzLabel="CVT · UTC-1" />
}
