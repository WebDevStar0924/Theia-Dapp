import styled from 'styled-components'

export const MintCard = styled.div<{ background: string }>`
  width: 300px;
  height: 400px;
  background: url(${({ background }) => background});
  padding: 40px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid transparent;
    border-radius: 16px;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    background: linear-gradient(
      116.62deg,
      rgba(255, 255, 255, 0.4) 1.54%,
      rgba(255, 255, 255, 0.1) 70.68%
    );
    mask-composite: exclude;
  }
`
