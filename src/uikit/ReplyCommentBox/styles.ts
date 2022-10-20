import styled from 'styled-components'

export const ReplyCommentBoxWrapper = styled.div`
  .replyBox {
    .inputLayout {
      padding: 10px;
      .ql-container {
        border-radius: 5px;
      }
      .ql-editor {
        padding: 5px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
      }
      .replyText {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #475467;
        margin-right: 5px;
      }
      .userInfo {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #3538cd;
      }
      .replyInput {
        .inputWrapper {
          border: none;
          box-shadow: none;
        }
      }
      .replyButton {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 24px;
        gap: 8px;
        min-width: 88px;
        height: 36px;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 200px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        cursor: pointer;
        background: #e4e7ec;
        :hover {
          background: #344054;
        }
        :active {
          background: #101828;
        }
      }
    }
    .formLayout {
      margin-bottom: 10px;
      margin-left: 56px;
      display: flex;
      flex-direction: column;
      position: relative;
      .EmojiPickerReact {
        position: absolute;
        left: 20%;
        bottom: -500px;
        z-index: 1000;
        --epr-emoji-size: 20px;
      }

      .imageListLayout {
        margin-top: 16px;
        margin-bottom: 30px;
        display: grid;
        grid-template-columns: auto auto;
        .imageCard {
          margin: 4px;
          position: relative;
          .closeImageButton {
            position: absolute;
            margin-top: 6px;
            z-index: 10;
            margin-left: 6px;
            width: 35px;
            height: 35px;
            min-width: 35px;
            padding: 0px;
            background: transparent;
          }
          img {
            border-radius: 16px;
            object-fit: cover;
          }
          a {
            border-radius: 16px;
          }
        }
      }
    }
    .toolBox {
      padding: 10px;
      margin-left: 56px;
      .buttonGroup {
        grid-gap: 10px;
        .toolBoxButton {
          width: 35px;
          height: 35px;
        }
      }
      .replyButton {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 24px;
        gap: 8px;
        min-width: 88px;
        height: 36px;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 200px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        cursor: pointer;
        background: #e4e7ec;
        :hover {
          background: #344054;
        }
        :active {
          background: #101828;
        }
      }
    }
  }
`
