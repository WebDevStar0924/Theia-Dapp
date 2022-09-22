import cn from "classnames";
import { SpinnerIcon } from "components/Svg";
import { ethers } from "ethers";
import { ReactComponent as EthereumSvg } from "./ethereum.svg";
import { MintCard } from "./styles";
interface iProps {
  mintItem: any;
  onClick: () => void;
  loading: boolean;
}

const MintItem = ({ onClick, loading, mintItem }: iProps) => {
  return (
    <div className="mint-item-wrapper">
      <MintCard background={mintItem.background}>
        <img
          src={mintItem.icon}
          className="mint-item-wrapper__img"
          alt="Bepop"
        />
        {mintItem.tokenID === 0 && (
          <div className={`mintTag ${mintItem.title.toLowerCase()}`}>
            Whitelist only
          </div>
        )}
        {mintItem.tokenID === 1 &&
          mintItem.currentSupply >= mintItem.maxSupply && (
            <div className={`mintTag ${mintItem.title.toLowerCase()}`}>
              SOLD OUT
            </div>
          )}
        {mintItem.tokenID === 2 && (
          <div className={`mintTag ${mintItem.title.toLowerCase()}`}>
            <EthereumSvg />
            &nbsp;{ethers.utils.formatEther(mintItem.mintPrice.toString())}
            &nbsp;ETH
          </div>
        )}
        <h4 className="mint-item-wrapper__title">{mintItem.title}</h4>
      </MintCard>
      <h4 className="mint-item-wrapper__title">
        {mintItem.currentSupply} / {mintItem.maxSupply}
      </h4>
      <div className="mintRemaining">
        <span>{mintItem.maxSupply - mintItem.currentSupply}</span>
        &nbsp;remaining
      </div>
      <div
        className={cn("mintBtn", {
          disabled: loading || mintItem.currentSupply >= mintItem.maxSupply,
        })}
        onClick={() => {
          if (!loading && mintItem.currentSupply < mintItem.maxSupply) {
            onClick();
          }
        }}
      >
        {loading ? (
          <SpinnerIcon className={"loading-icon"} />
        ) : mintItem.tokenID === 1 &&
          mintItem.currentSupply >= mintItem.maxSupply ? (
          "SOLD OUT"
        ) : (
          "MINT"
        )}
      </div>
    </div>
  );
};

export default MintItem;
