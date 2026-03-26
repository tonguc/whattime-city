'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BRUNEI_TZ = 'Asia/Brunei'
export default function BruneiClockClient() {
  return <HeroClockDisplay tz={BRUNEI_TZ} countryCode="BN" countryName="Brunei" tzLabel="BNT · UTC+8" />
}
