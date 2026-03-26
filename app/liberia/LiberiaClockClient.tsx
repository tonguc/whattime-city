'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LIBERIA_TZ = 'Africa/Monrovia'
export default function LiberiaClockClient() {
  return <HeroClockDisplay tz={LIBERIA_TZ} countryCode="LR" countryName="Liberia" tzLabel="GMT · UTC+0" />
}
