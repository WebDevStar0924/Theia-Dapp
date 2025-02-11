import React from 'react'
import styled from 'styled-components'
import { escapeRegExp } from '../../utils'

export const StyledInput = styled.input<{
  error?: boolean
  fontSize?: string
  align?: string
}>`
  color: ${({ error, theme }) =>
    error ? theme.colors.failure : theme.colors.text};
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  text-align: ${({ align }) => align && align};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  -webkit-appearance: textfield;
  width: 100%;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

export const Input = React.memo(function InnerInput({
  value,
  onUserInput,
  placeholder,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  error?: boolean
  fontSize?: string
  align?: 'right' | 'left'
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }
  return (
    <>
      <StyledInput
        {...rest}
        value={value}
        onChange={(event) => {
          // replace commas with periods, because we exclusively uses period as the decimal separator
          const removedComma = event.target.value.replace(/,/g, '.')
          if (Number(removedComma) === 0) {
            if (removedComma.includes('.')) {
              enforcer(removedComma)
            } else {
              enforcer('0')
            }
          } else if (Number(removedComma) < 1) {
            enforcer(removedComma)
          } else {
            enforcer(removedComma.replace(/^0+/, ''))
          }
        }}
        // universal input options
        inputMode="decimal"
        title="Token Amount"
        autoComplete="off"
        autoCorrect="off"
        // text-specific options
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder={placeholder || '0.0'}
        minLength={1}
        maxLength={79}
        spellCheck="false"
        fontSize="22px"
        style={{ marginRight: '10px' }}
      />
    </>
  )
})

export default Input
