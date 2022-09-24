import styled from 'styled-components'

export const StyledInputWrapper = styled.div<{ bgColor?: string }>`
  border-radius: 8px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ?? theme.isDark ? '#383838' : theme.colors.input};
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`
