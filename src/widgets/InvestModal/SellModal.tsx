import React, { useEffect, useState } from "react";
import { Modal, useModal } from "../Modal";
import CurrencyInputPanel from "../../components/CurrencyInputPanel";
import { formatNumber } from "../../utils";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import { Coin } from "../../state/types";
import { hoverTxtBoxShadow } from "../../utils/Animations";
import TokenListModal from "../TokenListModal";
import { InvestInfo, InvestLabel } from "./styles";
import { MotionButton } from "../../components/MotionButton/styles";
import { AutoColumn } from "../../components/Layout/Column";
import { getContract } from "../../utils/web3";
import cfscJson from "../../abi/facets/CrowdfundingFacet.json";
import {
  balanceOf,
  calculateSellPT,
  getBuyPrice,
  getProjectFee,
  getProjectToken,
  getProtocolFee,
  getStableCoin,
  getTotCirculatingPTAmt,
  iSell,
} from "../../helpers/callHelpers";
import { ethers } from "ethers";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { useToast } from "../../hooks/useToast";
import ptJson from "../../abi/ProjectToken.json";
import API from "../../api/api";
import stableJson from "../../abi/StableCoin.json";

interface Props {
  onDismiss?: () => void;
  cfAddr: string;
  projectID: string;
}

