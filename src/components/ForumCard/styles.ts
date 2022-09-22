import styled from "styled-components";

export const Card = styled.div`
  background: #e4e7ec;
  border-radius: 16px;
  padding: 1px;
  &:hover {
    background: linear-gradient(90deg, #013ada, #65e3f2, #fccb42, #d350e2);
    padding: 3px;
    cursor: pointer;
    & > div {
      padding: 0 0;
    }
  }
`;

export const Backbutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  padding: 10px 24px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const ForumCardWrapper = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background: #f9fafb;
  padding: 2px 2px;

  &:hover {
    border: none;
  }

  .forum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    background: #fff;
    @media (max-width: 1024px) {
      width: 360px;
    }

    .forumCardHeader {
      padding: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      padding-right: 20px;
      padding: 0 16px;

      .creatorAvatar {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }
      .username {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #101828;
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
        @media (max-width: 1024px) {
          font-size: 9px;
        }
      }
      .createTime {
        font-family: "Montserrat";
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

    .pollView {
      border-width: 1px 0px;
      border-style: solid;
      border-color: #e4e7ec;
      padding: 24px 16px;
      margin-top: 16px;
      .pollBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .pollOptionTitle {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #000000;
          background: #e4e7ec;
          height: 30px;
          border-radius: 8px;
          padding-left: 5px;
        }

        .pollOptionPercent {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: end;
          justify-content: end;
          color: #000000;
          width: 60px;
        }
      }

      .pollOptionList {
        display: flex;
        flex-direction: column;
        grid-gap: 16px;

        .pollOption {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #000000;

          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          user-select: none;

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }

          .radioCheckmark {
            position: absolute;
            top: -3px;
            left: 0;
            height: 30px;
            width: 30px;
            background-color: #fff;
            border: 2px solid #98a2b3;
            border-radius: 50%;

            &:after {
              content: "";
              position: absolute;
              display: none;

              top: 0;
              left: 0;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              background: #98a2b3;
            }
          }

          input:checked ~ .radioCheckmark:after {
            display: block;
          }

          &:hover {
            input ~ .radioCheckmark {
              background-color: #ccc;
            }

            input:checked ~ .radioCheckmark {
              background-color: #98a2b3;
            }
          }
        }
      }
      .pollActions {
        margin-top: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 24px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #475467;
        .pollVoteBtn {
          background: #101828;
          border-radius: 200px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-transform: uppercase;
          color: #ffffff;
          padding: 8px 24px;
          height: 40px;
        }
      }
    }

    .linkPreview {
      padding: 0 16px;
      margin-top: 16px;
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
      padding: 0 16px;
      margin-top: 8px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    .forumImg {
      margin-top: 16px;
      display: grid;
      grid-gap: 12px;
      padding: 0 16px;
      img {
        border-radius: 16px;
      }
      &.size-1 {
        img {
          max-width: 360px;
          margin: auto;
        }
      }
      &.size-2 {
        grid-template-columns: 1fr 1fr;
        img {
          max-width: 272px;
        }
      }
      &.size-3 {
        grid-template:
          "img0 img2"
          "img1 img2";
        .img0 {
          grid-area: img0;
        }
        .img1 {
          grid-area: img1;
        }
        .img2 {
          grid-area: img2;
          height: 100%;
        }
        img {
          max-width: 272px;
        }
      }
      &.size-4 {
        grid-template-columns: 1fr 1fr;
        img {
          max-width: 272px;
        }
      }
    }
    .forumActions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
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
