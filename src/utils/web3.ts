import { AbiItem } from 'web3-utils'
import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import { ContractOptions } from 'web3-eth-contract'
import getRpcUrl from './getRpcUrl'

const activeWeb3Instance = {}

const getWeb3 = (chainId: number) => {
  if ((window as WindowChain).web3) {
    activeWeb3Instance[chainId] = new Web3(
      (window as WindowChain).web3.currentProvider,
    )
  } else {
    const RPC_URL = getRpcUrl(chainId)
    const httpProvider = new Web3.providers.HttpProvider(RPC_URL, {
      timeout: 10000,
    } as HttpProviderOptions)
    activeWeb3Instance[chainId] = new Web3(httpProvider)
  }
  return activeWeb3Instance[chainId]
}

const getContract = (
  abi: any,
  address: string,
  chainId: number,
  contractOptions?: ContractOptions,
) => {
  const web3 = getWeb3(chainId)
  return new web3.eth.Contract(abi as AbiItem, address, contractOptions)
}

const getTx = (txHash: string, chainId) => {
  const web3 = getWeb3(chainId)
  return web3.eth.getTransaction(txHash)
}

export { getWeb3, getContract, getTx }
