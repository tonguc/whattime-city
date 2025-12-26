// data/cityGuides.ts
// Tüm şehir guide'larını buradan export edin

import { newYorkGuide } from './guides/new-york';
import { losAngelesGuide } from './guides/los-angeles';
import { sydneyGuide } from './guides/sydney';
// ... diğer şehirler

interface CityTime {
  name: string;
  timezone: string;
}

interface SubPage {
  icon: string;
  title: string;
  slug: string;
  description: string;
  content?: {
    title: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
    quickTips: string[];
  };
}

interface CityGuide {
  city: string;
  slug: string;
  timezone: string;
  quickTimeCities: CityTime[];
  subPages: SubPage[];
}

interface CityGuidesMap {
  [key: string]: CityGuide;
}

export const cityGuides: CityGuidesMap = {
  'new-york': newYorkGuide,
  'los-angeles': losAngelesGuide,
  'sydney': sydneyGuide,
  // ... diğer şehirler ekleyin
  
  // Örnek: Hızlı test için minimal veri
  'london': {
    city: 'London',
    slug: 'london',
    timezone: 'Europe/London',
    quickTimeCities: [
      { name: 'New York', timezone: 'America/New_York' },
      { name: 'Paris', timezone: 'Europe/Paris' },
      { name: 'Dubai', timezone: 'Asia/Dubai' },
      { name: 'Tokyo', timezone: 'Asia/Tokyo' }
    ],
    subPages: [
      { icon: '🗺️', title: 'Overview', slug: 'overview', description: 'London genel bakış' },
      { icon: '💼', title: 'Business Hours', slug: 'business-hours', description: 'İş saatleri' },
      { icon: '🎋', title: 'Best Time to Visit', slug: 'best-time-to-visit', description: 'Ziyaret zamanı' },
      { icon: '💻', title: 'Remote Work', slug: 'remote-work', description: 'Uzaktan çalışma' },
      { icon: '🏙️', title: '24 Hours', slug: '24-hours', description: '24 saat rehberi' },
      { icon: '📞', title: 'Call Times', slug: 'call-times', description: 'Arama saatleri' },
      { icon: '📈', title: 'Stock Market', slug: 'stock-market', description: 'Borsa saatleri' },
      { icon: '📅', title: 'Holidays', slug: 'holidays', description: 'Tatiller' },
      { icon: '🎒', title: 'Digital Nomad', slug: 'digital-nomad', description: 'Dijital göçebe' },
      { icon: '🌐', title: 'Time Difference', slug: 'time-difference', description: 'Zaman farkı' },
      { icon: '✈️', title: 'Travel', slug: 'travel', description: 'Seyahat' }
    ]
  }
};

// Helper function: Şehir var mı kontrol et
export function getCityGuide(slug: string): CityGuide | null {
  return cityGuides[slug] || null;
}

// Helper function: Tüm şehir slug'larını al (static generation için)
export function getAllCitySlugs(): string[] {
  return Object.keys(cityGuides);
}

// Export types
export type { CityGuide, SubPage, CityTime };
