/**
 * ClassName Utilities
 * Tailwind CSS class birleştirme için yardımcı fonksiyon
 * 
 * @example
 * import { cn } from '@/shared/utils/cn'
 * <div className={cn('base-class', isActive && 'active', className)} />
 */

type ClassValue = string | boolean | undefined | null | ClassValue[]

/**
 * Conditional className birleştirici
 * Falsy değerleri filtreler ve class'ları birleştirir
 * 
 * @param classes - Birleştirilecek class'lar
 * @returns Birleştirilmiş className string'i
 * 
 * @example
 * cn('btn', isLarge && 'btn-lg', isDisabled && 'opacity-50')
 * // isLarge=true, isDisabled=false -> 'btn btn-lg'
 */
export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter((c): c is string => typeof c === 'string' && c.length > 0)
    .join(' ')
}
