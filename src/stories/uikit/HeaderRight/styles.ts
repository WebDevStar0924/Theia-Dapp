import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 40px;
  width: 331px;
  height: 48px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 100px;
  .connectButton {
    padding: 8px 0px;
    border-radius: 30px;
    background: #0f172a;
    width: 177px;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
`
