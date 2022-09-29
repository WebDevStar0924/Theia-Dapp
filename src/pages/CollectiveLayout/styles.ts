import styled from 'styled-components'

export const CollectiveLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 22px;

  .collectiveDetails {
    display: flex;
    flex-direction: column;
    flex: 1;
    grid-gap: 24px;

    max-height: calc(100vh - 96px);
    overflow-y: scroll;
  }
`

export const CollectiveHeaderWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e4e7ec;
  border-radius: 30px;
  position: relative;

  .bannerImg {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 30px 30px 0 0;
  }

  .avatarImg {
    position: absolute;
    top: 120px;
    left: 46px;
    width: 160px;
    height: 160px;
    border: 2px solid #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);
    border-radius: 100px;
  }

  .detailActions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-left: 227px;
    margin-top: 14px;
    margin-bottom: 14px;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #101828;
      margin-bottom: 12px;
    }
    .shortDescription {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #475467;
    }

    .detailMore {
      display: flex;

      .stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 64px;
        background: #f2f4f7;
        border-radius: 16px;
        margin-right: 16px;

        .stats_value {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #000000;
        }
        .stats_label {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #475467;
        }
      }
      .detailMoreBtn2 {
        margin-left: 24px;
        margin-right: 24px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        color: #667085;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 12px;
        float: right;
        min-width: 80px;
        padding: 4px 12px;
        svg {
          fill: #667085;
        }
        &:hover {
          border: 2px solid rgba(18, 183, 106, 0.5);
          box-shadow: 0px 0px 4px 2px rgba(18, 183, 106, 0.2);
          color: rgba(18, 183, 106, 0.8);
          svg {
            color: rgba(18, 183, 106, 0.8);
            fill: rgba(18, 183, 106, 0.8);
          }
        }
        &.active {
          border: 3px solid #12b76a;
          color: #039855;
        }
      }
    }
  }
`

export const CollectiveSidebarWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 6px;
  gap: 40px;
  background: #ffffff;
  border: 2px solid #e4e7ec;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;

  .userNftAvatar {
    width: 150px;
    height: 150px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
    clip-path: path(
      'M63 10.9892C70.4256 6.70205 79.5744 6.70205 87 10.9892L127.952
        34.6328C135.378 38.92 139.952 46.8431 139.952 55.4174V102.705C139.952
        111.279 135.378 119.202 127.952 123.489L87 147.133C79.5744 151.42
        70.4256 151.42 63 147.133L22.0481 123.489C14.6225 119.202 10.0481
        111.279 10.0481 102.705L10.0481 55.4174C10.0481 46.8431 14.6225 38.92
        22.0481 34.6328L63 10.9892Z'
    );
  }

  .createBtns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;

    .eventToggleBtn {
      cursor: pointer;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: #e4e7ec;
      position: relative;

      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover {
        background: #d0d5dd;
      }

      &.active {
        background: #e0eaff;
        svg {
          color: #444ce7;
        }
      }
    }

    .eventBtn {
      cursor: pointer;
      width: 124px;
      height: 48px;

      border: 2px solid #e4e7ec;
      border-radius: 200px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #101828;

      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      padding: 0 20px;

      &:hover {
        border: 2px solid #8098f9;
      }
      span {
        text-transform: uppercase;
      }
    }
  }
`
