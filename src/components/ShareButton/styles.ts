import styled from "styled-components";

export const ShareButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 12px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #667085;
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
`;
