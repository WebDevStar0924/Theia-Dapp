import styled from "styled-components";

export const CollectiveCardWrapper = styled.div`
  display: inline-block;
  background: #f2f4f7;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  width: 280px;
  height: 280px;
  position: relative;
  cursor: pointer;

  .favoriteIcon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .collectiveIcon {
    border-radius: 10px 10px 0 0;
    //width: 280px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }

  .favorite {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 12px;
    position: absolute;
    left: 205px;
    top: 10px;
  }

  .collectionInfo {
    padding: 12px 18px;
    display: flex;
    flex-direction: column;
    grid-gap: 7px;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 200px;

    .collectiveName {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #101828;
    }

    .collectionTags {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      grid-gap: 6px;
      text-transform: uppercase;

      .collectiveType {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid transparent;
          border-radius: 10px;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }

        &.gaming {
          &:before {
            background: linear-gradient(
                180deg,
                #e53e3e 0%,
                #dd6b20 50.52%,
                #d69e2e 100%
              )
              border-box;
          }

          span {
            background: linear-gradient(
              180deg,
              #e53e3e 0%,
              #dd6b20 50.52%,
              #d69e2e 100%
            );
            -webkit-background-clip: text, border;
            -webkit-text-fill-color: transparent;
          }
        }
        &.art {
          &:before {
            background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%)
              border-box;
          }

          span {
            background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
            -webkit-background-clip: text, border;
            -webkit-text-fill-color: transparent;
          }
        }
        &.music {
          &:before {
            background: linear-gradient(
                254.81deg,
                #1a50ff 8.13%,
                #1ee9b6 92.46%
              )
              border-box;
          }

          span {
            background: linear-gradient(
              254.81deg,
              #1a50ff 8.13%,
              #1ee9b6 92.46%
            );
            -webkit-background-clip: text, border;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      .collectiveMembers {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #101828;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
`;
