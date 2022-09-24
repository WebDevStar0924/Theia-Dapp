import { FC, HTMLProps, ReactComponentElement } from 'react'
import { SvgProps } from '../Svg'

export interface externalInputProps extends HTMLProps<HTMLDivElement> {
  label?: string
  placeholder?: string
  value: string
  inputSize?: 'sm' | 'md' | 'lg'
  onUserInput?: (val: string) => void
  startIcon?: ReactComponentElement<any>
  endIcon?: ReactComponentElement<any> | FC<SvgProps>
  type: 'inactive' | 'active' | 'disabled' | 'error'
  errorMsg?: string
  inputType?: 'text' | 'number'
  className?: string
  fontSize?: string
  fontColor?: string
  borderRadius?: string
  onClick?: () => void
  noborder?: boolean
}
