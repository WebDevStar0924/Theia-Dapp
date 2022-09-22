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
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { useToast } from "../../hooks/useToast";
import {
  approve,
  balanceOf,
  calculateBuyPT,
  getAllowance,
  getBuyPrice,
  getProjectFee,
  getProjectToken,
  getProtocolFee,
  getStableCoin,
  getTotCirculatingPTAmt,
  iBuy,
} from "../../helpers/callHelpers";
import { getContract } from "../../utils/web3";
import cfscJson from "../../abi/facets/CrowdfundingFacet.json";
import stableJson from "../../abi/StableCoin.json";
import { ethers } from "ethers";
import API from "../../api/api";
import ptJson from "../../abi/ProjectToken.json";

interface Props {
  onDismiss?: () => void;
  cfAddr: string;
  projectID: string;
}

const InvestBuyModal: React.FC<Props> = ({
  onDismiss = () => null,
  cfAddr,
  projectID,
}) => {
  const [buyAmount, setBuyAmount] = useState("0");
  const [slippageAmt, setSlippageAmt] = useState("0");
  const [stableAmount, setStableAmount] = useState("0");
  const [onPresentTokenListModal] = useModal(<TokenListModal />);
  const [isPreview, setPreview] = useState(true);
  const { account, chainId } = useActiveWeb3React();
  const { toastSuccess, toastError } = useToast();
  const [projectFee, setProjectFee] = useState(0);
  const [protocolFee, setProtocolFee] = useState(0);
  const [projectToken, setProjectToken] = useState<Coin | null>(null);
  const [stableCoin, setStableCoin] = useState<Coin | null>(null);

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

  const handleInvest = async () => {
    if (account && chainId && stableCoin) {
      try {
        onDismiss();
        const cfContract = getContract(cfscJson.abi, cfAddr, chainId);
        const stableContract = getContract(
          stableJson.abi,
          stableCoin.address,
          chainId
        );
        const stableEtherAmount = ethers.utils.parseUnits(
          (Number(stableAmount) + Number(slippageAmt)).toString(),
          18
        );
        const allowance = ethers.utils.formatUnits(
          await getAllowance(stableContract, account, cfAddr),
          18
        );
        if (Number(allowance) < Number(stableAmount)) {
          await approve(
            stableContract,
            cfAddr,
            account,
            ethers.constants.MaxUint256
          );
        }
        await iBuy(
          cfContract,
          stableCoin.address,
          stableEtherAmount,
          ethers.utils.parseUnits(buyAmount.toString(), 18),
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
          ptamt: buyAmount,
          price: buyprice,
          address: account,
          type: "buy",
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
      setBuyAmount(value);
      calculateBuyPT(
        cfContract,
        stableCoin?.address,
        ethers.utils.parseUnits(value.toString(), 18).toString()
      )
        .then((res) => {
          setStableAmount(ethers.utils.formatUnits(res, 18));
          setSlippageAmt(
            ethers.utils.formatUnits((Number(res) * 0.075).toString(), 18)
          );
        })
        .catch(console.error);
    }
  };

  const handlePreview = async () => {
    setPreview(false);
  };
  return (
    <Modal title={""} onDismiss={onDismiss}>
      <AutoColumn gap={"24px"}>
        <AutoColumn>
          <Flex justifyContent={"space-between"} alignItems={"baseline"}>
            <InvestLabel fontSize={"18px"}>You want to buy</InvestLabel>
          </Flex>
          <CurrencyInputPanel
            value={buyAmount}
            showMaxButton={false}
            currency={{
              symbol: projectToken?.symbol ?? "",
            }}
            disableCurrencySelect={true}
            id="currency-get"
            onUserInput={onPTChange}
          />
        </AutoColumn>

        {/*<AutoColumn>*/}
        {/*	<InvestLabel fontSize={'18px'}>From Chain</InvestLabel>*/}
        {/*	<NetworkSelect activeChainID={activeChainID} onSelect={onPresentNetworkListModal}/>*/}
        {/*</AutoColumn>*/}

        <AutoColumn>
          <Flex justifyContent={"space-between"} alignItems={"baseline"}>
            <InvestLabel fontSize={"18px"}>It will cost</InvestLabel>
            <Text fontSize={"12px"}>
              Available: {formatNumber(Number(stableCoin?.balance ?? 0))}{" "}
              {stableCoin?.symbol}
            </Text>
          </Flex>
          <CurrencyInputPanel
            value={formatNumber(Number(stableAmount) + Number(slippageAmt))}
            showMaxButton={false}
            currency={{
              symbol: stableCoin?.symbol ?? "",
            }}
            id="currency-cost"
            onSelectToken={onPresentTokenListModal}
            disableCurrencySelect={true}
          />
          <Flex justifyContent={"flex-end"}>
            <Text fontSize={"12px"} color={"#7DFFD9"}>
              Max slippage: +7.5%
            </Text>
          </Flex>
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
              <InvestLabel>
                ${formatNumber(Number(stableAmount), 0)}
              </InvestLabel>
            </Flex>
          </InvestInfo>
        )}
        <Flex flexDirection={"column"}>
          {Number(stableAmount) + Number(slippageAmt) >
            Number(stableCoin?.balance ?? 0) && (
            <Text color={"red"} fontSize={"12px"} textAlign={"center"}>
              Insufficient balance
            </Text>
          )}
          {isPreview ? (
            <MotionButton
              whileHover={
                Number(stableAmount) + Number(slippageAmt) >
                Number(stableCoin?.balance ?? 0)
                  ? undefined
                  : hoverTxtBoxShadow
              }
              onClick={handlePreview}
              disabled={
                Number(stableAmount) + Number(slippageAmt) >
                Number(stableCoin?.balance ?? 0)
              }
            >
              Preview Investment
            </MotionButton>
          ) : (
            <MotionButton
              whileHover={
                Number(stableAmount) + Number(slippageAmt) >
                Number(stableCoin?.balance ?? 0)
                  ? undefined
                  : hoverTxtBoxShadow
              }
              onClick={handleInvest}
              disabled={
                Number(stableAmount) + Number(slippageAmt) >
                Number(stableCoin?.balance ?? 0)
              }
            >
              Confirm
            </MotionButton>
          )}
        </Flex>
      </AutoColumn>
    </Modal>
  );
};

export default InvestBuyModal;
