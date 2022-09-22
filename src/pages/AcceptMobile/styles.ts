import styled from "styled-components";

export const AcceptMobileViewWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    background-color: #ffffff;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    grid-gap: 16px;
    flex: 1;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #344054;
    }
    .subTitle {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #667085;
    }

    .openAnyway {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      text-transform: uppercase;
      color: #101828;
    }
  }
`;
