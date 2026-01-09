import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          dark: "#020617",
        },
        amber: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "Menlo", "Consolas", "Liberation Mono", "monospace"],
      },
      fontSize: {
        // ═══════════════════════════════════════════════════════════════
        // ASSERTIVE TYPOGRAPHY SCALE - "Bu önemli, buna bak" 
        // ═══════════════════════════════════════════════════════════════
        
        // HERO - Sayfa anchor'u, kaçırılmaz
        'hero': ['3rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        
        // SECTION - Bölüm başlıkları, GÖZ YAKALAMALI
        'section': ['1.5rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }], // 24px BOLD
        
        // CARD TITLE - Kart başlıkları, net ve güçlü
        'card-title': ['1.125rem', { lineHeight: '1.25', fontWeight: '600' }], // 18px
        
        // VALUE - Önemli değerler (saatler, rakamlar) - LIDER
        'value': ['1.0625rem', { lineHeight: '1.3', fontWeight: '700' }], // 17px BOLD
        
        // BODY - Ana içerik
        'body': ['0.9375rem', { lineHeight: '1.55', fontWeight: '400' }], // 15px
        
        // META - Yardımcı (bilinçli olarak soluk)
        'meta': ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }], // 13px
        
        // MICRO - Etiketler, badge'ler
        'micro': ['0.6875rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.05em' }], // 11px SEMIBOLD
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
