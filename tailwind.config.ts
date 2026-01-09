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
        // Typography Scale - 6 distinct levels
        'hero': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],        // 48px - Page anchor
        'section': ['1.375rem', { lineHeight: '1.25', fontWeight: '600' }], // 22px - Section titles
        'card-title': ['1.0625rem', { lineHeight: '1.3', fontWeight: '600' }], // 17px - Card headers
        'body': ['0.9375rem', { lineHeight: '1.5', fontWeight: '400' }],    // 15px - Body text
        'meta': ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],    // 13px - Helper text
        'micro': ['0.6875rem', { lineHeight: '1.35', fontWeight: '500' }],  // 11px - Badges, labels
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
