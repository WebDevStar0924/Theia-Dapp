import styled from 'styled-components'

export const CommentCardContainer = styled.div`
  .commentItem {
    position: relative;
    &:before {
      content: '';
      width: 2px;
      left: 20px;
      top: 57px;
      bottom: -40px;
      position: absolute;
      background: #d0d5dd;
    }

    &:last-child {
      &:before {
        display: none;
      }
    }
  }
`
export const CommentCardWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: #fff;
  margin-top: 16px;
  border: 1px solid #e4e7ec;
  border-radius: 8px;
  display: flex;
  flex-direction: row;

  .commentBox {
    display: flex;
    flex-direction: column;
    padding: 10px 8px;
    flex: 1;

    .commentHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .userImage {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        border: 2px solid #e4e7ec;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }
      .creatorAvatar {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        position: relative;
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
      }
      .createTime {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #98a2b3;
        text-transform: uppercase;
      }
    }
    .commentContent {
      margin-top: 6px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #000000;
    }
    .commentActions {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 20px;
    }
  }
  .circleBtn {
    margin: 0 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 12px;
    cursor: pointer;

    &.reply {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #667085;

      &:hover {
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
    }
  }
`
