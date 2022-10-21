import styled from 'styled-components'

export const ForumSubCommentCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0px 0px 0px;
  margin-left: 56px;
  margin-top: 20px;
  flex-direction: column;
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
  .replyBox {
    .inputLayout {
      padding: 10px 0px;
    }
  }
  .dataLayout {
    width: 100%;
    margin-top: 16px;
    .replyActionLayout {
      flex-direction: row;
      grid-gap: 57px;
      margin-left: 10px;
      margin-top: 20px;
    }
    .postHeader {
      max-width: 490px;
      .ownerName {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #101828;
      }
      .postedTime {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        align-items: center;
        color: #98a2b3;
      }
    }
    .userInfo {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      align-items: center;
      color: #3538cd;
      margin-left: 10px;
    }
    .postContext {
      max-width: 490px;
      margin-top: 10px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      position: relative;
      color: #000000;
    }
    .imageLayout {
      display: grid;
      margin-top: 20px;
      grid-template-columns: auto auto;
      justify-items: center;
      img {
        width: 270px;
        height: 288px;
        border-radius: 8px;
        object-fit: cover;
      }
    }
    .commentButton {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #667085;
      :hover {
        cursor: pointer;
        color: lightgrey;
      }
    }
  }
`
