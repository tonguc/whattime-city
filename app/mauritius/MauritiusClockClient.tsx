'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MAURITIUS_TZ = 'Indian/Mauritius'
export default function MauritiusClockClient() {
  return <HeroClockDisplay tz={MAURITIUS_TZ} countryCode="MU" countryName="Mauritius" tzLabel="MUT · UTC+4" />
}
