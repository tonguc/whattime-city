'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const IRELAND_TZ = 'Europe/Dublin'
export default function IrelandClockClient() {
  return <HeroClockDisplay tz={IRELAND_TZ} countryCode="IE" countryName="Ireland" tzLabel="GMT · UTC+0" />
}
