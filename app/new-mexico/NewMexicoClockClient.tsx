'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEW_MEXICO_TZ = 'America/Denver'
export default function NewMexicoClockClient() {
  return <HeroClockDisplay tz={NEW_MEXICO_TZ} countryCode="US" countryName="New Mexico" tzLabel="Denver" />
}
