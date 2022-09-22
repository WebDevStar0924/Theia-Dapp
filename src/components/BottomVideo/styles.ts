import styled from "styled-components";

interface Props {
  bg: any;
}
export const BottomVideoWrapper = styled.div<Props>`
  background-image: url(${(props) => props.bg});
  border-radius: 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .videoLabel {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: white;
  }
`;

export const VideoContent = styled.div<Props>`
  background-image: url(${(props) => props.bg});
  margin-top: 30px;
  border: 2px solid #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  width: 745px;
  height: 420px;

  .videoLogo {
    margin-top: 80px;
    text-align: center;
  }
  .videoPlay {
    margin-top: 50px;
    text-align: center;
    cursor: pointer;
    svg:hover path {
      stroke: #6b6b6b;
    }
  }

  .hideScreen {
    display: none;
  }

  .playScreen {
    height: 100%;
    iframe {
      border-radius: 30px;
    }
  }
`;
