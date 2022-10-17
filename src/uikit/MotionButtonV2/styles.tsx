import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MotionButtonV2 = styled(motion.button)<{
  bgColor?: string
  color?: string
  disabled?: boolean
  borderRadius?: string
  borderColor?: string
  size?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight ?? '600'};
  font-size: ${({ fontSize }) => fontSize ?? '14px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '56px'};
  border-width: 1px;
  border-style: none;
  border-color: ${({ borderColor }) => borderColor ?? '#bbbbbb'};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? '#D0D5DD' : bgColor ?? theme.colors.background};
  color: ${({ theme, color, disabled }) =>
    disabled ? '#FFFFFF' : color ? color : theme.colors.textGray};
  line-height: ${({ lineHeight }) => lineHeight ?? '24px'};
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '12px 18px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: none;
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '136px')};
  max-height: 40px;
  :hover {
    background-color: #f2f4f7;
  }
  :active {
    background-color: #101828;
    color: white;
    svg {
      fill: white;
    }
  }
`

export const FilterButtonV2 = styled(motion.button)<{
  bgColor?: string
  color?: string
  disabled?: boolean
  borderRadius?: string
  borderColor?: string
  size?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight ?? '600'};
  font-size: ${({ fontSize }) => fontSize ?? '14px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '56px'};
  border-width: 1px;
  border-style: none;
  border-color: ${({ borderColor }) => borderColor ?? '#bbbbbb'};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? '#D0D5DD' : bgColor ?? theme.colors.background};
  color: ${({ theme, color, disabled }) =>
    disabled ? '#FFFFFF' : color ? color : theme.colors.textGray};
  line-height: ${({ lineHeight }) => lineHeight ?? '24px'};
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '12px 18px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '136px')};
  max-height: 40px;
  :hover {
    background-color: #f2f4f7;
  }
  :active {
    background-color: #101828;
    color: white;
    svg {
      fill: white;
    }
  }
`

export const IconButtonV2 = styled(motion.button)<{
  bgColor?: string
  color?: string
  disabled?: boolean
  borderRadius?: string
  borderColor?: string
  size?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '56px'};
  border-width: 1px;
  border-style: none;
  border-color: ${({ borderColor }) => borderColor ?? '#bababa'};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? '#D0D5DD' : bgColor ?? theme.colors.background};
  color: ${({ theme, color, disabled }) =>
    disabled ? '#FFFFFF' : color ? color : theme.colors.textGray};
  line-height: ${({ lineHeight }) => lineHeight ?? '24px'};
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '15px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '56px')};
  width: ${({ size }) => (size === 'sm' ? 'inherit' : '56px')};
  height: ${({ size }) => (size === 'sm' ? 'inherit' : '56px')};
  :hover {
    background-color: #f2f4f7;
  }
`
