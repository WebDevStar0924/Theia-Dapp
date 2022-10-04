import styled from 'styled-components'
export const BackButtonWrapper = styled.div`
.backButton{
  height: 58px;
  width: 58px;
  position: absolute;
  left: -10%;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 26px;
  background: #FFFFFF;
  border: 2px solid #D0D5DD;
  border-radius: 100px;
  &:hover{
    border: 2px solid #1E84E3;

  }
`
export const EventDetailsWrapper = styled.div`
position: relative;
  width : 900px;
  background: #FFFFFF;
  margin: auto;
  margin-top: 24px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  .atcb-dropdown-anchor {
    width: 200px;
  }
  .virtualLink{
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
  .date{
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
  .virtualTag {
    align-items: center;
    padding: 2px 8px;
    gap: 4px;
    width: 70px;
    height: 22px;
    background: linear-gradient(50.04deg, #1E84E3 29.41%, #5C26D3 83.82%);
    border-radius: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
  }
  .irlMark{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 4px;
    width: 52px;
    height: 26px;
    background: linear-gradient(90deg, #E53E3E 0%, #DD6B20 50.52%, #D69E2E 100%);
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .irlMarkText{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
  }
  
  .eventTitle{
    width: 159px;
    height: 22px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    text-align: left;
    color: #101828;
    word-break: break-all;
  }
  .attendButton{
    width: 240px
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    height: 40px;
    background: linear-gradient(107.62deg, #1E84E3 0%, #5C26D3 100%);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    align-self: stretch;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    &:hover{
      cursor: pointer;
      border: solid 2px #5670f5;
    }
  }
  .title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
  }
  .date-time {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #444CE7;
  }

  .event-container__about-content{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }
  .calendar-add{
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 24px;
    text-transform: uppercase;
    background: #101828;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 16px;
    gap: 8px;
    align-self: flex-start;
    cursor: pointer;
    svg {
      width: 12px;
      height: 13px;
    }
    .atcb-button{
      margin: 0;
      padding: 0;
      background: transparent;
      color: white;
      font-size: 8px;
      border: none;
      min-width: auto;      
    }    
  }

  .location {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    width: 170px;
  }

  .replyPost {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #98A2B3;
    cursor: pointer;
  }
  .event-container__user-default-image{
      width: 40px;
      height: 40px;
      border-radius: 22px;
      background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
      border: 2px solid #e4e7ec;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      margin-right: 20px;
  }
  .socialButton {
    &: hover{
      cursor: pointer;  
    }
  }
  .commentReply {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    border-top: 1px solid #e4e7ec;
    border-bottom: 1px solid #e4e7ec;

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
    .userName {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: black;
      margin-left: 5px;
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
    max-height: 400px;
    overflow-y: scroll;
    .commentList {
      padding: 0px 8px;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    grid-gap: 40px;
    padding: 20px 76px;
    justify-content: center;
    .detailLeft {
      display: flex;
      flex-direction: row;
      justify-content: end;
      .artImage {
        width: 360px;
        border-radius: 16px;
        border: none;
        img {
          width: 100%;
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
  .creatorAvatar {
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
    .replyMessage {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-left: 50px;
    }
  }
  .replyContent {
    flex-grow: 1;
    width: 100%;
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
    grid-gap: 24px;
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
  .replyTime{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    padding-left:18px
    color: #98A2B3;
    margin-left: 8px;
  }
`
export const EventGoingWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .containterShape {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
    border: 2px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  }
  .containerTitle {
    margin-top: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #101828;
  }
`
