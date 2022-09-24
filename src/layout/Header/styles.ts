import styled from 'styled-components'

export const HeaderWrapper = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: #e4e7ec;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 30px 30px;
  z-index: 10;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;

  .headerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .connectWalletBtn {
    background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 200px;

    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
  }

  .keywordMenu {
    border-radius: 16px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
    background: #fff;
    padding: 10px 0;
    position: fixed;
    overflow: auto;
    max-height: 50%;

    .keywordHeader {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      padding: 15px;
    }
  }

  .keywordInput {
    margin-left: 80px;
    margin-right: 40px;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 16px;
    border: 1px solid #e4e7ec;
    border-radius: 50px;
    height: 40px;
    .searchIcon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      border-radius: 50px;
      padding-left: 55px;
      padding-right: 16px;
      flex: 1;
      outline: 0;
      border: none;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #667085;
      height: 100%;
    }
  }

  .themeSwitcher {
    margin-left: 40px;
    margin-right: 40px;

    .react-switch-bg {
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 53px !important;
      }
    }

    .react-switch-handle {
      height: 34px !important;
      width: 53px !important;
      top: 3px !important;

      & > div {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 32px;

  a {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.link};
  }
`

export const KeywordCollectiveItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 10px;
  padding: 5px 15px;

  .icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 6px;
  }

  .collectiveName {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }
`
