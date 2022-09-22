import styled from "styled-components";

export const MagicContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .heading {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #101828;
    margin-top: 32px;
    margin-bottom: 40px;
  }

  .magicForm {
    background: #ffffff;
    box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    padding: 40px 104px;
    min-width: 592px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    grid-gap: 32px;
  }
`;
