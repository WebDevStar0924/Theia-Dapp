import React, { ElementType } from 'react'
import getExternalLinkProps from '../../utils/getExternalLinkProps'
import StyledButton from './StyledButton'
import { ButtonProps, sizes, variants } from './types'

const Button = <E extends ElementType = 'button'>(
  props: ButtonProps<E>,
): JSX.Element => {
  const {
    startIcon,
    endIcon,
    external,
    className,
    isLoading,
    disabled,
    children,
    ...rest
  } = props
  const internalProps = external ? getExternalLinkProps() : {}
  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon as React.ReactElement<any>, {
          mr: '0.5rem',
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon as React.ReactElement<any>, {
          ml: '0.5rem',
        })}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
}

export default Button
