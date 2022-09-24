import styled from 'styled-components'

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: 2px solid #d0d5dd;
  box-sizing: border-box;
  cursor: pointer;
  svg {
    color: #667085;
  }

  &:hover {
    color: rgba(18, 183, 106, 0.8);
    svg {
      color: rgba(18, 183, 106, 0.8);
    }
  }
`
