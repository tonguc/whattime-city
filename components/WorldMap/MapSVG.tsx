'use client'

import { useState, useEffect } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'
import { City } from '@/lib/cities'
import { mapCitySlugs, WORLD_MAP_URL } from './data'

// Type for city data returned by getCityData
interface CityData {
  city: City
  timeStr: string
  timeOfDay: string
  theme: {
    bg: string
    text: string
    textMuted: string
    card: string
    accent: string
    accentText: string
  }
}

interface MapSVGProps {
  isLight: boolean
  zoom: number
  setZoom: (zoom: number) => void
  selectedCity: string | null
  onCitySelect: (slug: string | null) => void
  getCityData: (slug: string) => CityData | null
  cities: City[]
}

export default function MapSVG({
  isLight,
  zoom,
  setZoom,
  selectedCity,
  onCitySelect,
  getCityData,
  cities,
}: MapSVGProps) {
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 20],
    zoom: 1,
  })

  // Sync external zoom with internal position
  useEffect(() => {
    setPosition(prev => ({ ...prev, zoom }))
  }, [zoom])

  // Handle zoom from ZoomableGroup
  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position)
    setZoom(position.zoom)
  }

  // Get cities to display on map
  const mapCities = mapCitySlugs
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined)

  // Colors based on theme
  const oceanColor = isLight ? '#bfdbfe' : '#0c4a6e'
  const landColor = isLight ? '#94a3b8' : '#334155'
  const landStroke = isLight ? '#64748b' : '#475569'

  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      style={{ minHeight: '500px' }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
          center: [0, 20],
        }}
        style={{
          width: '100%',
          height: '500px',
          background: oceanColor,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
        >
          {/* World Map */}
          <Geographies geography={WORLD_MAP_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={landColor}
                  stroke={landStroke}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: isLight ? '#64748b' : '#475569' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* City Markers */}
          {mapCities.map((city) => {
            const data = getCityData(city.slug)
            if (!data) return null

            const { timeStr, timeOfDay } = data
            const isSelected = selectedCity === city.slug
            const isNight = timeOfDay === 'night'
            const isDusk = timeOfDay === 'dusk'
            const isDawn = timeOfDay === 'dawn'

            // Dot colors based on time of day
            const dotColor = isNight 
              ? '#22d3ee' 
              : isDusk 
                ? '#f97316' 
                : isDawn 
                  ? '#f472b6' 
                  : '#fbbf24'

            const dotSize = isSelected ? 8 : 5

            return (
              <Marker
                key={city.slug}
                coordinates={[city.lng, city.lat]}
                onClick={() => onCitySelect(isSelected ? null : city.slug)}
              >
                {/* Glow effect for selected */}
                {isSelected && (
                  <circle
                    r={12}
                    fill={dotColor}
                    opacity={0.3}
                    className="animate-pulse"
                  />
                )}
                
                {/* City dot */}
                <circle
                  r={dotSize}
                  fill={dotColor}
                  stroke="#fff"
                  strokeWidth={1.5}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                />

                {/* Time label - show on hover/select or when zoomed in */}
                {(isSelected || position.zoom >= 2) && (
                  <g>
                    <rect
                      x={-20}
                      y={-28}
                      width={40}
                      height={16}
                      rx={4}
                      fill={isNight ? '#164e63' : '#92400e'}
                      opacity={0.95}
                    />
                    <text
                      textAnchor="middle"
                      y={-16}
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '10px',
                        fontWeight: 700,
                        fill: '#fff',
                      }}
                    >
                      {timeStr}
                    </text>
                  </g>
                )}

                {/* City name on hover/select */}
                {isSelected && (
                  <text
                    textAnchor="middle"
                    y={20}
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      fill: isLight ? '#1e293b' : '#f1f5f9',
                    }}
                  >
                    {city.city}
                  </text>
                )}
              </Marker>
            )
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom level indicator */}
      {position.zoom > 1 && (
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
            isLight ? 'bg-white/90 text-slate-700' : 'bg-slate-800/90 text-white'
          }`}
        >
          {position.zoom.toFixed(1)}x
        </div>
      )}

      {/* Instructions */}
      <div
        className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs ${
          isLight ? 'bg-white/80 text-slate-600' : 'bg-slate-800/80 text-slate-300'
        }`}
      >
        🖱️ Drag to pan • Scroll to zoom • Click city for details
      </div>
    </div>
  )
}
