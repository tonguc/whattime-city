'use client'

import { useCityContext } from './CityContext'
import { TimeOfDay } from './sun-calculator'

/**
 * useThemeClasses - ASSERTIVE TYPOGRAPHY SYSTEM
 * 
 * ═══════════════════════════════════════════════════════════════
 * "Bu önemli. Buna bak. Sonra devam et."
 * ═══════════════════════════════════════════════════════════════
 * 
 * 3 KATMAN:
 * 1. SHOUT  → Siyah/Beyaz, Bold, Büyük → GÖZ YAKALAR
 * 2. SPEAK  → Koyu gri, Semibold → Bilgi verir  
 * 3. WHISPER → Açık gri, Regular → Destekler (görünmez gibi)
 */

export interface ThemeClasses {
  card: string
  cardWithRound: string
  
  // ═══════════════════════════════════════════════════════════════
  // ASSERTIVE TYPOGRAPHY - "Bana bak" sistemi
  // ═══════════════════════════════════════════════════════════════
  
  // SHOUT - Göz yakalayan
  textHero: string        // 48px/700 - Sayfa anchor
  textSection: string     // 26px/700 - Section başlıkları - BÜYÜK
  textValue: string       // 17px/700 - Önemli değerler (saatler)
  
  // SPEAK - Net bilgi
  textCardTitle: string   // 18px/600 - Kart başlıkları
  textBody: string        // 15px/400 - Ana içerik
  
  // WHISPER - Çok soluk
  textLabel: string       // 11px/500 - OFFICES, BANKS etiketleri
  textMeta: string        // 12px/400 - Açıklamalar (çok soluk)
  textMicro: string       // 11px/600 - Badge'ler
  
  // NUMBERS
  textTime: string        // Monospace, bold
  textTimeLarge: string   // Büyük saat
  textCityName: string    // Grid'de şehir ismi
  textCityTime: string    // Grid'de saat (bold değil)
  
  // Legacy
  text: string
  textMuted: string
  
  // Inputs
  input: string
  inputFocused: string
  
  // Buttons
  btnPrimary: string
  btnSecondary: string
  
  // Backgrounds
  bg: string
  bgGradient: string
  
  // Borders
  border: string
  borderAccent: string
  
  // Accents
  accent: string
  accentBg: string
  accentText: string
  
  // States
  isLight: boolean
  isDark: boolean
  timeOfDay: TimeOfDay | 'light' | 'dark'
  theme: ReturnType<typeof useCityContext>['theme']
}

