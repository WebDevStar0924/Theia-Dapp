import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorsByName, localStorageKey } from '../utils/web3React'

import { useDispatch } from 'react-redux'
import { setupNetwork } from '../utils/wallet'
import { profileClear } from '../state/profile'
import { CHAIN_ID } from '../config/constants/chains'
import { ConnectorNames } from '../config/constants'
import { useToast } from './useToast'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const dispatch = useDispatch()
  const { toastError } = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork(CHAIN_ID.ETH)
          if (hasSetup) {
            activate(connector)
          }
        } else {
          window.localStorage.removeItem(localStorageKey)
          if (
            error instanceof NoEthereumProviderError ||
            error instanceof NoBscProviderError
          ) {
            toastError(
              'Provider Error',
              'To connect you need a web3 enabled browser.',
            )
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector
              walletConnector.walletConnectProvider = null
            }
            toastError(
              'Authorization Error',
              'Please authorize to access your account',
            )
          } else {
            toastError(error.name, error.message)
          }
        }
      })
    } else {
      console.info('Unable to find connector', 'The connector config is wrong')
    }
  }, [])

  const logout = useCallback(() => {
    dispatch(profileClear())
    deactivate()
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
  }, [deactivate, dispatch])

  return { login, logout }
}

export default useAuth
