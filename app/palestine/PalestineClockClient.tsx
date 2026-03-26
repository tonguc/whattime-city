'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PALESTINE_TZ = 'Asia/Gaza'
export default function PalestineClockClient() {
  return <HeroClockDisplay tz={PALESTINE_TZ} countryCode="PS" countryName="Palestine" tzLabel="EET · UTC+2" />
}
