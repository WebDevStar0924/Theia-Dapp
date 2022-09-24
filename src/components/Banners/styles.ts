import styled from 'styled-components'

export const BannerWrapper = styled.div`
  display: flex;
  height: 202px;

  .carousel-root {
    width: 100%;
  }
  .carousel-slider {
    padding-right: 20px;
  }
  .carousel {
    .control-dots {
      bottom: initial;
      top: 0;
      right: 0;
      width: 20px;
      .dot {
        background: #e4e7ec;
        box-shadow: none;
        opacity: 1;
        &.selected {
          background: #667085;
        }
      }
    }
  }
  .bannerContainer {
    border-radius: 20px;

    flex-grow: 1;
    background: #000000;
    position: relative;
    height: 202px;

    .bannerBackground {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }

    .blurContainer {
      position: absolute;
      padding: 34px 53px;
      top: 0;
      left: 0;
      bottom: 0;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 84.64%
      );
      backdrop-filter: blur(10px);

      .bannerText {
        margin-top: 20px;
        margin-left: 16px;
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 200;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #ffffff;
      }
    }

    .learnMoreBtn {
      position: absolute;
      right: 78px;
      bottom: 32px;
      border: 0.5px solid white;
      border-radius: 40px;
      padding: 10px 18px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .bannerSlider {
  }
`
