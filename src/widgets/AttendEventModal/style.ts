import styled from 'styled-components'

export const AttendEventModalWrapper = styled.div`
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
  .addToCalendarButton {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    align-self: stretch;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    .atcb-button {
      background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      color: white;
    }
  }
  .eventImage {
    width: 100%;
    height: 300px;
    border-radius: 16px;
    object-fit: cover;
  }
`
