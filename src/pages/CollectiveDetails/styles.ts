import styled from "styled-components";

export const CollectiveDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  position: relative;

  .detailsContent {
    // padding: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
  }
`;

export const TabWrapper = styled.div`
  .subtitle {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 24px;
  }
`;

export const HomeTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
  justify-content: center;

  .inputWrapper {
    input {
      font-size: 13px !important;
    }
  }

  .leftPart {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    flex: 1;
  }
  .rightPart {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    width: 440px;
  }

  .dropdownlist {
    width: 140px;
  }

  .ellipse80 {
    width: 80px;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 100%;
  }

  .horizontalScroll {
    overflow: scroll;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .roleName {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #101828;
  }

  .userName {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
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
`;

export const StackedCarouselWrapper = styled.div<{ bg: any }>`
  padding: 50px 0 80px 0;
  border-radius: 20px;
  position: relative;
  background-image: url(${(props) => props.bg});
  @media (max-width: 1440px) {
    max-width: 590px;
  }
  img {
    border-radius: 20px !important;
  }

  .carouselActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 25px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    .moveBtn {
      cursor: pointer;
    }

    .dots {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 10px;

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: #999999;

        &.active {
          background: #7b61ff;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`;

export const ForumTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
  justify-content: center;

  .leftSection {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    flex: 1;
  }

  .rightSection {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    width: 440px;
  }

  .dropdownlist {
    width: 160px;
  }

  .inputWrapper {
    input {
      font-size: 13px !important;
    }
  }

  .postActions {
    display: flex;
    flex-directon: row;
    align-items: center;
    grid-gap: 20px;
    .postBtn {
      border-radius: 100%;
      width: 72px;
      height: 72px;
      border: 2px solid #e4e7ec;
      padding: 0;
      box-shadow: none !important;
      &:hover {
        border: 2px solid #8099f8 !important;
        transition: border 0.2s;
        background-color: transparent !important;
      }
    }

    .imageBtn {
      border-radius: 16px;
      width: 72px;
      height: 72px;
      border: 2px solid #e4e7ec;
      padding: 0;
      box-shadow: none !important;
      &:hover {
        border: 2px solid #8099f8 !important;
        transition: border 0.2s;
        background-color: transparent !important;
      }
    }
  }

  .guidelines_list {
    display: flex;
    flex-direction: column;
    background: #f2f4f7;

    .guideline_index {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #101828;
      border: 0.5px solid #344054;
      border-radius: 100px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .guideline_title {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #101828;
      padding: 10px 20px;
    }
  }

  .topContributor {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    grid-gap: 10px;
    background: #f2f4f7;

    &:last-child {
      border-bottom: none;
    }

    .userAvatar {
      width: 44px;
      height: 44px;
      border-radius: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }

    .userName {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.8);
    }

    .userTag {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #ffffff;
      padding: 1px 12px;
      background: #a4bcfd;
      border-radius: 16px;
    }

    .followBtn {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      background: #3538cd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 200px;
      padding: 6px 15px;
    }
  }
`;
export const MembersTabWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .teamMembers {
    padding: 0 70px 0 30px;
    border-right: 0.5px solid #d0d5dd;

    .teamSubtitle {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #101828;
      margin-bottom: 24px;
      text-align: center;
    }

    .teamContainer {
      row-gap: 40px;
      display: flex;
      flex-direction: column;
      row-gap: 40px;
    }
  }

  .allMembers {
    padding-left: 50px;

    .subtitle {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #101828;
      margin-bottom: 24px;
    }

    .membersContainer {
      display: flex;
      flex-wrap: wrap;
      row-gap: 44px;
      column-gap: 116px;
    }
  }
`;

export const MemberItemWrapper = styled.div`
  &.teamMemberItem {
    width: 100px;
  }
  &.memberItem {
    width: 112px;
  }
  row-gap: 5px;
  text-align: center;

  .teamMemberDefaultImage {
    width: 100px;
    height: 100px;
    background: linear-gradient(90deg, #90def9 0%, #cbe8f6 100%);
    border: 3px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 50px;
  }

  .memberDefaultImage {
    width: 112x;
    height: 112px;
    background: linear-gradient(90deg, #90def9 0%, #cbe8f6 100%);
    border: 3px solid #e4e7ec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 56px;
  }

  .memberName {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .memberType {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    padding: 1px 12px;
    border-radius: 16px;
    color: #ffffff;
  }

  .adminTag {
    background-color: #2d31a6;
  }

  .coreTag {
    background-color: #8098f9;
  }

  .whaleTag {
    background-color: #a4bcfd;
  }

  .memberTag {
    background-color: #a4bcfd;
  }
`;

export const EventsTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  grid-gap: 16px;

  .mainPart {
    .sideContent {
      display: flex;
      flex-direction: column;
      grid-gap: 16px;
      flex: 1;

      .subTitle {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
      }
    }
  }
`;

export const GalleryWrapper = styled.div`
  &.blurBg {
    filter: blur(5px);
  }

  .shareBtn {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 8px 24px;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      #00b5d8 0%,
      #3182ce 50.52%,
      #805ad5 100%
    );
    box-shadow: 0px 2px 5px rgba(16, 24, 40, 0.04);
    border-radius: 200px;
    display: inline-block;
    min-width: 200px;
    text-align: center;
    .loading-icon {
      margin-top: 4px;
    }
  }

  .removeBtn {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: 2px solid #e4e7ec;
    border-radius: 200px;
    color: #101828;
    padding: 8px 24px;
    display: inline-block;
    margin-left: 16px;
    cursor: pointer;
  }

  .artList {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 56px;

    .artItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .artImage {
        width: 320px;
        border-radius: 8px;
      }
      .artInfo {
        position: absolute;
        bottom: 16px;
        left: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .artLabels {
          color: #fff;
          font-family: "Montserrat";
          font-weight: 600;
        }

        .artName {
          font-size: 18px;
          line-height: 28px;
        }

        .artOwner {
          font-size: 14px;
          line-height: 20px;
        }

        .artFavourite {
          padding: 4px 12px;
          font-size: 14px;
          line-height: 24px;
          background: #ffffff;
          border: 1px solid #d0d5dd;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 200px;
          align-items: center;
          display: flex;
          cursor: pointer;

          .favoriteIcon {
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
