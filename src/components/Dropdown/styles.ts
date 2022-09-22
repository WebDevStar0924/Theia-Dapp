import styled from "styled-components";
import { dropdownProps } from "./types";

export const StyledWrapper = styled.div<{ props: dropdownProps }>`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  position: relative;
  cursor: ${({ props }) =>
    props.type === "disabled" ? "not-allowed" : "pointer"};

  .label {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    color: #475467;
  }

  .errorMsg {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #f04438;
  }

  .inputWrapper {
    width: 100%;
    height: 44px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    background-color: ${({ props }) =>
      props.type === "disabled" ? "#F9FAFB" : "#FFFFFF"};
    padding-left: 16px;
    padding-right: 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;

    &:focus-within {
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f5f8ff;
      border: 1px solid #c7d7fe;
    }

    &:focus {
      background: red;
    }

    &:hover {
      border: 1px solid #a4bcfd;
    }

    input {
      font-family: "Montserrat", sans-serif;
      outline: none;
      border: none;
      flex: 1 1 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;

      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #101828;
      cursor: ${({ props }) =>
        props.type === "disabled" ? "not-allowed" : "pointer"};

      &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #98a2b3;
      }
    }
  }

  .dropdown-menu {
    background: #ffffff;
    border: 1px solid #f2f4f7;
    box-sizing: border-box;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    max-height: 320px;
    overflow-y: scroll;
    position: absolute;
    left: 0;
    right: 0;
    top: ${({ props }) => (props.label ? "72px" : "45px")};
    z-index: 1000;

    .dropdown-item {
      padding: 10px 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      font-size: 10px;
      font-weight: 500;
      line-height: 24px;
      color: #101828;
      cursor: pointer;

      &.active {
        background-color: #f5f8ff;
      }

      &:hover {
        background-color: #f5f8ff;
      }
    }
  }
`;
