'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LEBANON_TZ = 'Asia/Beirut'
export default function LebanonClockClient() {
  return <HeroClockDisplay tz={LEBANON_TZ} countryCode="LB" countryName="Lebanon" tzLabel="EET · UTC+2" />
}
