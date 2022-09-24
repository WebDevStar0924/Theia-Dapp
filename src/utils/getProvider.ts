import { ethers } from 'ethers'
import getRpcUrl from './getRpcUrl'

/**
 * Provides a web3 instance using our own private provider httpProver
 */

const activeWeb3Instance: any = {}

const getProvider = (chainId: number) => {
  if (!activeWeb3Instance[chainId]) {
    const RPC_URL = getRpcUrl(chainId)
    activeWeb3Instance[chainId] = new ethers.providers.JsonRpcProvider(
      RPC_URL,
      chainId,
    )
  }
  return activeWeb3Instance[chainId]
}

export default getProvider
