import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  .label {
    font-family: "Montserrat", seriff;
    font-style: normal;
    font-size: 18px;
    color: #475467;
    font-weight: 600;
  }

  textarea {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 14px;
    outline: none;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    resize: none;
    width: 100%;

    &::placeholder {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #98a2b3;
    }
  }
`;
