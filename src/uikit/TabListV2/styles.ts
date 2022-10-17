import styled from 'styled-components'

export const TabListV2Wrapper = styled.div<{
  gridGap?: string
  direction?: string
  minWidth?: string
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  grid-gap: ${({ gridGap }) => gridGap ?? '30px'};

  .tabItem {
    cursor: pointer;
    background: #ffffff;
    border-radius: 200px;
    padding: 8px 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 12px;
    height: 40px;
    width: ${({ minWidth }) => minWidth ?? 'inherit'};
    // flex: 1;

    .tabContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
    }

    &:hover {
      background: #f2f4f7;
    }
    &.active {
      background: #101828;
      border-radius: 200px;
      border-color: #101828;
      color: #ffffff;
      &:hover {
        background: #f2f4f7;
        color: #000;
        .tabContent {
          svg {
            color: #000;
            path {
              fill: #000;
            }
          }
        }
      }

      .tabContent {
        svg {
          color: #fff;
          path {
            fill: #fff;
          }
        }
      }
    }
  }
`
