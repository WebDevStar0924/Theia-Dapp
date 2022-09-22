import styled from "styled-components";

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e7ec;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;

  .switchItem {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #101828;
    cursor: pointer;
    padding: 2px 16px;
    border-radius: 20px;
    &.active {
      background: #1D2939;
      color: #ffffff;
    }
  }
`;
