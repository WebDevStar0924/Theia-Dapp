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
    flex: 64;
  }
  .rightPart {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    flex: 52;
    max-width: 520px;
  }

  .dropdownlist {
    width: 140px;
  }

  .filtering {
    background: #ffffff;
    border: 1px solid #e4e7ec;
    border-radius: 8px;
    padding: 12px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-gap: 24px;

    .saveBtn {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 40px;
      height: 40px;
      border: 2px solid #e4e7ec;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;

      &:hover {
        border: 2px solid #677172;
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 200px;
        color: #101828;
        background: linear-gradient(
          90.04deg,
          #677172 0%,
          #6e8082 28.16%,
          #b9b5b5 53.98%,
          #78726b 79.6%,
          #5f5e64 104.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }

      &.active {
        background: #101828;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 200px;
        border-color: #101828;
        color: #ffffff;
        &:hover {
          color: #101828 !important;
          background: #fff !important;
          -webkit-background-clip: inherit;
          -webkit-text-fill-color: inherit;
          background-clip: inherit;
          text-fill-color: inherit;
        }
      }
    }
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
    flex: 70;
  }

  .rightSection {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    flex: 46;
    max-width: 460px;
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

  .filtering {
    background: #ffffff;
    border: 2px solid #d0d5dd;
    border-radius: 10px;
    padding: 12px 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .saveBtn {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 40px;
      height: 40px;
      border: 2px solid #e4e7ec;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;

      &:hover {
        border: 2px solid #677172;
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 200px;
        color: #101828;
        background: linear-gradient(
          90.04deg,
          #677172 0%,
          #6e8082 28.16%,
          #b9b5b5 53.98%,
          #78726b 79.6%,
          #5f5e64 104.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }

      &.active {
        background: #101828;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 200px;
        border-color: #101828;
        color: #ffffff;
        &:hover {
          color: #101828 !important;
          background: #fff !important;
          -webkit-background-clip: inherit;
          -webkit-text-fill-color: inherit;
          background-clip: inherit;
          text-fill-color: inherit;
        }
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
  // grid-gap: 16px;

  .filtering {
    background: #ffffff;
    border: 1px solid #e4e7ec;
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 80px;
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

  .mainPart {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    padding: 24px 0;
    gap: 36px;

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

export const SocialTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 16px;

  .sideContent {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    flex: 1;

    .subTitle {
      font-family: "Montserrat", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #101828;
    }
  }

  .updatesList {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    padding: 16px;
    border: 1px solid #e4e7ec;
    border-radius: 10px;

    .updateItem {
      display: flex;
      flex-direction: row;
      grid-gap: 8px;
      .icon {
        width: 40px;
        height: 40px;
      }
      .updateContent {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;
        flex: 1;
        .max {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #344054;
        }
        .creator {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 8px;
          line-height: 8px;
          text-align: center;
          color: #ffffff;
          background: #2d31a6;
          border-radius: 16px;
          padding: 2px 4px;
        }
        .updateText {
          font-family: "Inter", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #101828;
          background: #f2f4f7;
          border-radius: 0px 8px 8px 8px;
          padding: 10px 14px;
        }
        .updateTime {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #667085;
        }
        .updateFavorite {
          padding: 2px 9px;
          background: #f9fafb;
          border-radius: 16px;
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #344054;
        }
      }
    }
  }

  .eventList {
    display: flex;
    flex-direction: column;
    grid-gap: 32px;
    padding: 16px;
    border: 1px solid #e4e7ec;
    border-radius: 10px;
    .eventItem {
      background: #f2f4f7;
      border: 1px solid #d0d5dd;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      grid-gap: 8px;
      padding: 16px 24px;
      .eventContent {
        flex: 2;
        display: flex;
        flex-direction: column;
        grid-gap: 4px;

        .eventTittle {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          color: #101828;
        }
        .eventTime {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #475467;
        }
        .eventText {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #98a2b3;
        }
      }
      .eventActions {
        flex: 1;
        display: flex;
        flex-direction: column;
        grid-gap: 4px;
      }
    }
  }

  .feedList {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    padding: 16px;
    border: 1px solid #e4e7ec;
    border-radius: 10px;
    .feedItem {
      display: flex;
      flex-direction: row;
      grid-gap: 8px;
      .feedContent {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;
        flex: 1;
        .feedIcon {
          width: 40px;
          height: 40px;
        }
        .feedText {
          padding: 10px 14px;
          font-family: "Inter", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #101828;
          background-color: #f2f4f7;
        }
        .feedTime {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #667085;
        }
        .feedFavorite {
          cursor: pointer;
          padding: 2px 9px;
          background: #f9fafb;
          border-radius: 16px;
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #344054;
        }
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
