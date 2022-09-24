import styled from 'styled-components'

export const ProgressBarWrapper = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  height: 8px;
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
`
