import styled from "styled-components";

export const TabListWrapper = styled.div<{
  gridGap?: string;
  direction?: string;
  minWidth?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction ?? "row"};
  grid-gap: ${({ gridGap }) => gridGap ?? "20px"};

  .tabItem {
    cursor: pointer;
    background: #ffffff;
    border: 2px solid #e4e7ec;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 200px;
    padding: 8px 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 12px;
    height: 40px;
    min-width: ${({ minWidth }) => minWidth ?? "inherit"};
    flex: 1;

    .tabContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
    }

    &:hover {
      border: 2px solid #677172;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;
      color: #101828;
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
    &.active {
      background: #101828;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 200px;
      border-color: #101828;
      color: #ffffff;
      &:hover {
        color: #101828 !important;
        background: #fff !important;
        -webkit-background-clip: inherit;
        -webkit-text-fill-color: inherit;
        background-clip: inherit;
        text-fill-color: inherit;
      }

      .tabContent {
        svg {
          color: #fff;
        }
      }
    }
  }
`;