export function useThemeClasses(): ThemeClasses {
  const { theme, isLight, currentTheme } = useCityContext()
  const isDark = !isLight
  
  const getCardClass = (): string => {
    if (isLight) {
      return 'bg-white border border-slate-200 backdrop-blur-xl'
    }
    switch (currentTheme) {
      case 'dawn':
        return 'bg-slate-800/60 border border-orange-700/50 backdrop-blur-xl'
      case 'dusk':
        return 'bg-slate-800/60 border border-purple-700/50 backdrop-blur-xl'
      default:
        return 'bg-slate-800/60 border border-slate-700/50 backdrop-blur-xl'
    }
  }
  
  // ═══════════════════════════════════════════════════════════════
  // ASSERTIVE COLOR SYSTEM v2
  // ═══════════════════════════════════════════════════════════════
  
  // SHOUT: Maximum kontrast - siyah veya beyaz
  const colorShout = isLight ? 'text-slate-950' : 'text-white'
  
  // SPEAK: Güçlü ama shout değil
  const colorSpeak = isLight ? 'text-slate-800' : 'text-slate-100'
  
  // WHISPER: Bilinçli olarak ÇOK geri planda
  const colorWhisper = isLight ? 'text-slate-400/70' : 'text-slate-500/70' // opacity ekledim
  
  // LABEL: Kategori etiketleri - görünür ama lider değil
  const colorLabel = isLight ? 'text-slate-500' : 'text-slate-400'
  
  // BODY: Okunabilir ama lider değil
  const colorBody = isLight ? 'text-slate-600' : 'text-slate-300'
  
  return {
    card: getCardClass(),
    cardWithRound: `${getCardClass()} rounded-2xl`,
    
    // ═══════════════════════════════════════════════════════════════
    // SHOUT - "BANA BAK"
    // ═══════════════════════════════════════════════════════════════
    
    // Hero - Sayfa anchor'u
    textHero: `text-hero ${colorShout}`,
    
    // Section - Bölüm başlıkları - 26px, BOLD, SİYAH
    textSection: `text-section ${colorShout}`,
    
    // Value - Önemli rakamlar/saatler - LİDER
    textValue: `text-value ${colorShout}`,
    
    // ═══════════════════════════════════════════════════════════════
    // SPEAK - "Bilgi burada"
    // ═══════════════════════════════════════════════════════════════
    
    textCardTitle: `text-card-title ${colorSpeak}`,
    textBody: `text-body ${colorBody}`,
    
    // ═══════════════════════════════════════════════════════════════
    // WHISPER - "Gerekirse bak" (ÇOK SOLUK)
    // ═══════════════════════════════════════════════════════════════
    
    // Label - Kategori etiketleri (OFFICES, BANKS)
    textLabel: `text-label uppercase tracking-wider ${colorLabel}`,
    
    // Meta - Açıklamalar, footer notları (çok soluk)
    textMeta: `text-meta ${colorWhisper}`,
    
    // Micro - Badge'ler
    textMicro: `text-micro uppercase tracking-wider ${colorWhisper}`,
    
    // ═══════════════════════════════════════════════════════════════
    // NUMBERS - Saatler için özel
    // ═══════════════════════════════════════════════════════════════
    
    textTime: `font-mono tabular-nums font-bold ${colorShout}`,
    textTimeLarge: `font-mono tabular-nums font-bold ${colorShout} tracking-tight`,
    
    // World Cities grid için - saat normal, şehir semibold
    textCityName: `text-body font-medium ${colorSpeak}`, // şehir ismi
    textCityTime: `font-mono tabular-nums text-sm ${colorLabel}`, // saat - bold DEĞİL
    
    // Legacy
    text: colorShout,
    textMuted: colorWhisper,
    
    // Inputs
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    inputFocused: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
    
    // Buttons - daha güçlü
    btnPrimary: isLight
      ? 'bg-slate-900 text-white hover:bg-slate-800 font-semibold'
      : 'bg-white text-slate-900 hover:bg-slate-100 font-semibold',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300 font-medium'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 font-medium',
    
    bg: theme.bg,
    bgGradient: `bg-gradient-to-br ${theme.bg}`,
    border: isLight ? 'border-slate-200' : 'border-slate-700',
    borderAccent: theme.accentBorder,
    accent: theme.accent,
    accentBg: theme.accentBg,
    accentText: theme.accentText,
    isLight,
    isDark,
    timeOfDay: currentTheme,
    theme,
  }
}

/**
 * getStaticThemeClasses - Context olmadan kullanım için
 */
export function getStaticThemeClasses(isLight: boolean, timeOfDay?: TimeOfDay) {
  const colorShout = isLight ? 'text-slate-950' : 'text-white'
  const colorSpeak = isLight ? 'text-slate-800' : 'text-slate-100'
  const colorWhisper = isLight ? 'text-slate-400' : 'text-slate-500'
  const colorBody = isLight ? 'text-slate-600' : 'text-slate-300'
  
  const getCardClass = (): string => {
    if (isLight) return 'bg-white border border-slate-200 backdrop-blur-xl'
    switch (timeOfDay) {
      case 'dawn': return 'bg-slate-800/60 border border-orange-700/50 backdrop-blur-xl'
      case 'dusk': return 'bg-slate-800/60 border border-purple-700/50 backdrop-blur-xl'
      default: return 'bg-slate-800/60 border border-slate-700/50 backdrop-blur-xl'
    }
  }
  
  return {
    card: getCardClass(),
    cardWithRound: `${getCardClass()} rounded-2xl`,
    text: colorShout,
    textMuted: colorWhisper,
    textHero: `text-hero ${colorShout}`,
    textSection: `text-section ${colorShout}`,
    textValue: `text-value ${colorShout}`,
    textCardTitle: `text-card-title ${colorSpeak}`,
    textBody: `text-body ${colorBody}`,
    textMeta: `text-meta ${colorWhisper}`,
    textTime: `font-mono tabular-nums font-bold ${colorShout}`,
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    btnPrimary: isLight
      ? 'bg-slate-900 text-white hover:bg-slate-800 font-semibold'
      : 'bg-white text-slate-900 hover:bg-slate-100 font-semibold',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300 font-medium'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 font-medium',
    isLight,
    isDark: !isLight,
  }
}
