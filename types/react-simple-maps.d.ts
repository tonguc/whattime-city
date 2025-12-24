declare module 'react-simple-maps' {
  import { ComponentType, ReactNode, CSSProperties } from 'react'

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      rotate?: [number, number, number]
      parallels?: [number, number]
    }
    width?: number
    height?: number
    style?: CSSProperties
    className?: string
    children?: ReactNode
  }

  export interface ZoomableGroupProps {
    center?: [number, number]
    zoom?: number
    minZoom?: number
    maxZoom?: number
    translateExtent?: [[number, number], [number, number]]
    onMoveStart?: (position: { coordinates: [number, number]; zoom: number }) => void
    onMove?: (position: { coordinates: [number, number]; zoom: number }) => void
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography: string | object
    children: (data: { geographies: GeographyType[] }) => ReactNode
  }

  export interface GeographyType {
    rsmKey: string
    properties: Record<string, unknown>
    geometry: object
  }

  export interface GeographyProps {
    geography: GeographyType
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: CSSProperties & { outline?: string }
      hover?: CSSProperties & { outline?: string; fill?: string }
      pressed?: CSSProperties & { outline?: string }
    }
    className?: string
    onMouseEnter?: (event: React.MouseEvent) => void
    onMouseLeave?: (event: React.MouseEvent) => void
    onClick?: (event: React.MouseEvent) => void
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    style?: {
      default?: CSSProperties
      hover?: CSSProperties
      pressed?: CSSProperties
    }
    className?: string
    onMouseEnter?: (event: React.MouseEvent) => void
    onMouseLeave?: (event: React.MouseEvent) => void
    onClick?: (event: React.MouseEvent) => void
  }

  export interface AnnotationProps {
    subject: [number, number]
    dx?: number
    dy?: number
    connectorProps?: object
    children?: ReactNode
  }

  export interface LineProps {
    from: [number, number]
    to: [number, number]
    stroke?: string
    strokeWidth?: number
    strokeLinecap?: string
  }

  export interface GraticuleProps {
    stroke?: string
    strokeWidth?: number
    step?: [number, number]
  }

  export interface SphereProps {
    id?: string
    fill?: string
    stroke?: string
    strokeWidth?: number
  }

  export const ComposableMap: ComponentType<ComposableMapProps>
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>
  export const Geographies: ComponentType<GeographiesProps>
  export const Geography: ComponentType<GeographyProps>
  export const Marker: ComponentType<MarkerProps>
  export const Annotation: ComponentType<AnnotationProps>
  export const Line: ComponentType<LineProps>
  export const Graticule: ComponentType<GraticuleProps>
  export const Sphere: ComponentType<SphereProps>
}
