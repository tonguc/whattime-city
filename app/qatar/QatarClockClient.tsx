'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const QATAR_TZ = 'Asia/Qatar'
export default function QatarClockClient() {
  return <HeroClockDisplay tz={QATAR_TZ} countryCode="QA" countryName="Qatar" tzLabel="AST · UTC+3" />
}
