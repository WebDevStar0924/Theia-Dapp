import styled from "styled-components";
import { externalInputProps } from "./types";

export const StyledWrapper = styled.div<{ props: externalInputProps }>`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  flex: 1 1 0;
  font-family: "Montserrat", sans-serif;

  .label {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-size: 18px;
    color: #475467;
    font-weight: 600;
  }

  .errorMsg {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #f04438;
  }

  .inputWrapper {
    width: 100%;
    font-family: "Montserrat", sans-serif;
    height: 44px;
    border-radius: ${({ props }) => props.borderRadius ?? "8px"};
    border: ${({ props }) =>
      props.noborder
        ? "none"
        : props.type === "error"
        ? "1px solid #FDA29B"
        : "1px solid #D0D5DD"};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
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
      box-shadow: ${({ props }) =>
        !props.noborder
          ? "0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px #F5F8FF"
          : "none"};
      border: ${({ props }) =>
        !props.noborder ? "1px solid #C7D7FE" : "none"};
    }

    &:hover {
      border: ${({ props }) =>
        !props.noborder ? "1px solid #A4BCFD" : "none"};
    }

    input {
      outline: none;
      border: none;
      flex: 1 1 auto;
      font-family: "Montserrat", sans-serif;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;

      font-weight: 500;
      font-size: ${({ props }) => (props.fontSize ? props.fontSize : "16px")};
      line-height: 24px;
      color: ${({ props }) => (props.fontColor ? props.fontColor : " #101828")};

      &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: ${({ props }) => (props.fontSize ? props.fontSize : "16px")};
        line-height: 24px;
        color: #98A2B3;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      }
    }
  }
`;
