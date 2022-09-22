import { MarketInfoItem, MarketInfoWrapper } from "./styles";

export default function MarketInfo() {
  return (
    <MarketInfoWrapper>
      <MarketInfoItem>
        <div className={"marketValue"}>$344M</div>
        <div className={"marketName"}>Market Cap of THEIA Ecosystem</div>
      </MarketInfoItem>
      <MarketInfoItem>
        <div className={"marketValue"}>43%</div>
        <div className={"marketName"}>Circulating Supply Locked</div>
      </MarketInfoItem>
      <MarketInfoItem>
        <div className={"marketValue"}>297</div>
        <div className={"marketName"}>Days Locked on Average</div>
      </MarketInfoItem>
    </MarketInfoWrapper>
  );
}
