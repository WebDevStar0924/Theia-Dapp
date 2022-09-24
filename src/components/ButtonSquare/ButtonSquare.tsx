import React from 'react'
import StyledButton from './StyledButton'
import { ButtonSquareProps, variants, sizes } from './types'
import getExternalLinkProps from '../../utils/getExternalLinkProps'

const ButtonSquare: React.FC<ButtonSquareProps> = ({
  startIcon,
  endIcon,
  children,
  external,
  isLoading,
  disabled,
  fontFamily,
  color,
  ...props
}) => {
  const internalProps = external ? getExternalLinkProps() : {}
  const isDisabled = isLoading || disabled

  return (
    <StyledButton
      {...internalProps}
      {...props}
      isLoading={isLoading}
      disabled={isDisabled}
      fontFamily={fontFamily}
      color={color}
    >
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon as React.ReactElement<any>, {
          mr: '0.5rem',
        })}
      {children}``
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon as React.ReactElement<any>, {
          ml: '0.5rem',
        })}
    </StyledButton>
  )
}

ButtonSquare.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
}

export default ButtonSquare
