import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { CopyIcon } from "../../components/Svg";

interface Props {
  toCopy?: string | number;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) =>
    isTooltipDisplayed ? "block" : "none"};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  font-family: poppins;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <StyleButton
      small
      bold
      color={"link"}
      onClick={() => {
        navigator.clipboard.writeText(JSON.stringify(toCopy));
        setIsTooltipDisplayed(true);
        setTimeout(() => {
          setIsTooltipDisplayed(false);
        }, 1000);
      }}
      {...props}
    >
      <CopyIcon width="20px" color="link" mr="4px" />
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
      {children}
    </StyleButton>
  );
};

CopyToClipboard.defaultProps = {
  toCopy: "",
};

export default CopyToClipboard;
