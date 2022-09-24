import styled from 'styled-components'

export const StyledShareArtContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
  }

  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
    margin-top: 16px;
  }

  .artList {
    margin-top: 20px;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    max-height: 360px;
    grid-gap: 20px;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    .artItem {
      position: relative;
      width: 168px;
      height: 168px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .artImage {
        width: 168px;
      }
      .removedArtImage {
        width: 168px;
        height: 168px;
        opacity: 0.4;
      }
      .artChecked {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px white;
        background: #1d9bf0;
        text-align: center;
        padding: 6px 0;
      }
      .artRemoved {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px white;
        text-align: center;
        background: #98a2b3;
        padding: 2px 0;
      }
      .artNoneCheck {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px white;
        background: #98a2b3;
      }
    }
  }

  .actions {
    margin: 32px auto 0 auto;
  }
  .closeBtn {
    border: 1px solid #d0d5dd;
    position: absolute;
    right: 0;
    top: 0;
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }
`

export const StyledBecomeMemberContent = styled.div`
  .close {
    position: absolute;
    top: 24px;
    right: 32px;
    cursor: pointer;
  }
  .title {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    text-align: center;
  }

  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .lockIcon {
      width: 50px;
      height: 50px;
    }
  }

  .actions {
    margin: 32px auto 0 auto;
    text-align: center;

    .actionBtn {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #ffffff;
      padding: 16px 28px;
      cursor: pointer;
      background: linear-gradient(
        90deg,
        #00b5d8 0%,
        #3182ce 50.52%,
        #805ad5 100%
      );
      box-shadow: 0px 1px 2px 0px #1018280d;
      border-radius: 200px;
      display: inline-block;
    }
  }
