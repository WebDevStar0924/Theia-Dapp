import styled from 'styled-components'

export const WineButtonWrapper = styled.div<{ active: boolean; size: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
  line-height: ${({ size }) => (size === 'sm' ? '12px' : '20px')};
  color: ${({ active }) => (active ? '#039855' : '#667085')};

  svg {
    width: ${({ size }) => (size === 'sm' ? '16px' : '20px')};
  }

  &:hover {
    color: rgba(18, 183, 106, 0.8);
  }
`
