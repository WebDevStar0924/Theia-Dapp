import styled from "styled-components";

export const CardWrapper = styled.div<{
  padding?: string;
  borderWidth?: string;
}>`
  display: flex;
  flex-direction: column;
  border-width: ${({ borderWidth }) => borderWidth ?? "2px"}
  border-color: #e4e7ec;
  border-radius: 16px;
  overflow: hidden;
  @media (max-width: 1440px) {
    max-width: 590px;
  }
  .cardHeader {
    padding: 6px 16px;
    background: #f2f4f7;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #0f1419;
  }
  .cardContent {
    padding: ${({ padding }) => padding ?? "20px"};
  }
`;
