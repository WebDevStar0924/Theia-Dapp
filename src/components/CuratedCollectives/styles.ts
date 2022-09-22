import styled from "styled-components";

interface Props {
  bg: any;
}

export const CuratedCollectivesWrapper = styled.div<Props>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border-radius: 30px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .splide {
    .splide__arrow {
      background: #101828;
      width: 50px;
      height: 50px;
      opacity: unset;

      &:disabled {
        display: none;
      }

      svg {
        fill: #fcfcfd;
      }
    }

    .splide__arrow--prev {
      left: -2rem;
    }

    .splide__arrow--next {
      right: -2rem;
    }
  }

  .curatedLabel {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: white;
    margin-bottom: 25px;
  }

  .curatedCollective {
    width: 350px;
    height: 200px;
    position: relative;
    background: #fdf9f0;
    border-radius: 30px;

    .curatedCollectiveImg {
      width: 350px;
      height: 200px;
      object-fit: contain;
      border-radius: 30px;
    }

    .curatedCollectiveBgGradient {
      display: none;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 35.92%,
        rgba(0, 0, 0, 0.8) 95.66%
      );
      backdrop-filter: blur(4px);
      position: absolute;
      width: 350px;
      height: 200px;
      left: 0;
      top: 0;
      border-radius: 30px;
    }

    &:hover .curatedCollectiveInfo,
    &:hover .curatedCollectiveBgGradient {
      display: unset;
    }

    .curatedCollectiveInfo {
      position: absolute;
      bottom: 14px;
      left: 16px;
      color: white;
      display: none;

      .infoHeader {
        display: flex;
        align-items: center;

        .infoName {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
        }

        .checkContainer {
          margin-left: 10px;
          border: solid 2px #6ce9a6;
          border-radius: 16px;
          padding: 1px 4px;
        }
      }

      .infoDescription {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;
