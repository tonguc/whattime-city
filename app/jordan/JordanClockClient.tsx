'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const JORDAN_TZ = 'Asia/Amman'
export default function JordanClockClient() {
  return <HeroClockDisplay tz={JORDAN_TZ} countryCode="JO" countryName="Jordan" tzLabel="EET · UTC+3" />
}
