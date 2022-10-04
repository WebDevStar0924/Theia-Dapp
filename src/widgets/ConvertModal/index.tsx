import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { Flex } from '../../components/Flex'
import { InvestInfo, InvestLabel } from '../InvestModal/styles'
import { Text } from '../../components/Text'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import { formatNumber } from '../../utils'
import { hoverTxtBoxShadow } from '../../utils/Animations'
import { Handler } from '../Modal/types'
import { MotionButton } from '../../components/MotionButton/styles'
import { AutoColumn } from '../../components/Layout/Column'
import {
  balanceOf,
  getBuyPrice,
  getClaimablePCAmt,
  getClaimablePCUser,
  getMaxConvertiblePTUser,
  getProjectCoin,
  getProjectToken,
  getTotCirculatingPTAmt,
  iClaimCoin,
} from '../../helpers/callHelpers'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { getContract } from '../../utils/web3'
import cfscJson from '../../abi/facets/CrowdfundingFacet.json'
import ptJson from '../../abi/ProjectToken.json'
import pcJson from '../../abi/ProjectCoin.json'
import { ethers } from 'ethers'
import { useToast } from '../../hooks/useToast'
import { Coin } from '../../state/types'
import API from '../../api/api'

interface iProps {
  onDismiss?: Handler
  cfAddr: string
  projectID: string
}
const ConvertModal: React.FC<iProps> = ({
  onDismiss = () => null,
  cfAddr,
  projectID,
}) => {
  const [claimAmount, setClaimAmount] = useState('0')
  const [claimableAmt, setClaimableAmt] = useState('0')
  const [releasableAmt, setReleasableAmt] = useState(0)
  const { account, chainId } = useActiveWeb3React()
  const { toastSuccess, toastError } = useToast()
  const [projectToken, setProjectToken] = useState<Coin | null>(null)
  const [projectCoin, setProjectCoin] = useState<Coin | null>(null)
  const [maxConvertablePTAmt, setMaxConvertablePTAmt] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      if (account && chainId) {
        const cfContract = getContract(cfscJson.abi, cfAddr, chainId)
        getClaimablePCAmt(cfContract).then((value) =>
          setReleasableAmt(Number(ethers.utils.formatUnits(value, 18))),
        )
        const ptAddr = await getProjectToken(cfContract)
        const ptContract = getContract(ptJson.abi, ptAddr, chainId)
        const ptSymbol = await ptContract.methods.symbol().call()
        const ptBalance = ethers.utils.formatUnits(
          await balanceOf(ptContract, account),
        )
        setProjectToken({
          address: ptAddr,
          balance: Number(ptBalance),
          symbol: ptSymbol,
        })
        const maxConvertablePTAmt = Number(
          ethers.utils.formatUnits(
            await getMaxConvertiblePTUser(cfContract, account),
            18,
          ),
        )
        setMaxConvertablePTAmt(maxConvertablePTAmt)

        const pcAddr = await getProjectCoin(cfContract)
        const pcContract = getContract(pcJson.abi, pcAddr, chainId)
        const pcSymbol = await pcContract.methods.symbol().call()
        const pcBalance = ethers.utils.formatUnits(
          await balanceOf(pcContract, account),
        )
        setProjectCoin({
          address: pcAddr,
          balance: Number(pcBalance),
          symbol: pcSymbol,
        })
      }
    }
    loadData()
  }, [account, chainId, cfAddr])
  const handleConfirm = async () => {
    onDismiss && onDismiss()
    if (account && chainId) {
      try {
        const cfContract = getContract(cfscJson.abi, cfAddr, chainId)
        await iClaimCoin(
          cfContract,
          account,
          ethers.utils.parseUnits(claimAmount, 18),
        )
        const tokenSupply = ethers.utils.formatUnits(
          await getTotCirculatingPTAmt(cfContract),
          18,
        )
        const buyprice = ethers.utils.formatUnits(
          await getBuyPrice(
            cfContract,
            ethers.utils.parseUnits(tokenSupply, 18),
          ),
          18,
        )
        await API.updateMarketplace1Invest(projectID, {
          ptamt: claimAmount,
          price: buyprice,
          address: account,
          type: 'convert',
        })
        toastSuccess('Transaction Confirmed', '')
      } catch (e: any) {
        console.log(e)
        toastError(e.name, e.message)
      }
    }
  }

  const onUserInput = async (value) => {
    setClaimAmount(value)
    if (account && chainId) {
      const cfContract = getContract(cfscJson.abi, cfAddr, chainId)
      const pcAmt = ethers.utils.formatUnits(
        await getClaimablePCUser(
          cfContract,
          ethers.utils.parseUnits(value.toString(), 18),
        ),
        18,
      )
      setClaimableAmt(pcAmt)
    }
  }
  return (
    <Modal title={''} onDismiss={onDismiss}>
      <AutoColumn gap={'24px'}>
        <AutoColumn>
          <Flex justifyContent={'space-between'} alignItems={'baseline'}>
            <InvestLabel fontSize={'18px'}>
              Convert my {projectToken?.symbol}
            </InvestLabel>
            <Text fontSize={'12px'}>
              Available: {formatNumber(maxConvertablePTAmt)}{' '}
              {projectToken?.symbol}
            </Text>
          </Flex>
          <CurrencyInputPanel
            value={claimAmount}
            showMaxButton={true}
            currency={{
              symbol: projectToken?.symbol ?? '',
            }}
            disableCurrencySelect={true}
            id="currency-get"
            onUserInput={onUserInput}
            onMax={() => onUserInput(maxConvertablePTAmt.toString())}
          />
        </AutoColumn>

        <AutoColumn>
          <Flex justifyContent={'space-between'} alignItems={'baseline'}>
            <InvestLabel fontSize={'18px'}>You will receive</InvestLabel>
            <Text fontSize={'12px'}>
              Available: {formatNumber(Number(releasableAmt ?? 0))}{' '}
              {projectCoin?.symbol}
            </Text>
          </Flex>
          <CurrencyInputPanel
            value={formatNumber(Number(claimableAmt))}
            showMaxButton={false}
            currency={{
              symbol: projectCoin?.symbol ?? '',
            }}
            disableCurrencySelect={true}
            id="currency-cost"
          />
        </AutoColumn>

        <InvestInfo>
          <Flex justifyContent={'space-between'} margin={'8px 0'}>
            <InvestLabel>Total Fees</InvestLabel>
            <InvestLabel>$0</InvestLabel>
          </Flex>
        </InvestInfo>
        <Flex flexDirection={'column'}>
          {Number(claimAmount) > Number(maxConvertablePTAmt) && (
            <Text color={'red'} fontSize={'12px'} textAlign={'center'}>
              Insufficient Convertible balance
            </Text>
          )}
          <MotionButton
            whileHover={
              Number(claimAmount) > Number(projectToken?.balance ?? 0)
                ? undefined
                : hoverTxtBoxShadow
            }
            disabled={
              Number(claimAmount) > Number(projectToken?.balance ?? 0) ||
              Number(claimAmount) === 0
            }
            onClick={handleConfirm}
          >
            Confirm
          </MotionButton>
        </Flex>
      </AutoColumn>
    </Modal>
  )
}

export default ConvertModal
