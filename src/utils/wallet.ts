import { CHAIN_PARAMS } from '../config/constants/chains'

export const setupNetwork = async (chainId: number) => {
  const provider = (window as WindowChain).ethereum
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [CHAIN_PARAMS[chainId]],
      })
      return true
    } catch (error) {
      console.warn(error)
      return false
    }
  } else {
    console.warn(
      "Can't setup the BSC network on metamask because window.ethereum is undefined",
    )
    return false
  }
}
