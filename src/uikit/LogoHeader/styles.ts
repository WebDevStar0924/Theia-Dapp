import styled from 'styled-components'

export const LogoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 213px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  a {
    height: 32px;
  }
  .versionTag {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    background: linear-gradient(
      90.04deg,
      #677172 0%,
      #6e8082 28.16%,
      #b9b5b5 53.98%,
      #78726b 79.6%,
      #5f5e64 104.68%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-left: 8px;
  }
`
