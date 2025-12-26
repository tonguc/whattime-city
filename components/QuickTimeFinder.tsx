// components/QuickTimeFinder.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CityTime {
  name: string;
  timezone: string;
  time?: string;
}

interface QuickTimeFinderProps {
  currentCity: string; // "Los Angeles"
  currentTimezone: string; // "America/Los_Angeles"
  otherCities: CityTime[]; // [{ name: 'New York', timezone: 'America/New_York' }, ...]
}

export default function QuickTimeFinder({
  currentCity,
  currentTimezone,
  otherCities
}: QuickTimeFinderProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [cityTimes, setCityTimes] = useState<CityTime[]>(otherCities);

  useEffect(() => {
    // İlk render'da zamanları hesapla
    updateTimes();

    // Her 1 saniyede bir güncelle (dijital saat gibi)
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, [currentTimezone, otherCities]);

  const updateTimes = () => {
    const now = new Date();

    // Current city time
    const currentFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: currentTimezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    setCurrentTime(currentFormatter.format(now));

    // Other cities times
    const updatedCities = otherCities.map(city => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: city.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      return {
        ...city,
        time: formatter.format(now)
      };
    });
    setCityTimes(updatedCities);
  };

  return (
    <div className="relative border-2 border-orange-500 rounded-2xl p-6 mb-8 bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🕐</span>
        <h2 className="text-2xl font-bold text-white">Quick Time Finder</h2>
      </div>

      {/* Current City Time - HERO */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-1">
          Right now in <span className="font-semibold text-gray-300">{currentCity}</span>:
        </p>
        <p className="text-5xl font-bold text-white tracking-tight">
          {currentTime || '00:00 AM'}
        </p>
      </div>

      {/* Other Cities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {cityTimes.map(city => (
          <div
            key={city.name}
            className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 hover:bg-slate-700/80 transition-colors"
          >
            <p className="text-sm text-gray-400 mb-1">{city.name}</p>
            <p className="text-xl font-bold text-white">
              {city.time || '--:-- --'}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link href="/tools/meeting-planner">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
          <span>Open Full Meeting Planner</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </Link>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-orange-500/5 rounded-2xl blur-xl -z-10"></div>
    </div>
  );
}
