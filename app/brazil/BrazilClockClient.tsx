'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BRAZIL_TZ = 'America/Sao_Paulo'
export default function BrazilClockClient() {
  return <HeroClockDisplay tz={BRAZIL_TZ} countryCode="BR" countryName="Brazil" tzLabel="BRT · UTC-3" />
}
