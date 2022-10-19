import styled from 'styled-components'

export const EventPostCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 13px;
  :hover{
    background: #fbfbfb;
    cursor: pointer;
  }
  width: 100%;
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
  .rightPart {
    width: 100%;
    margin-top: 16px;
    .replyActionLayout {
      flex-direction: row;
      grid-gap: 90px;
      margin-left: 10px;
    }
    .postHeader {
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
    .postContext {
      grid-gap: 10px;
      .description {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        color: #000000;
      }
      .detailContent {
        .leftContent {
          background: #f9fafb;
          padding: 16px;
          width: 50%;
          .eventTitle {
            margin-top: 12px;
            margin-bottom: 16px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
            text-align: center;
            color: #101828;
          }
          .locationTag {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4px 8px;
            gap: 4px;
            width: 70px;
            height: 26px;
            background: #101828;
            border-radius: 16px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #ffffff;
          }
          .eventDate,
          .eventTime {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 12px;
            color: #475467;
          }
          .eventTime {
            margin-bottom: 15px;
            margin-top: 10px;
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
            width: 25px;
            height: 25px;
            margin-right: 8px;
          }
          .userName {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #475467;
          }
          .followUser {
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
            width: 33px;
            height: 33px;
            margin-left: -10px;
          }
          .moreUser {
            display: flex;
            background: #e8eaed;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            margin-left: -10px;
            z-index: 100;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #1b1f23;
            width: 33px;
            height: 33px;
          }
        }
        img {
          width: 275px;
          height: 236px;
          border-radius: 0px 8px 8px 0px;
        }
      }
      .rsvpButton {
        background: #0f172a;
        color: white;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        border-radius: 8px;
      }
    }
  }
`
