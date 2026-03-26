'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SAUDI_ARABIA_TZ = 'Asia/Riyadh'
export default function SaudiArabiaClockClient() {
  return <HeroClockDisplay tz={SAUDI_ARABIA_TZ} countryCode="SA" countryName="Saudi Arabia" tzLabel="AST · UTC+3" />
}
