import styled from "styled-components";

export const AvatarWrapper = styled.div`
  position: relative;
  .dropdownMenu {
    display: none;
    flex-direction: column;
    padding: 16px;
    background: #ffffff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
    border-radius: 16px;
    position: absolute;
    right: 0;
    top: 60px;
    grid-gap: 16px;
    min-width: 280px;

    &.show {
      display: flex;
    }
    .menuHeader {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 16px;
    }
    .balanceView {
      padding: 9px 16px;
      border: 1px solid #d0d5dd;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      grid-gap: 5px;

      .balanceHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
        .walletAddress {
          display: flex;
          flex-direction: row;
          align-items: center;
          grid-gap: 4px;
          padding: 2px 8px;
          background: #f2f4f7;
          border-radius: 8px;
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #101828;
          .ellipse {
            width: 8px;
            height: 8px;
            background: #12b76a;
            border-radius: 100%;
          }
        }
      }
      .balanceValue {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #101828;
      }
    }

    .dropDownItem {
      cursor: pointer;
      padding: 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 12px;
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
      border-radius: 8px;

      &:hover {
        background: #f2f4f7;
      }
    }
  }

  .profileIcon1 {
    width: 20px;
    height: 20px;
    object-position: center;
    object-fit: cover;
    border-radius: 100%;
    cursor: pointer;
    margin-top: 7px;
  }
  .profileIcon2 {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 100%;
  }
  .profileIcon3 {
    width: 10px;
    height: 28px;
    margin-left: -20px;
    cursor: pointer;
  }
  .edit_navbar {
    display: flex;
    padding-right: 15px;
  }
`;
