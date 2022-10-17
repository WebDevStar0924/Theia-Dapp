import { ComponentProps, ElementType, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LayoutProps, SpaceProps } from 'styled-system'

export const sizes = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
} as const

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
  YELLOW: 'yellow',
} as const

export type Sizes = typeof sizes[keyof typeof sizes]
export type Variants = typeof variants[keyof typeof variants]

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: 'a' | 'button' | typeof Link
  borderRadius?: string
  external?: boolean
  isLoading?: boolean
  scale?: Sizes
  variant?: Variants
  fontSize?: string
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  boxShadow?: string
}

export type ButtonThemeVariant = {
  background: string
  backgroundActive: string
  backgroundHover: string
  border: string | number
  borderColorHover: string
  boxShadow: string
  boxShadowActive: string
  color: string
}

export type ButtonTheme = {
  [key in Variants]: ButtonThemeVariant
}
export type AsProps<E extends ElementType = ElementType> = {
  as?: E
}

export type MergeProps<E extends ElementType> = AsProps<E> &
  Omit<ComponentProps<E>, keyof AsProps>

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  MergeProps<E>

export type PolymorphicComponent<P, D extends ElementType = 'button'> = <
  E extends ElementType = D,
>(
  props: PolymorphicComponentProps<E, P>,
) => ReactElement | null

export type ButtonProps<P extends ElementType = 'button'> =
  PolymorphicComponentProps<P, BaseButtonProps>
