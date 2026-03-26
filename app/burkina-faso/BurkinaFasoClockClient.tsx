'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BURKINA_FASO_TZ = 'Africa/Ouagadougou'
export default function BurkinaFasoClockClient() {
  return <HeroClockDisplay tz={BURKINA_FASO_TZ} countryCode="BF" countryName="Burkina Faso" tzLabel="GMT · UTC+0" />
}
