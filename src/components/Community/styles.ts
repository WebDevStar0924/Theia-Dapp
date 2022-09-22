import styled from "styled-components";

export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 32px;
  align-items: center;

  img {
    width: 488px;
    height: 488px;
  }
`;

export const CommunityLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  .communityName {
    font-size: 60px;
    line-height: 72px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.textGray};
  }

  .communityDesc {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.link};
  }

  .buttonGroup {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    button {
      text-transform: uppercase;
    }
  }
`;