`

export const ArtDetailContent = styled.div`
  position: relative;

  .galleryDetailHeader {
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;

    .creatorAvatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }
    .username {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
    }
    .userTag {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #ffffff;
      padding: 1px 12px;
      background: #a4bcfd;
      border-radius: 16px;
      @media (max-width: 1024px) {
        font-size: 9px;
      }
    }
    .createTime {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #98a2b3;
      text-transform: uppercase;
      @media (max-width: 1024px) {
        font-size: 10px;
      }
    }
  }

  .dActions {
    display: flex;
    align-items: center;
    padding: 24px;
    justify-content: space-between;

    .detailMoreBtn {
      margin-right: 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      height: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 12px;
      float: right;
      min-width: 80px;
      padding: 4px 16px 4px 16px;
      &.inActive:hover {
        border: 2px solid rgba(240, 68, 56, 0.5);
        box-shadow: 0px 0px 4px 2px rgba(240, 68, 56, 0.2);
        color: rgba(240, 68, 56, 0.8);
      }
      &.active {
        border: 3px solid #f04438;
        color: #d92d20;
      }
    }

    .detailActionBtn {
      margin-left: 40px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 10px;
      padding: 4px 12px;
      min-width: unset;
      border-radius: unset;
      border: unset;
    }
  }
  .commentReply {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    border-top: 1px solid #e4e7ec;

    .inputWrapper {
      border: none;
      outline: none;
      box-shadow: none;
      .input {
        font-family: 'Montserrat', sans-serif;
        outline: none;
        border: none;
      }
    }

    &.subComment {
      border-radius: 15px;
      border: 1px solid #e4e7ec;
      margin-top: 5px;
    }

    .userImage {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .userDefaultImage {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
      border: 2px solid #e4e7ec;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }
    .commentInput {
      flex-grow: 1;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin: 0 4px 0 24px;
      padding: 8px 6px;
      border: none;
      outline: none;
    }
    .replyAction {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #667085;
      cursor: pointer;
    }
  }

  .detailComments {
    border-radius: 15px;
    .commentList {
      border-bottom: 1px solid #e4e7ec;
      border-top: 1px solid #e4e7ec;
      padding: 10px 24px;
    }
    .commentReply {
      display: flex;
      align-items: center;
      padding: 10px 24px;

      &.subComment {
        border-radius: 15px;
        border: 1px solid #e4e7ec;
        margin-top: 5px;
      }

      .userImage {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
      .userDefaultImage {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
        border: 2px solid #e4e7ec;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }
      .commentInput {
        flex-grow: 1;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin: 0 4px 0 24px;
        padding: 8px 6px;
        border: unset;
      }
      .replyAction {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
        cursor: pointer;
      }
    }
    &.noneComments {
      .commentList {
        border: none;
      }
      .commentReply {
        border-radius: 15px;
        border: 1px solid #e4e7ec;
      }
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    grid-gap: 24px;
    padding: 20px;
    justify-content: center;
    .detailLeft {
      display: flex;
      flex-direction: row;
      justify-content: end;
      .artImage {
        height: 360px;
        border-radius: 16px;
        border: none;
        img {
          width: 100%;
        }
      }
    }

    .detailRight {
      max-width: 200px;
      .name {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: black;
      }
      .description {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        margin-top: 5px;
      }
      .artDescription {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-top: 25px;
      }
      .dContent {
        margin-top: 25px;
        word-break: break-all;
        .dLabel {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
        }
        .dOwnerContent {
          margin-top: 5px;
          display: flex;
          padding: 10px 20px 10px 20px;
          border-radius: 30px;
          border: 1px solid #d0d5dd;
        }
        .dText {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
        .detailAction {
          cursor: pointer;
        }
        .detailLink {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .dOwnerContent {
        display: flex;
        align-items: center;
        .ownerImage {
          width: 44px;
          height: 44px;
          border-radius: 22px;
        }
        .ownerDefaultImage {
          width: 44px;
          height: 44px;
          border-radius: 22px;
          background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
          border: 2px solid #e4e7ec;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        }
        .ownerContent {
          margin-left: 10px;
          flex-grow: 1;
          .contentHeader {
            display: flex;
            align-items: center;

            .ownerName {
              font-weight: 700;
              font-size: 16px;
              line-height: 24px;
              color: rgba(0, 0, 0, 0.8);
            }
          }
          .ownerId {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
          }
        }
        .followAction {
          background: #444ce7;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 16px;
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          padding: 6px 16px;
          cursor: pointer;
        }
      }
    }

    .userType {
      margin-left: 14px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      padding: 1px 12px;
      border-radius: 16px;
      color: #ffffff;
    }

    .adminTag {
      background-color: #2d31a6;
    }

    .coreTag {
      background-color: #8098f9;
    }

    .whaleTag {
      background-color: #a4bcfd;
    }

    .memberTag {
      background-color: #a4bcfd;
    }
  }
`

export const ReplyItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .userImage {
    width: 40px;
    height: 40px;
    border-radius: 22px;
  }
  .userDefaultImage {
    width: 40px;
    height: 40px;
    border-radius: 22px;
    background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
    border: 2px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  }
  .replyContent {
    flex-grow: 1;
    width: 100%;
    .replyHeader {
      display: flex;
      align-items: center;
      padding: 8px 0;
      .replyOwner {
        flex-grow: 1;
        display: flex;
        align-items: center;
        .userDefaultImage {
          width: 40px;
          height: 40px;
          border-radius: 22px;
          background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
          border: 2px solid #e4e7ec;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        }
        .userName {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          margin-left: 14px;
          color: rgba(0, 0, 0, 0.8);
        }
      }
      .favouriteAction {
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .replyMessage {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-left: 50px;
    }
  }

  .replyAction2 {
    margin-top: 10px;
    align-items: center;
    display: flex;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    grid-gap: 8px;
    cursor: pointer;
    margin-left: 50px;
  }

  .replyAction1 {
    margin-top: 10px;
    align-items: center;
    font-weight: 500;
    margin-left: 50px;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    grid-gap: 8px;
    cursor: pointer;
    .line {
      display: flex;
      .replyLine {
        border: 1px solid #667085;
        width: 30px;
        margin-right: 8px;
        height: 1px;
        margin-top: 8px;
      }
    }
  }

  .userType {
    margin-left: 14px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    padding: 1px 12px;
    border-radius: 16px;
    color: #ffffff;
  }

  .adminTag {
    background-color: #2d31a6;
  }

  .coreTag {
    background-color: #8098f9;
  }

  .whaleTag {
    background-color: #a4bcfd;
  }

  .memberTag {
    background-color: #a4bcfd;
  }
`
