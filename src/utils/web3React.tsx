import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import getRpcUrl from './getRpcUrl'
import { Web3Provider } from '@ethersproject/providers'
import { CHAIN_ID } from '../config/constants/chains'

const POLLING_INTERVAL = 15000

// When adding a new chain we need to add the CHAIN_ID to the supported chains

export const localStorageKey = 'accountStatus'

const injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID.ETH, CHAIN_ID.ETH_RINKEBY],
})

const walletconnect = new WalletConnectConnector({
  rpc: {
    [CHAIN_ID.ETH]: getRpcUrl(CHAIN_ID.ETH),
    [CHAIN_ID.ETH_RINKEBY]: getRpcUrl(CHAIN_ID.ETH_RINKEBY),
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: [CHAIN_ID.ETH] })

export const walletlink = new WalletLinkConnector({
  url: getRpcUrl(CHAIN_ID.ETH),
  supportedChainIds: [CHAIN_ID.ETH],
  appName: 'Theia',
  darkMode: true,
  appLogoUrl: 'https://theia.finance/logo.png',
})

export const connectorsByName = {
  injected: injected,
  walletconnect: walletconnect,
  bsc: bscConnector,
  Walletlink: walletlink,
}

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = POLLING_INTERVAL
  return library
}
