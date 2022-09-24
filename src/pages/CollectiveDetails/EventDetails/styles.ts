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
  
  .placeHolder{
    width: 159px;
    height: 22px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    text-align: left;
    color: #101828;
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
          font-size: 14px;
          line-height: 20px;
          margin-left: 14px;
          color: rgba(0, 0, 0, 0.8);
        }
        .memberTag{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px 8px;
          background: #475467;
          border-radius: 16px;
        }
        .replyTime {
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #98A2B3;
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
      color: black;
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
