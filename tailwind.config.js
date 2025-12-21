/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Night theme
    'from-slate-950', 'via-indigo-950', 'to-slate-950',
    // Dawn theme
    'from-slate-900', 'via-orange-900', 'to-amber-800',
    // Day theme (AUTO gündüz - açık mavi)
    'from-sky-100', 'via-blue-100', 'to-cyan-100',
    // Dusk theme
    'from-purple-900', 'via-rose-900', 'to-orange-900',
    // Dark theme
    'via-slate-900',
    // Light theme (beyaz/gri)
    'from-gray-50', 'via-white', 'to-gray-100',
    // Card backgrounds
    'bg-slate-900/60', 'bg-slate-800/60', 'bg-white/60', 'bg-white/80',
    // Card borders
    'border-slate-700/50', 'border-orange-700/50', 'border-sky-200/50', 'border-purple-700/50', 'border-gray-200',
    // Text colors
    'text-white', 'text-slate-800', 'text-slate-400', 'text-slate-500', 'text-slate-600',
    'text-orange-300', 'text-purple-300',
    // Accent colors
    'text-cyan-400', 'text-amber-400', 'text-amber-500', 'text-purple-400',
    'bg-cyan-500', 'bg-amber-500', 'bg-purple-500',
    'bg-cyan-500/20', 'bg-amber-500/20', 'bg-purple-500/20',
    'border-cyan-500/50', 'border-amber-500/50', 'border-purple-500/50',
    // Glow effects
    'bg-indigo-500/30', 'bg-orange-500/30', 'bg-sky-500/25', 'bg-purple-500/30', 'bg-slate-500/25', 'bg-blue-500/15',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
