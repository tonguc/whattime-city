import { TimeOfDay } from '@/lib/sun-calculator'

interface IconProps {
  className?: string
}

export const TimeIcons: Record<TimeOfDay, React.FC<IconProps>> = {
  // Night: Crescent moon with stars
  night: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
      <circle cx="6" cy="6" r="1" />
      <circle cx="18" cy="8" r="0.75" />
      <circle cx="8" cy="4" r="0.5" />
    </svg>
  ),
  
  // Dawn: Half sun rising above horizon with rays pointing up
  dawn: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Horizon line */}
      <rect x="2" y="15" width="20" height="2" rx="1" />
      {/* Half sun */}
      <path d="M12 16c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" />
      {/* Rays pointing up */}
      <rect x="11" y="2" width="2" height="4" rx="1" />
      <rect x="17.5" y="5.5" width="2" height="4" rx="1" transform="rotate(45 18.5 7.5)" />
      <rect x="4.5" y="5.5" width="2" height="4" rx="1" transform="rotate(-45 5.5 7.5)" />
    </svg>
  ),
  
  // Day: Full sun with rays
  day: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Sun circle */}
      <circle cx="12" cy="12" r="5" />
      {/* Rays */}
      <rect x="11" y="1" width="2" height="4" rx="1" />
      <rect x="11" y="19" width="2" height="4" rx="1" />
      <rect x="1" y="11" width="4" height="2" rx="1" />
      <rect x="19" y="11" width="4" height="2" rx="1" />
      <rect x="4.22" y="4.22" width="2" height="4" rx="1" transform="rotate(-45 5.22 6.22)" />
      <rect x="17.78" y="4.22" width="2" height="4" rx="1" transform="rotate(45 18.78 6.22)" />
      <rect x="4.22" y="15.78" width="2" height="4" rx="1" transform="rotate(45 5.22 17.78)" />
      <rect x="17.78" y="15.78" width="2" height="4" rx="1" transform="rotate(-45 18.78 17.78)" />
    </svg>
  ),
  
  // Dusk: Half sun setting below horizon with rays pointing down
  dusk: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Horizon line */}
      <rect x="2" y="9" width="20" height="2" rx="1" />
      {/* Half sun below */}
      <path d="M12 10c3.31 0 6 2.69 6 6H6c0-3.31 2.69-6 6-6z" />
      {/* Rays pointing down */}
      <rect x="11" y="18" width="2" height="4" rx="1" />
      <rect x="17.5" y="14.5" width="2" height="4" rx="1" transform="rotate(-45 18.5 16.5)" />
      <rect x="4.5" y="14.5" width="2" height="4" rx="1" transform="rotate(45 5.5 16.5)" />
    </svg>
  )
}

export default TimeIcons
