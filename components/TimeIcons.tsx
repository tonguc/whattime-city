import { TimeOfDay } from '@/lib/sun-calculator'

interface IconProps {
  className?: string
}

export const TimeIcons: Record<TimeOfDay, React.FC<IconProps>> = {
  night: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  dawn: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M5 12H2" />
      <path d="M22 12h-3" />
      <path d="M6.34 6.34L4.93 4.93" />
      <path d="M17.66 6.34l1.41-1.41" />
      <path d="M18 12a6 6 0 0 0-12 0" />
      <path d="M2 18h20" />
    </svg>
  ),
  day: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  dusk: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 10v4" />
      <path d="M5 12H2" />
      <path d="M22 12h-3" />
      <path d="M6.34 17.66L4.93 19.07" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M18 12a6 6 0 0 1-12 0" />
      <path d="M2 6h20" />
    </svg>
  )
}

export default TimeIcons
