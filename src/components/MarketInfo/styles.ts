import styled from "styled-components";

export const MarketInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 64px;
  background-color: #ffffff;
`;

export const MarketInfoItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12px;

  .marketValue {
    font-size: 60px;
    line-height: 72px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textGray};
  }

  .marketName {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.link};
  }
`;
