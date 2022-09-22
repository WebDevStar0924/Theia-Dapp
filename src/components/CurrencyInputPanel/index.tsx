import React from "react";
import styled from "styled-components";

import { Input as NumericalInput } from "./NumericalInput";
import { Currency } from "./types";
import { Text } from "../Text";
import { motion } from "framer-motion";
import ArrowDropDown from "../Svg/Icons/ArrowDropDown";
import { hoverTxtBoxShadow } from "../../utils/Animations";

const InputPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  flex: 2;
  height: 32px;
`;

const CurrencyInputContainer = styled.div<{ margin?: string }>`
  background-color: ${({ theme }) => (theme.isDark ? "#383838" : "#F9FAFB")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  margin: ${({ margin }) => (margin ? margin : "0")};

  ${({ theme }) => theme.mediaQueries.md} {
    width: 384px;
    flex-direction: row;
  }
`;

const MaxButton = styled(Text)`
  font-size: 12px;
  color: #adb1ff;
  line-height: 28px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #7378d9;
  }
`;

const CurrencySelectButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  color: #fff;
  background: #191a2b;
  line-height: 24px;
  width: 112px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
`;

interface CurrencyInputPanelProps {
  value: string;
  onUserInput?: (value: string) => void;
  onMax?: () => void;
  showMaxButton: boolean;
  currency?: Currency;
  disableCurrencySelect?: boolean;
  hideBalance?: boolean;
  id: string;
  onSelectToken?: () => void;
}

export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  currency,
  disableCurrencySelect,
  onSelectToken,
}: CurrencyInputPanelProps) {
  return (
    <CurrencyInputContainer>
      <InputPanel>
        <Container>
          <NumericalInput
            id="token-amount-input"
            value={value}
            align={"left"}
            onUserInput={(val) => {
              onUserInput && onUserInput(val);
            }}
          />
        </Container>
        {showMaxButton && <MaxButton onClick={onMax}>MAX</MaxButton>}
        {disableCurrencySelect ? (
          <Text marginLeft={"12px"}>{currency?.symbol}</Text>
        ) : (
          <CurrencySelectButton
            whileHover={hoverTxtBoxShadow}
            onClick={onSelectToken}
          >
            {currency?.logoUrl && (
              <img src={currency?.logoUrl} alt={"tokenlogo"} width={"20px"} />
            )}
            {currency?.symbol}
            <ArrowDropDown />
          </CurrencySelectButton>
        )}
      </InputPanel>
    </CurrencyInputContainer>
  );
}
