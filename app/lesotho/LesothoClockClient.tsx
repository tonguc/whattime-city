'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LESOTHO_TZ = 'Africa/Maseru'
export default function LesothoClockClient() {
  return <HeroClockDisplay tz={LESOTHO_TZ} countryCode="LS" countryName="Lesotho" tzLabel="SAST · UTC+2" />
}
