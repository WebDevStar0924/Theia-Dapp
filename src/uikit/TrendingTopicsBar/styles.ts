import styled from 'styled-components'

export const TrendingTopicsBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: white;
  height: 48px;
  padding: 8px 13px;
  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-left: 7px;
  }
  .trendItemList {
    overflow-x: scroll;
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 16px;
    padding-top: 16px;
    .trendItem {
      padding: 6px 16px;
      width: 86px;
      height: 28px;
      background: #f2f4f7;
      border-radius: 20px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #444ce7;
    }
  }
`
