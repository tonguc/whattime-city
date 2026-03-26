'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TURKEY_TZ = 'Europe/Istanbul'
export default function TurkeyClockClient() {
  return <HeroClockDisplay tz={TURKEY_TZ} countryCode="TR" countryName="Turkey" tzLabel="TRT · UTC+3" />
}
