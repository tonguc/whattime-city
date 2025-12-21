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
    // Day theme (AUTO - MAVI)
    'from-blue-500', 'via-sky-400', 'to-cyan-400',
    // Dusk theme
    'from-purple-900', 'via-rose-900', 'to-orange-900',
    // Dark theme
    'from-slate-950', 'via-slate-900', 'to-slate-950',
    // Light theme (BEYAZ)
    'from-gray-100', 'via-white', 'to-gray-100',
    // Card backgrounds
    'bg-slate-900/60', 'bg-slate-800/60', 'bg-white/60', 'bg-white/80', 'bg-white/90', 'bg-white/95', 'bg-white',
    // Card borders
    'border-slate-700/50', 'border-orange-700/50', 'border-sky-200/50', 'border-purple-700/50', 
    'border-gray-200', 'border-slate-200', 'border-blue-400/50', 'border-blue-500/40',
    // Text colors
    'text-white', 'text-slate-800', 'text-slate-900', 'text-slate-400', 'text-slate-500', 'text-slate-600', 'text-slate-700',
    'text-orange-300', 'text-purple-300',
    // Accent colors
    'text-cyan-400', 'text-amber-400', 'text-amber-500', 'text-amber-600', 'text-purple-400', 'text-blue-500', 'text-blue-600',
    'bg-cyan-500', 'bg-amber-500', 'bg-purple-500', 'bg-blue-500', 'bg-slate-600',
    'bg-cyan-500/20', 'bg-amber-500/20', 'bg-amber-500/25', 'bg-purple-500/20', 'bg-blue-500/20', 'bg-slate-500/20',
    'border-cyan-500/50', 'border-amber-500/50', 'border-purple-500/50', 'border-blue-500/50', 'border-slate-300',
    // Glow effects
    'bg-indigo-500/30', 'bg-orange-500/30', 'bg-yellow-300/40', 'bg-purple-500/30', 'bg-slate-500/25', 'bg-slate-200/50', 'bg-slate-300/30',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
