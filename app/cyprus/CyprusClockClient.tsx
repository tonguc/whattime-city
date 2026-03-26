'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CYPRUS_TZ = 'Asia/Nicosia'
export default function CyprusClockClient() {
  return <HeroClockDisplay tz={CYPRUS_TZ} countryCode="CY" countryName="Cyprus" tzLabel="EET · UTC+2" />
}
