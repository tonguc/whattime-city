/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'from-slate-950', 'via-indigo-950', 'to-slate-950',
    'from-slate-900', 'via-orange-900', 'to-amber-800',
    'from-sky-100', 'via-blue-100', 'to-cyan-100',
    'from-purple-900', 'via-rose-900', 'to-orange-900',
    'from-gray-50', 'via-white', 'to-gray-100',
    'bg-slate-900/60', 'bg-slate-800/60', 'bg-white/60', 'bg-white/80',
    'border-slate-700/50', 'border-orange-700/50', 'border-sky-200/50', 'border-purple-700/50', 'border-gray-200',
    'text-white', 'text-slate-800', 'text-slate-400', 'text-slate-500', 'text-slate-600',
    'text-orange-300', 'text-purple-300',
    'text-cyan-400', 'text-amber-400', 'text-amber-500', 'text-purple-400',
    'bg-cyan-500', 'bg-amber-500', 'bg-purple-500',
    'bg-cyan-500/20', 'bg-amber-500/20', 'bg-purple-500/20',
    'border-cyan-500/50', 'border-amber-500/50', 'border-purple-500/50',
    'bg-indigo-500/10', 'bg-orange-500/10', 'bg-sky-500/10', 'bg-purple-500/10', 'bg-slate-500/10', 'bg-blue-500/5',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
