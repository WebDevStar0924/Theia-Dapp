import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 360px;
  // padding: 1px;
  &:hover {
    //   background: linear-gradient(90deg, #013ada, #65e3f2, #fccb42, #d350e2);
    //   padding: 3px;
    cursor: pointer;
    //   & > div {
    //     padding: 0 0;
    //   }
  }
`;

export const EventCardWrapper = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  border: 2px solid #e4e7ec;
  width: 360px;
  padding: 0;

  &:hover {
  }

  .headerImage {
    width: 100%;
    height: 200px;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;

    .virtual {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #ffffff;
      padding: 4px 8px;
      background: #5865f2;
      border-radius: 16px;
      @media (max-width: 1024px) {
        font-size: 9px;
      }
    }
    .bookmark {
      &:hover {
        cursor: pointer;
      }
    }

    .eventTitle {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #101828;
    }

    .eventDate {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #444ce7;
    }
    .eventContent {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #475467;
    }
    .calendarContainer {
      display: flex;
      justify-content: center;
      height: 40px;
      width: 40px;
      align-items: center;
      border-radius: 50%;
      background: #101828;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ForumCommentWrapper = styled.div`
  border: 2px solid #e4e7ec;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: #fff;

  .replyBtn {
    cursor: pointer;
    outline: none;
    border: none;
    background: #101828;
    border-radius: 200px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    padding: 4px 15px;

    &:disabled {
      color: #98a2b3;
      background: #e4e7ec;
    }
  }

  .cancelBtn {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 200px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
    padding: 4px 15px;
    cursor: pointer;
  }
  .imgBtn2 {
    margin-left: 30px;
  }
  .forum {
    flex: 1;
    padding: 0 16px;

    .forumCardHeader {
      padding: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 80px;

      .creatorAvatar {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }

      .userTag {
        font-family: "Montserrat";
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
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #98a2b3;
        text-transform: uppercase;
      }
    }

    .forumTitle {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #000000;
    }
    .forumImg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      img {
        width: 362px;
        height: 362px;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    .forumActions {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px 16px;
      justify-content: space-between;
    }
  }
`;
