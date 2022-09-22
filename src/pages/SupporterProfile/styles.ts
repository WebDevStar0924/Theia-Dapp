import styled from "styled-components";

export const SupporterProfileContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  margin: 24px auto auto;

  .profileInfo {
    border-radius: 30px;
    background: #f9fafb;
    border: 1px solid #e4e7ec;
    position: relative;
    .banner {
      width: 100%;
      height: 230px;
      object-fit: cover;
      border-radius: 30px 30px 0 0;
    }

    .infoSection {
      display: flex;
      flex-direction: column;
      grid-gap: 10px;
      padding: 10px 20px 30px 250px;

      .name {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
        color: #101828;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 8px;
      }

      .userName {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
      }

      .shortDescription {
        margin-top: 10px;
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #101828;
        overflow-wrap: break-word;
      }

      .locationList {
        display: flex;
        flex-direction: row;
        margin-top: 11.85px;

        .location {
          margin-left: 9px;
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #667085;
        }
      }

      .tabList {
        display: flex;
        flex-direction: row;
        align-items: center;
        space-between: flex-start;
        grid-gap: 12px;

        .tabItem {
          background: #ffffff;
          border: 1px solid #ffffff;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 200px;
          font-family: "Montserrat", serif;
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
    }

    .Ellipse-80 {
      position: absolute;
      height: 160px;
      left: 14.93%;
      right: 73.96%;
      top: 256px;

      background: url(.png);
    }

    .userTag {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
      margin-bottom: 8px;
    }

    .userDescription {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #475467;
    }
  }

  .profileDetails {
    //background: #FFFFFF;
    border-radius: 16px;
  }

  .Elipse-80 {
    position: absolute;
    left: 60px;
    top: 150px;
  }

  .iconImage {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
