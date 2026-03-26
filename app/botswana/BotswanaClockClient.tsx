'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BOTSWANA_TZ = 'Africa/Gaborone'
export default function BotswanaClockClient() {
  return <HeroClockDisplay tz={BOTSWANA_TZ} countryCode="BW" countryName="Botswana" tzLabel="CAT · UTC+2" />
}
