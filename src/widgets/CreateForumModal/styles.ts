import styled from 'styled-components'

export const ForumModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 25px;
  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
  }

  .drag_drop {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    padding: 50px 0;
  }

  .pollOptions {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    .pollTitle {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #475467;
    }

    .pollOption {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 16px;
      padding: 20px;
      background: #f2f4f7;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      .pollLimit {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #98a2b3;
      }
    }

    .addPoll {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #3538cd;
    }
  }
  .pollDropdown {
    width: 90px;
    height: 36px;
  }
  .dropdownLabel {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .forumActions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
  }
`
