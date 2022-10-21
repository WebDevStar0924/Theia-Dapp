import styled from 'styled-components'

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
`

export const TabWrapper = styled.div`
  .subtitle {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 24px;
  }
`
export const HomeTabV2Wrapper = styled.div`
  .forumCard {
    :hover {
      background: white;
    }
  }
  .leftPart {
    display: flex;
    flex-direction: column;
    width: 640px;
    max-width: 640px;
    border-right: 1px solid #e4e7ec;
    flex: 1;
    .underLine {
      height: 1px;
      background: #e4e7ec;
      margin-top: 1px;
    }
    .postList {
      display: flex;
      flex-direction: column;
    }
    .userNftAvatar {
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
      clip-path: polygon(
        45% 1.33975%,
        46.5798% 0.60307%,
        48.26352% 0.15192%,
        50% 0%,
        51.73648% 0.15192%,
        53.4202% 0.60307%,
        55% 1.33975%,
        89.64102% 21.33975%,
        91.06889% 22.33956%,
        92.30146% 23.57212%,
        93.30127% 25%,
        94.03794% 26.5798%,
        94.48909% 28.26352%,
        94.64102% 30%,
        94.64102% 70%,
        94.48909% 71.73648%,
        94.03794% 73.4202%,
        93.30127% 75%,
        92.30146% 76.42788%,
        91.06889% 77.66044%,
        89.64102% 78.66025%,
        55% 98.66025%,
        53.4202% 99.39693%,
        51.73648% 99.84808%,
        50% 100%,
        48.26352% 99.84808%,
        46.5798% 99.39693%,
        45% 98.66025%,
        10.35898% 78.66025%,
        8.93111% 77.66044%,
        7.69854% 76.42788%,
        6.69873% 75%,
        5.96206% 73.4202%,
        5.51091% 71.73648%,
        5.35898% 70%,
        5.35898% 30%,
        5.51091% 28.26352%,
        5.96206% 26.5798%,
        6.69873% 25%,
        7.69854% 23.57212%,
        8.93111% 22.33956%,
        10.35898% 21.33975%
      );
      width: 56px;
      height: 56px;
      margin-right: 8px;
    }
    .commentList {
    }
  }
  .rightPart {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    width: 440px;
  }
`
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
`

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
      font-family: 'Montserrat';
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
      font-family: 'Montserrat';
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
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.8);
    }

    .userTag {
      font-family: 'Montserrat';
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
      font-family: 'Montserrat';
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
`
export const MembersTabWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .teamMembers {
    padding: 0 70px 0 30px;
    border-right: 0.5px solid #d0d5dd;

    .teamSubtitle {
      font-family: 'Montserrat', serif;
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
      font-family: 'Montserrat', serif;
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
`

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
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .memberType {
    font-family: 'Montserrat', serif;
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
`

export const EventsTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  grid-gap: 16px;
  .mainPart {
    .eventFilterSwitch {
      .switchItem {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        padding: 5px 20px;
      }
    }
    .eventGridList {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 16px;
      flex: 1;

      .subTitle {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
      }
    }
    .sideContent {
      display: flex;
      flex-direction: column;
      grid-gap: 16px;
      flex: 1;

      .subTitle {
        font-family: 'Montserrat', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
      }
    }
  }
`

export const GalleryWrapper = styled.div`
  margin-top: 80px;
  &.blurBg {
    filter: blur(5px);
  }

  .shareBtn {
    font-family: 'Montserrat', serif;
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
    font-family: 'Montserrat';
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
    margin: 36px 100px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 60px 80px;
    justify-content: space-around;

    .artItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .artImage {
        width: 320px;
        height: 320px;
        object-fit: cover;
      }
      .imageOverlay {
        visibility: hidden;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        background: rgb(2, 0, 36);
        background: linear-gradient(
          0deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(2, 2, 5, 0.2497373949579832) 50%,
          rgba(0, 212, 255, 0) 100%
        );
      }
      .artInfo {
        position: absolute;
        bottom: 16px;
        left: 16px;
        right: 16px;
        visibility: hidden;
        align-items: center;
        opacity: 0;
        justify-content: space-between;
        .artLabels {
          color: #fff;
          font-family: 'Montserrat';
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
      :hover {
        cursor: pointer;
      }
    }
    .artItem:hover .artInfo {
      visibility: visible;
      opacity: 1;
      transition: 0.7s;
    }
    .artItem:hover .imageOverlay {
      visibility: visible;
      opacity: 1;
      transition: 0.7s;
    }
  }
`
