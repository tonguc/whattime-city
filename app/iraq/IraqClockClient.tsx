'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const IRAQ_TZ = 'Asia/Baghdad'
export default function IraqClockClient() {
  return <HeroClockDisplay tz={IRAQ_TZ} countryCode="IQ" countryName="Iraq" tzLabel="AST · UTC+3" />
}
