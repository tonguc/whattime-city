'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BOLIVIA_TZ = 'America/La_Paz'
export default function BoliviaClockClient() {
  return <HeroClockDisplay tz={BOLIVIA_TZ} countryCode="BO" countryName="Bolivia" tzLabel="BOT · UTC-4" />
}
