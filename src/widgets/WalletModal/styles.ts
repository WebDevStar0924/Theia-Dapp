import styled from "styled-components";

export const ConnectModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    text-align: center;
  }

  .description {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #667085;
    margin-top: 16px;
  }

  .walletList {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    margin-top: 40px;
  }

  .newCrypto {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #101828;
    margin-top: 32px;
  }
  .learnWallet {
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #444ce7;
    margin-top: 16px;
  }
`;

export const WallerCardWrapper = styled.div`
  cursor: pointer;
  background: #fcfcfd;
  border: 1px solid #e4e7ec;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 17px 32px;

  &:hover {
    background: #f2f4f7;
  }
`;
