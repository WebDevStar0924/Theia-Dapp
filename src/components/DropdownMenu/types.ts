import { ReactNode } from 'react'
export interface DropdownMenuItemProps {
  startIcon?: ReactNode
  endIcon?: ReactNode
  text: string
  subtitle?: string
  onClick?: () => void
}
export interface DropdownMenuProps {
  header: ReactNode
  menulist: DropdownMenuItemProps[]
}
