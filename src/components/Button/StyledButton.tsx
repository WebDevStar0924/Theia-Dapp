import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { BaseButtonProps } from './types'

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean
}

const getDisabledStyles = ({ isLoading, theme }: TransientButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `
}

const removePointerEvents = ({ disabled, as }: TransientButtonProps) => {
  if (disabled && as && as !== 'button') {
    return `
      pointer-events: none;
    `
  }

  return ''
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? '.5' : '1'
}

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset'};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`

StyledButton.defaultProps = {
  type: 'button',
}

export default StyledButton