const InvestSellModal: React.FC<Props> = ({
  onDismiss = () => null,
  cfAddr,
  projectID,
}) => {
  const [sellAmount, setSellAmount] = useState("0");
  const [stableAmount, setStableAmount] = useState("0");
  const [onPresentTokenListModal] = useModal(<TokenListModal />);
  const [isPreview, setPreview] = useState(true);
  const { account, chainId } = useActiveWeb3React();
  const { toastSuccess, toastError } = useToast();
  const [projectFee, setProjectFee] = useState(0);
  const [protocolFee, setProtocolFee] = useState(0);
  const [projectToken, setProjectToken] = useState<Coin | null>(null);
  const [stableCoin, setStableCoin] = useState<Coin | null>(null);

  const handleSell = async () => {
    if (account && chainId) {
      try {
        onDismiss();
        const cfContract = getContract(cfscJson.abi, cfAddr, chainId);
        await iSell(
          cfContract,
          stableCoin!.address,
          ethers.utils.parseUnits(sellAmount.toString(), 18),
          account
        );

        const tokenSupply = ethers.utils.formatUnits(
          await getTotCirculatingPTAmt(cfContract),
          18
        );
        const buyprice = ethers.utils.formatUnits(
          await getBuyPrice(
            cfContract,
            ethers.utils.parseUnits(tokenSupply, 18)
          ),
          18
        );
        await API.updateMarketplace1Invest(projectID, {
          ptamt: sellAmount,
          price: buyprice,
          address: account,
          type: "sell",
        });
        toastSuccess("Transaction Confirmed", "");
      } catch (e: any) {
        toastError(e.name, e.message);
      }
    }
  };

  const onPTChange = async (value) => {
    if (account && chainId) {
      value = value === "" ? "0" : value;
      const cfContract = getContract(cfscJson.abi, cfAddr, chainId);
      setSellAmount(value);
      calculateSellPT(
        cfContract,
        stableCoin!.address,
        ethers.utils.parseUnits(value.toString(), 18)
      )
        .then((res) => {
          setStableAmount(ethers.utils.formatUnits(res, 18));
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (account && chainId) {
        const cfContract = getContract(cfscJson.abi, cfAddr, chainId);
        getProjectFee(cfContract).then((fee) =>
          setProjectFee(Number(fee) / 100)
        );
        getProtocolFee(cfContract).then((fee) =>
          setProtocolFee(Number(fee) / 100)
        );
        const ptAddr = await getProjectToken(cfContract);
        const ptContract = getContract(ptJson.abi, ptAddr, chainId);
        const ptSymbol = await ptContract.methods.symbol().call();
        const ptBalance = ethers.utils.formatUnits(
          await balanceOf(ptContract, account)
        );
        setProjectToken({
          address: ptAddr,
          balance: Number(ptBalance),
          symbol: ptSymbol,
        });

        const stableCoinAddr = await getStableCoin(cfContract);
        const stableContract = getContract(
          stableJson.abi,
          stableCoinAddr,
          chainId
        );
        const stableSymbol = await stableContract.methods.symbol().call();
        const stableBalance = ethers.utils.formatUnits(
          await balanceOf(stableContract, account)
        );
        setStableCoin({
          address: stableCoinAddr,
          balance: Number(stableBalance),
          symbol: stableSymbol,
        });
      }
    };
    loadData();
  }, [account, chainId, cfAddr]);
  return (
    <Modal title={""} onDismiss={onDismiss}>
      <AutoColumn gap={"24px"}>
        <AutoColumn>
          <Flex justifyContent={"space-between"} alignItems={"baseline"}>
            <InvestLabel fontSize={"18px"}>You want to sell</InvestLabel>
            <Text fontSize={"12px"}>
              Available: {formatNumber(Number(projectToken?.balance ?? 0))}{" "}
              {projectToken?.symbol}
            </Text>
          </Flex>
          <CurrencyInputPanel
            value={sellAmount}
            showMaxButton={true}
            currency={{
              symbol: projectToken?.symbol ?? "",
            }}
            disableCurrencySelect={true}
            id="currency-get"
            onUserInput={onPTChange}
            onMax={() => onPTChange(projectToken?.balance ?? 0)}
          />
        </AutoColumn>

        {/*<AutoColumn>*/}
        {/*	<InvestLabel fontSize={'18px'}>To Chain</InvestLabel>*/}
        {/*	<NetworkSelect activeChainID={activeChainID} onSelect={onPresentNetworkListModal}/>*/}
        {/*</AutoColumn>*/}

        <AutoColumn>
          <Flex justifyContent={"space-between"} alignItems={"baseline"}>
            <InvestLabel fontSize={"18px"}>You will receive</InvestLabel>
          </Flex>
          <CurrencyInputPanel
            value={formatNumber(Number(stableAmount))}
            showMaxButton={false}
            currency={{
              symbol: stableCoin?.symbol ?? "",
            }}
            id="currency-cost"
            onSelectToken={onPresentTokenListModal}
            disableCurrencySelect={true}
          />
          {/*<Flex justifyContent={'flex-end'}>*/}
          {/*	<Text fontSize={'12px'} color={'#7DFFD9'}>Your impact on token price: +2.3%</Text>*/}
          {/*</Flex>*/}
        </AutoColumn>

        {!isPreview && (
          <InvestInfo>
            {/*<Flex justifyContent={'space-between'} margin={'8px 0'}>*/}
            {/*  <InvestLabel>Avg.TEAp Price</InvestLabel>*/}
            {/*  <InvestLabel>$5.47</InvestLabel>*/}
            {/*</Flex>*/}
            {/*<hr/>*/}
            <Flex justifyContent={"space-between"} margin={"8px 0"}>
              <InvestLabel>Total Fees</InvestLabel>
              <InvestLabel>
                $
                {formatNumber(
                  Math.ceil(
                    (Number(stableAmount) * (projectFee + protocolFee)) / 100
                  )
                )}
              </InvestLabel>
            </Flex>
            <hr />

            <Flex justifyContent={"space-between"} margin={"8px 0"}>
              <InvestLabel>Total</InvestLabel>
              <InvestLabel>${formatNumber(Number(stableAmount))}</InvestLabel>
            </Flex>
          </InvestInfo>
        )}
        <Flex flexDirection={"column"}>
          {Number(sellAmount) > Number(projectToken?.balance ?? 0) && (
            <Text color={"red"} fontSize={"12px"} textAlign={"center"}>
              Insufficient balance
            </Text>
          )}
          {isPreview ? (
            <MotionButton
              whileHover={
                Number(sellAmount) > Number(projectToken?.balance ?? 0)
                  ? undefined
                  : hoverTxtBoxShadow
              }
              disabled={Number(sellAmount) > Number(projectToken?.balance ?? 0)}
              onClick={() => setPreview(false)}
            >
              Preview Sell
            </MotionButton>
          ) : (
            <MotionButton
              whileHover={
                Number(sellAmount) > Number(projectToken?.balance ?? 0)
                  ? undefined
                  : hoverTxtBoxShadow
              }
              disabled={Number(sellAmount) > Number(projectToken?.balance ?? 0)}
              onClick={handleSell}
            >
              Confirm
            </MotionButton>
          )}
        </Flex>
      </AutoColumn>
    </Modal>
  );
};

export default InvestSellModal;
