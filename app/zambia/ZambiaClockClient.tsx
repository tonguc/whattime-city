'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ZAMBIA_TZ = 'Africa/Lusaka'
export default function ZambiaClockClient() {
  return <HeroClockDisplay tz={ZAMBIA_TZ} countryCode="ZM" countryName="Zambia" tzLabel="CAT · UTC+2" />
}
