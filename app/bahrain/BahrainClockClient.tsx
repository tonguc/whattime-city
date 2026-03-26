'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BAHRAIN_TZ = 'Asia/Bahrain'
export default function BahrainClockClient() {
  return <HeroClockDisplay tz={BAHRAIN_TZ} countryCode="BH" countryName="Bahrain" tzLabel="AST · UTC+3" />
}
