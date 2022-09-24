import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MotionButton = styled(motion.button)<{
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
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor ?? '#bababa'};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? '#D0D5DD' : bgColor ?? theme.colors.background};
  color: ${({ theme, color, disabled }) =>
    disabled ? '#FFFFFF' : color ? color : theme.colors.textGray};
  line-height: ${({ lineHeight }) => lineHeight ?? '24px'};
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '12px 32px 12px 32px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '180px')};
`

export const TweetButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 16px;
  border-radius: 56px;
  background-color: rgb(29, 155, 240);
  color: #fff;
  line-height: 24px;
  padding: 12px 32px 12px 32px;
  cursor: pointer;
  min-width: 180px;
`

export const AddButton = styled(motion.button)<{
  bgColor?: string
  color?: string
  disabled?: boolean
  borderRadius?: string
  borderColor?: string
  size?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
  width: string
  height: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '56px'};
  width: ${({ width }) => width ?? ''};
  height: ${({ height }) => height ?? ''};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor ?? '#bababa'};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? '#D0D5DD' : bgColor ?? theme.colors.background};
  color: ${({ theme, color, disabled }) =>
    disabled ? '#FFFFFF' : color ? color : theme.colors.textGray};
  line-height: ${({ lineHeight }) => lineHeight ?? '24px'};
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '12px 32px 12px 32px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '180px')};
`

export const IconButton = styled(motion.button)<{
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
  padding: ${({ size }) => (size === 'sm' ? '7px 0' : '12px 32px 12px 32px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  box-shadow: ${({ disabled }) => (disabled ? 'none !important' : 'inherit')};
  min-width: ${({ size }) => (size === 'sm' ? 'inherit' : '180px')};
`
