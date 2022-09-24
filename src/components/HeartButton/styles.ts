import styled from 'styled-components'

export const HeartButtonWrapper = styled.div<{ active: boolean; size: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
  line-height: ${({ size }) => (size === 'sm' ? '12px' : '20px')};
  cursor: pointer;
  color: ${({ active }) => (active ? '#D92D20' : '#667085')};
  svg {
    width: ${({ size }) => (size === 'sm' ? '16px' : '20px')};
    height: ${({ size }) => (size === 'sm' ? '16px' : '20px')};
    color: ${({ active }) => (active ? '#D92D20' : '#667085')};
  }

  &:hover {
    color: rgba(240, 68, 56, 0.8);
    svg {
      color: rgba(240, 68, 56, 0.5);
    }
  }
`
