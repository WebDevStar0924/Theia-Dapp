import styled from "styled-components";
export const Card = styled.div`
  background: #e4e7ec;
  border-radius: 16px;
  padding: 1px;
  &:hover {
    background: linear-gradient(90deg, #013ada, #65e3f2, #fccb42, #d350e2);
    padding: 3px;
    cursor: pointer;
    & > div {
      padding: 0 16px;
    }
  }
`;
export const GalleryCardWrapper = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2px 18px;
  background: #fff;
  .galleryCardHeader {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    .creatorAvatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }

    .username {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
    }

    .userTag {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #ffffff;
      padding: 1px 12px;
      background: #a4bcfd;
      border-radius: 16px;
    }
    .createTime {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #98a2b3;
      text-transform: uppercase;
      @media (max-width: 1024px) {
        font-size: 10px;
      }
    }
  }

  .galleryTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .galleryImg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    img {
      width: 362px;
      height: 362px;
      object-fit: cover;
      border-radius: 16px;
    }
  }
  .galleryActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
    justify-content: space-between;
  }
`;
