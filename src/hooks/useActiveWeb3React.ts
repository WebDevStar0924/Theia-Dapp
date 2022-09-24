import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import getProvider from '../utils/getProvider'
import { CHAIN_ID } from '../config/constants/chains'

const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { account, library, chainId, ...web3React } = useWeb3React()
  const appProvider = getProvider(CHAIN_ID.AVAX_FUJI)

  const refEth = useRef(library)
  const [provider, setProvider] = useState(library || appProvider)

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || appProvider)
      refEth.current = library
    }
  }, [library, appProvider])

  return {
    library: provider,
    chainId: chainId || CHAIN_ID.AVAX_FUJI,
    account,
    ...web3React,
  }
}

export default useActiveWeb3React
