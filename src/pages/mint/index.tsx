import { useEffect, useState } from "react";
import { Container } from "../../components";
import "./mint.scss";
import MintDetailItem from "./MintDetailItem";
import MintItem from "./MintItem";

import ERC1155Abi from "abi/ERC1155Collection.json";
import { Ellipse1Icon, Ellipse2Icon } from "components/Svg";
import { addresses } from "config/address";
import { CHAIN_ID } from "config/constants/chains";
import { ethers } from "ethers";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useAuth from "hooks/useAuth";
import { useToast } from "hooks/useToast";
import WhitelistMapManager from "library/merkle/whitelist-map-manager";
import { getContract } from "utils/web3";
import { useWalletModal } from "widgets/WalletModal";
import arrakisBg from "../../assets/image/arrakisBg.png";
import ArrakisImg from "../../assets/image/arrakisImg.png";
import bepopBg from "../../assets/image/bepopBg.png";
import BepopImg from "../../assets/image/bepopImg.png";
import WandererImg from "../../assets/image/wandererImg.png";
import wanderersBg from "../../assets/image/wanderersBg.png";
import BepopWhitelistJson from "./bepopWhitelist.json";
const ItemDetailArray = [
  {
    video:
      "https://theia.mypinata.cloud/ipfs/QmdVUrHSdExtfuq64D7ehPREA1roRHYH4mrGKW7XLgkTCc",
    title: "YOU ARE A BEPOP",
    content:
      "“Angels banished from heaven have no choice but to become devils.”",
  },
  {
    video:
      "https://theia.mypinata.cloud/ipfs/QmTSMeg1N2jUTtyBn2tyXKWHwH9A9F5M1TjtutF4wwryAE",
    title: "YOU ARE AN ARRAKIS",
    content:
      "“Fear is the mind-killer. Fear is the little-death that brings total obliteration.”",
  },
  {
    video:
      "https://theia.mypinata.cloud/ipfs/QmdUdkcuJYe2MsiFzgJMbEG9Qtap9x92qyY4kgowsD4DoX",
    title: "YOU ARE A WANDERER",
    content:
      "“Do not go gentle into that good night; Old age should burn and rave at close of day. Rage, rage against the dying of the light.”",
  },
];
const Mint = () => {
  const [isDetail, setDetail] = useState<boolean>(false);
  const [selectedItem, setItem] = useState<number>(0);
  const { account } = useActiveWeb3React();
  const { toastError } = useToast();
  const merkleBepopList = new WhitelistMapManager(BepopWhitelistJson);
  const [loading, setLoading] = useState([false, false, false]);
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined
  );

  const genesisContract = getContract(
    ERC1155Abi.abi,
    addresses.genesis[CHAIN_ID.ETH],
    CHAIN_ID.ETH
  );

  const [mintItems, updateMintItems] = useState([
    {
      tokenID: 0,
      title: "BEPOP",
      maxSupply: 200,
      icon: BepopImg,
      currentSupply: 0,
      mintPrice: 0,
      background: bepopBg,
    },
    {
      tokenID: 1,
      title: "ARRAKIS",
      maxSupply: 400,
      icon: ArrakisImg,
      currentSupply: 0,
      mintPrice: 0,
      background: arrakisBg,
    },
    {
      tokenID: 2,
      title: "WANDERERS",
      maxSupply: 2000,
      icon: WandererImg,
      currentSupply: 0,
      mintPrice: 0,
      background: wanderersBg,
    },
  ]);

  useEffect(() => {
    const load = async () => {
      const bepopSupply = await genesisContract.methods.totalSupply(0).call();
      const arrakisSupply = await genesisContract.methods.totalSupply(1).call();
      const wandererSupply = await genesisContract.methods
        .totalSupply(2)
        .call();

      const bepopPrice = 0;
      const arrakisPrice = await genesisContract.methods.mintPrice(1).call();
      const wandererPrice = await genesisContract.methods.mintPrice(2).call();

      const newMintItems = [...mintItems];
      newMintItems[0].currentSupply = bepopSupply;
      newMintItems[1].currentSupply = arrakisSupply;
      newMintItems[2].currentSupply = wandererSupply;

      newMintItems[0].mintPrice = bepopPrice;
      newMintItems[1].mintPrice = arrakisPrice;
      newMintItems[2].mintPrice = wandererPrice;

      console.log("wandererPrice = ", wandererPrice);
      updateMintItems(newMintItems);
    };
    load();
  }, []);

  const handleMint = async (tokenID) => {
    if (account) {
      if (tokenID === 0) {
        if (BepopWhitelistJson[account]) {
          const userInfo = merkleBepopList.merkleInfo.list[account];
          setLoading({
            ...loading,
            0: true,
          });
          try {
            await genesisContract.methods
              .whitelistMint(
                account,
                tokenID,
                1,
                ethers.constants.HashZero,
                userInfo.index,
                userInfo.proof,
                userInfo.amount
              )
              .send({
                from: account,
              });
            setItem(tokenID);
            setDetail(true);
          } catch {
            toastError("Failed to mint", "");
          }
          setLoading({
            ...loading,
            [0]: false,
          });
        } else {
          toastError("Your wallet is not whitelist", "");
        }
      } else {
        setLoading({
          ...loading,
          [tokenID]: true,
        });
        try {
          await genesisContract.methods
            .publicMint(account, tokenID, 1, ethers.constants.HashZero)
            .send({
              from: account,
              value: mintItems[tokenID].mintPrice,
            });
          setItem(tokenID);
          setDetail(true);
        } catch (e) {
          toastError("Failed to mint", "");
        }
        setLoading({
          ...loading,
          [tokenID]: false,
        });
      }
    } else {
      onPresentConnectModal();
    }
  };

  return (
    <div className="mint-wrapper">
      <Ellipse1Icon className="ellipse-1" />
      <Ellipse2Icon className="ellipse-2" />
      <Container>
        <div className="main-container">
          <h3 className="main-container__title">MINT ALPHA PASSES</h3>

          <div className="main-container__item-container">
            {!isDetail ? (
              <>
                {mintItems.map((item, idx) => (
                  <MintItem
                    key={`mint_item_${idx}`}
                    mintItem={item}
                    loading={loading[item.tokenID]}
                    onClick={() => {
                      handleMint(item.tokenID);
                    }}
                  />
                ))}
              </>
            ) : (
              <MintDetailItem
                videoSrc={ItemDetailArray[selectedItem].video}
                title={ItemDetailArray[selectedItem].title}
                content={ItemDetailArray[selectedItem].content}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mint;
