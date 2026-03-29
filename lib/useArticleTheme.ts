'use client'
import { useCityContext } from '@/lib/CityContext'

export function useArticleTheme() {
  const { isLight } = useCityContext()

  return {
    // Text
    heading:  isLight ? 'text-slate-800' : 'text-slate-100',
    subheading: isLight ? 'text-slate-700' : 'text-slate-200',
    body:     isLight ? 'text-slate-700' : 'text-slate-300',
    muted:    isLight ? 'text-slate-500' : 'text-slate-400',

    // Cards
    card:     isLight
      ? 'rounded-xl border border-slate-200 bg-white'
      : 'rounded-xl border border-slate-700/50 bg-slate-800/60',
    cardAlt:  isLight
      ? 'rounded-xl border border-slate-200 bg-slate-50'
      : 'rounded-xl border border-slate-700/50 bg-slate-800/40',
    infoBox:  isLight
      ? 'rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700'
      : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 text-sm text-slate-300',
    highlight: isLight
      ? 'rounded-xl border border-amber-200 bg-amber-50 p-5'
      : 'rounded-xl border border-amber-800/30 bg-amber-900/20 p-5',
    highlightText: isLight ? 'text-amber-700' : 'text-amber-400',
    highlightBody: isLight ? 'text-slate-800' : 'text-slate-200',

    // Table
    tableWrapper: isLight
      ? 'overflow-x-auto rounded-xl border border-slate-200'
      : 'overflow-x-auto rounded-xl border border-slate-700/50',
    tableHead: isLight
      ? 'border-b border-slate-200 bg-slate-50'
      : 'border-b border-slate-700/50 bg-slate-700/30',
    tableHeadCell: isLight
      ? 'font-semibold text-slate-700'
      : 'font-semibold text-slate-200',
    tableRowEven: isLight ? 'bg-white' : 'bg-transparent',
    tableRowOdd:  isLight ? 'bg-slate-50/50' : 'bg-slate-700/10',
    tableRowBorder: isLight ? 'border-b border-slate-100' : 'border-b border-slate-700/30',
    tableRowCurrent: isLight ? 'bg-amber-50' : 'bg-amber-900/20',
    tableCell: isLight ? 'text-slate-700' : 'text-slate-300',

    // Breadcrumb
    breadcrumb: isLight ? 'text-slate-500' : 'text-slate-400',
    breadcrumbLink: isLight ? 'hover:text-slate-700 underline' : 'hover:text-slate-200 underline',
    breadcrumbSep:  isLight ? 'text-slate-400' : 'text-slate-500',
    breadcrumbCurrent: isLight ? 'text-slate-700' : 'text-slate-200',

    // Misc
    link:   'text-blue-600 underline hover:text-blue-800',
    footer: isLight
      ? 'rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500'
      : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 text-xs text-slate-400',
    divider: isLight ? 'border-slate-200' : 'border-slate-700/50',
  }
}
