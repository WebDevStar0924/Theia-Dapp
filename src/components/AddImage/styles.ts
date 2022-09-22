import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .label {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    margin-bottom: 4px;
  }

  .description {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #98a2b3;
    margin-bottom: 16px;
  }
  input[type="file"] {
    display: none;
  }

  .emptyBanner {
    background: #1d2939;
    border-radius: 8px;
    width: 100%;
    height: 109.29px;
    position: relative;
    cursor: pointer;
  }

  .emptyIcon {
    background: #101828;
    border: 2px solid #fcfcfd;
    box-sizing: border-box;
    border-radius: 16px;
    width: 104px;
    height: 104px;
    margin-top: -53px;
    margin-left: 16px;
    position: relative;
    cursor: pointer;
  }

  .bannerImg {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 100%;
    height: 200px;
    position: relative;
    cursor: pointer;
    object-fit: cover;
  }

  .iconImg {
    width: 170px;
    height: 170px;
    position: relative;
    cursor: pointer;
    object-fit: cover;
    border: 2px solid #fcfcfd;
    box-sizing: border-box;
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .cameraIcon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
