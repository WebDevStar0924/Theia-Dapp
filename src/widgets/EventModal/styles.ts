import styled from 'styled-components'

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

export const TabtWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }

  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
  }

  .bottomBar {
    width: 227.5px;
    height: 8px;
    background: ${({ active }) => (active ? '#475467' : '#E4E7EC')};
    border-radius: 8px;
  }
`

export const ModalHeaderWrapper = styled.div`
  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
  }
  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`

export const ModalBodyWrapper = styled.div`
  .pageTitle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
  }
  .fieldTitle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
  }
  .characterLimit {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #d0d5dd;
  }
  .timeZoneInput {
    .dropdown-item {
      font-size: 14px !important;
    }
  }
  .eventDescription {
    border: 1px solid #d0d5dd;
    padding: 10px 14px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
  .descriptionField {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 14px;
    gap: 4px;
    height: 64px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    .textArea {
      border: none;
      width: 100%;
      overflow: auto;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      resize: none;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      &:hover,
      &:focus {
        border: none;
      }
    }
    .summary {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #667085;
    }
  }
  .uploadForm {
    &:hover {
      cursor: pointer;
    }
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    gap: 8px;
    width: 100%;
    height: 160px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    .addPhoto {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
    }
    .dragAndDrop {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #475467;
    }
    .uploadImageContainer {
      width: 100%;
      height: 100%;
    }
    .uploadArea {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      gap: 12px;
      width: 72px;
      height: 40px;
      border: 2px solid #e4e7ec;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;
    }
  }

  .event-calendar {
    max-width: none;
    width: 353px;
    border: 1px solid #e4e7ec;
    border-radius: 8px;

    position: absolute;
    bottom: 50px;

    .react-calendar__tile {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    .react-calendar__month-view__weekdays__weekday {
      font-family: 'Montserrat', 'SF Pro Text';
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      text-transform: uppercase;
      color: rgba(60, 60, 67, 0.3);
      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__month-view__days__day--weekend {
      color: black;
    }
    .react-calendar__month-view__days__day--weekend.react-calendar__tile--active {
      color: white;
    }
    .react-calendar__tile--active {
      background: rgb(52, 64, 84);
    }

    .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    .react-calendar__tile--now {
      background: rgba(10, 122, 255, 0.12);
      border-radius: 100px;
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:focus,
    .react-calendar__tile--active {
      border-radius: 100px;
    }

    .react-calendar__tile {
      padding: 13px;
    }

    .react-calendar__navigation__prev-button {
      order: 4;
      color: #0a7aff;
      font-size: 25px;
    }
    .react-calendar__navigation__prev2-button {
      order: 1;
      font-size: 25px;
      color: #0a7aff;
    }
    .react-calendar__navigation__next-button {
      order: 5;
      color: #0a7aff;
      font-size: 25px;
    }
    .react-calendar__navigation__next2-button {
      order: 3;
      color: #0a7aff;
      font-size: 25px;
    }
    .react-calendar__navigation__label {
      order: 2;
    }
  }
  .saveButton,
  .postButton {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 12px;
    height: 40px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 200px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #98a2b3;
    background: #101828;
    &:disabled {
      background: #e4e7ec;
    }
  }
  .irlInput input {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    height: 44px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
    background-color: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;
    text-overflow: ellipsis;
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #101828;
    :focus-visible {
      outline-width: 0;
      outline: none;
    }
  }
  .irlInput:focus-within {
    box-shadow: 0 1px 2px rgb(16 24 40 / 5%), 0 0 0 4px #f5f8ff;
    border: 1px solid #c7d7fe;
  }
`

export const EventDetailModalWrapper = styled.div`
  .date {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
  .locationMark {
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
  }
  .locationMarkText {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
  }

  .placeHolder {
    width: 159px;
    height: 22px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
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
  .title {
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
    color: #444ce7;
  }

  .event-container__about-content {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }
  .calendar-add {
    color: #ffffff;
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

  .event-container__reply {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #98a2b3;
    cursor: pointer;
  }
  .event-container__user-default-image {
    width: 40px;
    height: 40px;
    border-radius: 22px;
    background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
    border: 2px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    margin-right: 20px;
  }
`

export const EventGoingWrapper = styled.div`
  .going-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .going-container__shape {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: linear-gradient(90deg, #89edfa 0%, #7b8af9 100%);
    border: 2px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  }
  .going-container__title {
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
