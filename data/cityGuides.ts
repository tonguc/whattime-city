// data/cityGuides.ts
// City Guide System - Los Angeles ile başlangıç

import { losAngelesGuide } from './guides/los-angeles';

interface CityTime {
  name: string;
  timezone: string;
}

interface SubPage {
  icon: string;
  title: string;
  slug: string;
  description: string;
  content?: any;
}

export interface CityGuide {
  city: string;
  slug: string;
  timezone: string;
  quickTimeCities: CityTime[];
  subPages: SubPage[];
}

// Şimdilik sadece Los Angeles
// Diğer şehirleri eklemek için bu pattern'i takip edin
export const cityGuides: Record<string, CityGuide> = {
  'los-angeles': losAngelesGuide,
};

// Helper functions
export function getCityGuide(slug: string): CityGuide | null {
  return cityGuides[slug] || null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityGuides);
}
