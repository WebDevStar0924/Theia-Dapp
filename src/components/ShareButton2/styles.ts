import styled from "styled-components";

export const ShareButton2Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #667085;
  cursor: pointer;

  &:hover {
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
  }
`;
