'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KUWAIT_TZ = 'Asia/Kuwait'
export default function KuwaitClockClient() {
  return <HeroClockDisplay tz={KUWAIT_TZ} countryCode="KW" countryName="Kuwait" tzLabel="AST · UTC+3" />
}
