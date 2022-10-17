import styled from 'styled-components'

export const PoolOptionFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: white;
  grid-gap: 10px;
  margin-top: 15px;
  width: 100%;
  .optionDescription {
    justify-content: flex-start;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    align-items: flex-end;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
    span {
      margin-left: 5px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #98a2b3;
    }
  }
  .poolOptionInput {
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    gap: 16px;
    height: 60px;
    background: #f2f4f7;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    .inputText {
      .inputWrapper {
        border: 1px solid #d0d5dd;
        box-shadow: none;
        border-radius: 4px;
        :hover {
          border: 1px solid #d0d5dd;
        }
        height: 40px;
      }
    }
    .closePoolOption {
      :hover {
        cursor: pointer;
      }
    }
  }
  .addOptionButton {
    padding: 15px 20px;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 54px;
    background: #f2f4f7;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background: #f0eef3;
    }
    span {
      margin-left: 18px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #3538cd;
    }
  }
  .poolLengthLayout {
    align-items: center;
    width: 100%;
    justify-content: space-between;
    span {
      margin-left: 10px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
    grid-gap: 30px;
    .pollDropdown {
      width: 75px;
      height: 56px;
      .inputWrapper {
        padding: 0px 10px;
        height: 100%;
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 8px;
      }
      input {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-transform: uppercase;
        color: #101828;
      }
      .dropdown-item {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-transform: uppercase;
        color: #101828;
      }
    }
  }
  .removePoolButton {
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 12px;
    width: 546px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e4e7ec;
    border-radius: 32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #f97066;
    cursor: pointer;
    :hover {
      background: whitesmoke;
    }
  }
`
