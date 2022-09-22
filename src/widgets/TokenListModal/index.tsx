import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { StyledInput } from "../../components/CurrencyInputPanel/NumericalInput";
import { Text } from "../../components/Text";
import styled from "styled-components";
import { Currency } from "../../components/CurrencyInputPanel/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/types";
import { setActiveCurrency } from "../../state/chain";
import { AutoColumn } from "../../components/Layout/Column";
import API from "../../api/api";
import { AutoRow } from "../../components/Layout/Row";

interface Props {
  onDismiss?: () => null;
}

const CurrencyItem = styled.div<{ active?: boolean }>`
  font-size: 18px;
  line-height: 48px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 48px;
  display: flex;
  align-items: center;

  img {
    margin-right: 6px;
  }

  background-color: ${({ active }) => (active ? "#0000004D" : "transparent")};

  &:hover {
    background-color: #0000002d;
  }
`;

const CurrencyList = styled.div`
  height: 420px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    height: 156px;
  }
`;

const RecommendedCurrency = styled.div`
  width: 87px;
  height: 28px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  padding: 8px 4px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const TokenListModal: React.FC<Props> = ({ onDismiss }) => {
  const [searchStr, setSearchStr] = useState("");
  const { activeChainID, activeCurrency } = useSelector(
    (state: State) => state.chain
  );
  const [tokenList, setTokenList] = useState<Currency[]>([]);

  const dispatch = useDispatch();
  const handleSetCurrency = (token: Currency) => {
    dispatch(setActiveCurrency(token));
    onDismiss && onDismiss();
  };

  useEffect(() => {
    API.getAvailbleTokens(1).then((res) => {
      setTokenList(Object.values(res.data));
    });
  }, [activeChainID]);

  return (
    <Modal
      title={"Select Token"}
      onDismiss={onDismiss}
      bgColor={"#272727"}
      bodyPadding={"8px 0 0 0"}
    >
      <AutoColumn gap={"12px"}>
        <AutoColumn gap={"12px"} style={{ padding: "0 40px" }}>
          <StyledInput
            value={searchStr}
            onChange={(event) => {
              setSearchStr(event.target.value);
            }}
            autoComplete={"off"}
            autoCorrect={"off"}
            type={"text"}
            placeholder={"Search by token name"}
            fontSize={"18px"}
            style={{
              backgroundColor: "#FFFFFF10",
              padding: "8px 16px",
              borderRadius: "8px",
              lineHeight: "32px",
              width: "100%",
            }}
          />

          <Text fontSize={"12px"}>Recommended (Low fees)</Text>
          <AutoRow gap={"8px"}>
            {[0, 1, 2].map(
              (index) =>
                tokenList[index] && (
                  <RecommendedCurrency
                    onClick={() => handleSetCurrency(tokenList[index])}
                  >
                    <img
                      src={tokenList[index].logoUrl}
                      alt={"tokenlogo"}
                      width={"20px"}
                    />
                    {tokenList[index].symbol}
                  </RecommendedCurrency>
                )
            )}
          </AutoRow>
        </AutoColumn>
        <hr />
        <CurrencyList>
          {tokenList
            .filter((token) =>
              token.symbol.toLowerCase().includes(searchStr.toLowerCase())
            )
            .map((token, index) => (
              <CurrencyItem
                key={`currency_${index}`}
                active={activeCurrency?.symbol === token.symbol}
                onClick={() => handleSetCurrency(token)}
              >
                <img src={token.logoUrl} alt={"tokenlogo"} width={"20px"} />
                {token.symbol}
              </CurrencyItem>
            ))}
        </CurrencyList>
      </AutoColumn>
    </Modal>
  );
};

export default TokenListModal;
