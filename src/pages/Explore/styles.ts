import styled from 'styled-components'

export const ExploreWrapper = styled.div`
  .exploreHeader {
    display: flex;
    flex-direction: row;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    margin-top: 35px;
    margin-bottom: 33px;

    color: #101828;
    .collectivesFont {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      background: linear-gradient(
        269.15deg,
        #d350e2 0.2%,
        #fccb42 30.86%,
        #65e3f2 64.13%,
        #013ada 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .artFont {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-left: -1;
    }

    .musicFont {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      background: linear-gradient(254.81deg, #1a50ff 8.13%, #1ee9b6 92.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .gamingFont {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      background: linear-gradient(
        180deg,
        #e53e3e 0%,
        #dd6b20 50.52%,
        #d69e2e 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .filmFont {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      width: 100%;
      text-align: left;
      margin-left: 15px;
      background: linear-gradient(254.81deg, #fa0082 8.13%, #d96ff8 92.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .tabList {
    display: flex;
    flex-direction: row;
    align-items: center;
    space-between: flex-start;
    grid-gap: 12px;
    margin-bottom: 48px;

    .tabItem {
      background: #ffffff;
      border: 1px solid #ffffff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 200px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #667085;
      cursor: pointer;
      padding: 8px 24px;

      &.active {
        border: 1px solid #101828;
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 200px;
        color: #101828;
      }
    }
  }
`

export const ListContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  overflow: auto;
  background-color: #fafafa;
`
