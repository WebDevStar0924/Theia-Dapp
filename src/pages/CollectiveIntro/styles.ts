import styled from "styled-components";

export const CollectiveIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 30px;
  min-height: calc(100vh - 80px);
  position: relative;

  .heading {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #101828;
  }

  .joinBtn {
    position: relative;
    z-index: 1000;
  }

  .supportingText {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #667085;
  }

  .communitySvg {
    position: absolute;
    right: 50%;
    top: 0;
    transform: translateY(-30%);
  }

  .marketsSvg {
    position: absolute;
    left: 50%;
    bottom: 0;
  }
`;
