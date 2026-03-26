'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SINGAPORE_TZ = 'Asia/Singapore'
export default function SingaporeClockClient() {
  return <HeroClockDisplay tz={SINGAPORE_TZ} countryCode="SG" countryName="Singapore" tzLabel="SGT · UTC+8" />
}
