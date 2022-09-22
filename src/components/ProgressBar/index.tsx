import { ProgressBarWrapper } from "./styles";
import ReactTooltip from "react-tooltip";

interface iProps {
  firstValue: number;
  bgColor: string;
  activeColor: string;
  secondValue?: number;
  totalValue: number;
  secondColor?: string;
  showTooltip?: boolean;
  address?: string;
  symbol?: string;
}

export default function ProgressBar(props: iProps) {
  const {
    bgColor,
    activeColor,
    firstValue,
    secondValue,
    totalValue,
    secondColor,
    showTooltip,
    address,
    symbol,
  } = props;
  return (
    <ProgressBarWrapper bgColor={bgColor}>
      <div
        data-tip
        data-for={`investTooltip_${address}`}
        style={{
          backgroundColor: activeColor,
          height: "8px",
          borderRadius: "4px",
          width: `${Math.round((firstValue * 100) / totalValue)}%`,
          zIndex: 2,
        }}
      />
      {secondValue !== undefined && (
        <div
          data-tip
          data-for={`convertTooltip_${address}`}
          style={{
            backgroundColor: secondColor,
            height: "8px",
            borderRadius: "4px",
            width: `${Math.round((secondValue * 100) / totalValue)}%`,
            marginLeft: "-4px",
            zIndex: 1,
          }}
        />
      )}
      {showTooltip && (
        <>
          <ReactTooltip
            id={`investTooltip_${address}`}
            place={"top"}
            type={"dark"}
            effect={"solid"}
          >
            {firstValue} {symbol} Invested
          </ReactTooltip>
          <ReactTooltip
            id={`convertTooltip_${address}`}
            place={"top"}
            type={"dark"}
            effect={"solid"}
          >
            {secondValue} {symbol} Converted
          </ReactTooltip>
        </>
      )}
    </ProgressBarWrapper>
  );
}
