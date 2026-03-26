'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PAPUA_NEW_GUINEA_TZ = 'Pacific/Port_Moresby'
export default function PapuaNewGuineaClockClient() {
  return <HeroClockDisplay tz={PAPUA_NEW_GUINEA_TZ} countryCode="PG" countryName="Papua New Guinea" tzLabel="PGT · UTC+10" />
}
