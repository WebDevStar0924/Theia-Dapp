import { FC, ReactComponentElement } from 'react'
import { SvgProps } from '../Svg'

export interface dropdownItem {
  value: string | number
  label: string
  startIcon?: ReactComponentElement<any>
  endIcon?: ReactComponentElement<any> | FC<SvgProps>
}

export interface dropdownProps {
  className?: string
  label?: string
  placeholder?: string
  activeItem: dropdownItem | null
  onChange?: (item: any) => void
  startIcon?: ReactComponentElement<any>
  endIcon?: ReactComponentElement<any> | FC<SvgProps>
  type: 'inactive' | 'active' | 'disabled' | 'error'
  errorMsg?: string
  dropdownlist: dropdownItem[]
  icon?: any
}
