'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MAURITANIA_TZ = 'Africa/Nouakchott'
export default function MauritaniaClockClient() {
  return <HeroClockDisplay tz={MAURITANIA_TZ} countryCode="MR" countryName="Mauritania" tzLabel="GMT · UTC+0" />
}
