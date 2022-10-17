import styled from 'styled-components'

export const CollectiveLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  background: white;
  .collectiveDetails {
    display: flex;
    flex-direction: column;
    flex: 1;
  

    max-height: calc(100vh - 96px);
    overflow-y: scroll;
  }
  .collectiveLayout {
     display: flex;
     flexDirection: row ;
     border-left: solid 1px #e4e7ec;
`

export const CollectiveHeaderWrapper = styled.div`
  background: #ffffff;
  position: relative;
  border: solid 1px #e4e7ec;

  .bannerImg {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .avatarImg {
    position: absolute;
    top: 80px;
    left: 46px;
    width: 160px;
    height: 160px;
    border: 2px solid #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);
    border-radius: 100px;
  }

  .detailActions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-left: 227px;
    margin-top: 14px;
    margin-bottom: 14px;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #101828;
      margin-bottom: 12px;
    }
    .shortDescription {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #475467;
    }

    .detailMore {
      display: flex;

      .stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 64px;
        background: #f2f4f7;
        border-radius: 16px;
        margin-right: 16px;

        .stats_value {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #000000;
        }
        .stats_label {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #475467;
        }
      }
      .detailMoreBtn2 {
        margin-left: 24px;
        margin-right: 24px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        color: #667085;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 12px;
        float: right;
        min-width: 80px;
        padding: 4px 12px;
        svg {
          fill: #667085;
        }
        &:hover {
          border: 2px solid rgba(18, 183, 106, 0.5);
          box-shadow: 0px 0px 4px 2px rgba(18, 183, 106, 0.2);
          color: rgba(18, 183, 106, 0.8);
          svg {
            color: rgba(18, 183, 106, 0.8);
            fill: rgba(18, 183, 106, 0.8);
          }
        }
        &.active {
          border: 3px solid #12b76a;
          color: #039855;
        }
      }
    }
  }
`

export const CollectiveSidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  position: sticky;
  top: 0px;
  flex-direction: column;
  align-items: center;
  padding: 24px 6px;
  gap: 20px;
  min-width: 200px;
  border-right: 1px solid #e4e7ec;
  background: #ffffff;
  .userNftAvatar {
    width: 150px;
    height: 150px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
    clip-path: polygon(
      45% 1.33975%,
      46.5798% 0.60307%,
      48.26352% 0.15192%,
      50% 0%,
      51.73648% 0.15192%,
      53.4202% 0.60307%,
      55% 1.33975%,
      89.64102% 21.33975%,
      91.06889% 22.33956%,
      92.30146% 23.57212%,
      93.30127% 25%,
      94.03794% 26.5798%,
      94.48909% 28.26352%,
      94.64102% 30%,
      94.64102% 70%,
      94.48909% 71.73648%,
      94.03794% 73.4202%,
      93.30127% 75%,
      92.30146% 76.42788%,
      91.06889% 77.66044%,
      89.64102% 78.66025%,
      55% 98.66025%,
      53.4202% 99.39693%,
      51.73648% 99.84808%,
      50% 100%,
      48.26352% 99.84808%,
      46.5798% 99.39693%,
      45% 98.66025%,
      10.35898% 78.66025%,
      8.93111% 77.66044%,
      7.69854% 76.42788%,
      6.69873% 75%,
      5.96206% 73.4202%,
      5.51091% 71.73648%,
      5.35898% 70%,
      5.35898% 30%,
      5.51091% 28.26352%,
      5.96206% 26.5798%,
      6.69873% 25%,
      7.69854% 23.57212%,
      8.93111% 22.33956%,
      10.35898% 21.33975%
    );
  }

  .createBtns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;

    .eventToggleBtn {
      cursor: pointer;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: #e4e7ec;
      position: relative;

      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover {
        background: #d0d5dd;
      }

      &.active {
        background: #e0eaff;
        svg {
          color: #444ce7;
        }
      }
    }

    .eventBtn {
      cursor: pointer;
      width: 124px;
      height: 48px;

      border: 2px solid #e4e7ec;
      border-radius: 200px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #101828;

      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      padding: 0 20px;

      &:hover {
        border: 2px solid #8098f9;
      }
      span {
        text-transform: uppercase;
      }
    }
  }
`

export const CollectiveSidebarMinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 8px;
  margin: 24px;
  position: sticky;
  top: 24px;
  width: 72px;
  height: 390px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  .tabItem {
    width: 56px !important;
    height: 56px !important;
    border-radius: 50%;
    justify-content: center;
  }
  .userNftAvatar {
    width: 56px;
    height: 56px;
    margin-bottom: 30px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
    clip-path: polygon(
      45% 1.33975%,
      46.5798% 0.60307%,
      48.26352% 0.15192%,
      50% 0%,
      51.73648% 0.15192%,
      53.4202% 0.60307%,
      55% 1.33975%,
      89.64102% 21.33975%,
      91.06889% 22.33956%,
      92.30146% 23.57212%,
      93.30127% 25%,
      94.03794% 26.5798%,
      94.48909% 28.26352%,
      94.64102% 30%,
      94.64102% 70%,
      94.48909% 71.73648%,
      94.03794% 73.4202%,
      93.30127% 75%,
      92.30146% 76.42788%,
      91.06889% 77.66044%,
      89.64102% 78.66025%,
      55% 98.66025%,
      53.4202% 99.39693%,
      51.73648% 99.84808%,
      50% 100%,
      48.26352% 99.84808%,
      46.5798% 99.39693%,
      45% 98.66025%,
      10.35898% 78.66025%,
      8.93111% 77.66044%,
      7.69854% 76.42788%,
      6.69873% 75%,
      5.96206% 73.4202%,
      5.51091% 71.73648%,
      5.35898% 70%,
      5.35898% 30%,
      5.51091% 28.26352%,
      5.96206% 26.5798%,
      6.69873% 25%,
      7.69854% 23.57212%,
      8.93111% 22.33956%,
      10.35898% 21.33975%
    );
  }

  .createBtns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;

    .eventToggleBtn {
      cursor: pointer;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: #e4e7ec;
      position: relative;

      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover {
        background: #d0d5dd;
      }

      &.active {
        background: #e0eaff;
        svg {
          color: #444ce7;
        }
      }
    }

    .eventBtn {
      cursor: pointer;
      width: 124px;
      height: 48px;

      border: 2px solid #e4e7ec;
      border-radius: 200px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #101828;

      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      padding: 0 20px;

      &:hover {
        border: 2px solid #8098f9;
      }
      span {
        text-transform: uppercase;
      }
    }
  }
`
