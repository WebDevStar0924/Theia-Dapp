import styled from "styled-components";

export const TopSupporterWrapper = styled.div`
  background: conic-gradient(
    from 61.76deg at 6.71% -16.99%,
    #965de8 0deg,
    #bebbff 61.87deg,
    #049289 148.13deg,
    #dc9f9f 173.28deg,
    #ffd3d3 198.45deg,
    #eabfda 230.91deg,
    #7a50ff 295.08deg,
    #965de8 360deg
  );
  padding: 30px 60px;
  border-radius: 30px;
  backdrop-filter: opacity(0.5);

  .title {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #ffffff;
    text-align: center;
  }

  .supporter-list {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const TopSupporter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 400px;

  .noise {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(https://grainy-gradients.vercel.app/noise.svg);
    opacity: 0.5;
  }

  .bottomShape {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .supporterIcon {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
  }
  .supporterType {
    width: 100%;
    margin-top: 10px;
  }
  .supporterImg {
    margin-top: 18px;
    position: relative;
    width: 231px;
    height: 231px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 4px solid transparent;
      border-radius: 100%;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      background: radial-gradient(
          122.53% 48.31% at -40.12% 135.08%,
          #544949 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        radial-gradient(
          82.72% 80.43% at -8.95% -58.14%,
          #ffffff 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        radial-gradient(
          163.27% 64.37% at 121.3% 37.79%,
          #ffffff 0%,
          rgba(255, 255, 255, 0) 100%
        );
      backdrop-filter: blur(4px);
    }
    img {
      margin: 2px;
      width: 227px;
      height: 227px;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      position: relative;
    }
  }
  .supporterName {
    margin-top: 20px;
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
