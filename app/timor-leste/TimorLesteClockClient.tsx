'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TIMOR_LESTE_TZ = 'Asia/Dili'
export default function TimorLesteClockClient() {
  return <HeroClockDisplay tz={TIMOR_LESTE_TZ} countryCode="TL" countryName="Timor-Leste" tzLabel="TLT · UTC+9" />
}
