import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right,
    #4bb7ee 0%,
    #4bb7ee 43%,
    rgba(164, 188, 253, 0.2) 50%
  );

  backdrop-filter: blur(100px);
  border-radius: 10px;
  padding: 30px 45px;
  grid-gap: 26px;

  .title {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #ffffff;
  }

  .categoryList {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    align-items: center;
    justify-content: space-around;
  }

  .seeAllBtn {
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
    text-transform: uppercase;
    &:before {
      background: linear-gradient(
        269.15deg,
        #d350e2 0.2%,
        #fccb42 30.86%,
        #65e3f2 64.13%,
        #013ada 100%
      );
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 3px solid transparent;
      border-radius: 16px;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
    span {
      background: linear-gradient(
        269.15deg,
        #d350e2 0.2%,
        #fccb42 30.86%,
        #65e3f2 64.13%,
        #013ada 100%
      );
      -webkit-background-clip: text, border;
      -webkit-text-fill-color: transparent;

      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 7px solid transparent;
    border-radius: 100%;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  &.art {
    &::after {
      background: linear-gradient(107.62deg, #1e84e3 0%, #5c26d3 100%);
    }
  }

  &.gaming {
    &::after {
      background: linear-gradient(
        180deg,
        #e53e3e 0%,
        #dd6b20 50.52%,
        #d69e2e 100%
      );
    }
  }
  &.music {
    &::after {
      background: linear-gradient(254.81deg, #1a50ff 8.13%, #1ee9b6 92.46%);
    }
  }
  &.film {
    &::after {
      background: linear-gradient(254.81deg, #fa0082 8.13%, #d96ff8 92.46%);
    }
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
  }

  .categoryName {
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.02em;
    color: #ffffff;
    font-size: 36px;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    text-transform: uppercase;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .categoryIcon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .darkBg {
    background: radial-gradient(
      40.91% 40.91% at 50% 50%,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
