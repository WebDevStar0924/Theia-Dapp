import styled from 'styled-components'

export const ProfileSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 40px 70px;
  gap: 15px;

  background: #ffffff;
  border: 1px solid #e4e7ec;
  border-radius: 30px;

  .settingsHeader {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 24px;
  }

  .favoritesHeader {
    border-bottom: 1px solid #e4e7ec;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 24px;
  }

  .profileHeader {
    display: flex;
    flex-direction: row;
    grid-gap: 15px;
    margin-bottom: 40px;

    .bannerTitle {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      margin-right: 267.5px;
      color: #475467;
    }

    .avatarTitle {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #475467;
    }

    .Recommend {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #98a2b3;
      margin-bottom: 15px;
    }

    .iconImage {
      height: 120px;
      width: 120px;
    }

    .bannerImage {
      width: 410px;
      height: 120px;
      border-radius: 8px;
    }

    .emptyBanner {
      background: #1d2939;
      border-radius: 8px;
      width: 100%;
      height: 109.29px;
      position: relative;
      cursor: pointer;
    }
  }

  .addAvatar {
    width: 45px;
    height: 43px;
    margin-bottom: 38.5px;
    margin-left: -82.5px;
  }

  .addBanner {
    width: 45px;
    height: 43px;
    margin-bottom: 38.5px;
    margin-left: -227.5px;
  }

  .replaceBtn {
    cursor: pointer;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 200px;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #101828;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 100px;
  }

  .userEntry {
    margin-bottom: 24px;
  }

  .website {
    display: flex;
    flex-direction: row;
  }
  .addWebsite {
    margin-left: 16px;
    margin-top: 19px;
  }
  .walletEntry {
    margin-bottom: 24px;
  }

  .emailEntry {
    margin-bottom: 24px;
  }

  .descriptionEntry {
    margin-bottom: 24px;
    width: 400px;
  }

  .bioMax {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #d0d5dd;
    margin-top: 6px;
  }

  .addLinks {
    margin-bottom: 16px;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
  }

  .dropDownMenu {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 177px;
    height: 44px;
    background: #ffffff;

    border: 1px solid #d0d5dd;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 60px;
    margin-bottom: 8px;
  }

  .userName {
    margin-left: 24px;
    width: 378px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .linksOption {
    /* Input */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 8px;

    width: 595px;
    height: 44px;
    background: #f5f8ff;

    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 64px;
    margin-left: -415px;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6172f3;
    margin-bottom: 30px;
  }

  .ExitWrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .Save {
      margin-left: auto;
      margin-right: auto;
    }

    .Cancel {
      margin-right: 10px;
    }
  }

  .More {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .urlEntry {
    margin-left: -14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 14px;
    outline: none;
    background: #f2f4f7;
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    resize: none;
    width: 400px;
    &::placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #98a2b3;
    }
  }
`

export const ProfileDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;

  .dashList {
    background-color: #ffffff;

    .subTitle {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #101828;
      padding: 16px 24px;
      border-bottom: 1px solid #e4e7ec;
    }

    .moreBtn {
      margin: 16px auto;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;

      text-transform: uppercase;
      color: #101828;
    }
  }
`

export const DashItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ec;
  grid-gap: 12px;

  .icon {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 8px;
  }

  .name {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
  }

  .type {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #98a2b3;
  }
`
export const ProfileFavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;

  .favorites {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .favoriteList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 60px;
  }
  .moreBtn {
    margin: 16px auto;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    text-transform: uppercase;
    color: #101828;
  }
`

export const SocialItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 16px;
  height: 44px;
  margin-bottom: 16px;
  margin-top: 20px;

  .socialInfo {
    display: flex;
    flex-direction: row;
    grid-gap: 14px;
    align-items: center;
    flex: 1;
    height: 100%;
    width: 520px;

    .icon {
      width: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #d0d5dd;
      height: 100%;
    }

    background: #f2f4f7;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px 8px;

    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`

export const GalleryWrapper = styled.div`
  padding: 40px 10px;

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
    background: linear-gradient(254.81deg, #1a50ff 8.13%, #fb1a8f 92.46%);
    box-shadow: 0px 2px 5px rgba(16, 24, 40, 0.04);
    border-radius: 200px;
    display: inline-block;
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
    border: 1px solid #d0d5dd;
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
    grid-row-gap: 56px;
    grid-column-gap: 120px;

    .artItem {
      position: relative;

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
    }
  }
`
