import styled from 'styled-components'
export const Card = styled.div`
  background: #e4e7ec;
  border-radius: 16px;
  padding: 3px;
  &:hover {
    background: linear-gradient(90deg, #013ada, #65e3f2, #fccb42, #d350e2);
    padding: 3px;
    cursor: pointer;
    & > div {
      // padding: 0 0;
      outline: 0;
    }
  }
`
export const EventCardWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 1px;  
  outline: 2px solid white;
  .socialButton {
    &: hover{
      cursor: pointer;  
    }`
export const EventCardModalBodyWrapper = styled.div`
  padding: 0px 40px 32px 40px;
  .modalTitle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
  }
  .placeHolder {
    height: 22px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #101828;
  }
  .virtualTag {
    align-items: center;
    padding: 2px 8px;
    gap: 4px;
    width: 70px;
    height: 22px;
    background: linear-gradient(50.04deg, #1e84e3 29.41%, #5c26d3 83.82%);
    border-radius: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }
  .irlTag {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 4px;
    width: 52px;
    height: 26px;
    background: linear-gradient(
      90deg,
      #e53e3e 0%,
      #dd6b20 50.52%,
      #d69e2e 100%
    );
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }
  .eventDate {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #101828;
  }
  .eventTime {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #444ce7;
  }
  .eventDescription {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }
  .attendButton {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    height: 40px;
    background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    align-self: stretch;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .eventImage {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`
export const EventCardModalHeaderWrapper = styled.div`
  padding: 0px 16px;
  .logoImage {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
  .logoTitle {
    width: 51px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #101828;
  }
  .userType {
    padding: 0px 8px;
    gap: 4px;
    width: 60px;
    height: 18px;
    background: #101828;
    border-radius: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
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
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #98a2b3;
      text-transform: uppercase;
    }
  }
`
