import { Currency } from '../components/CurrencyInputPanel/types'
import { Toast } from '../widgets/Toast'
import { UserInfo } from '../pages/SupporterProfile/types'

export interface Project {
  project_name: string
  pc_name: string
  pt_name: string
  cfsc_chain: string
  description: string
  overview: Overview[]
  price: {
    usd: number
    priceChange: number
    percentChange: number
  }
  investedVolume: number
  tokenSupply: number
  numberOfInvesters: number
  totalValuation: number
  locked: number
  marketCap: number
  allocation: number
  dp_pic: string
  bg_pic: string
}

export interface ProjectState {
  data: Project | null
}

export interface State {
  project: ProjectState
  profile: ProfileState
  network: NetworkState
  chain: ChainState
  toasts: ToastsState
  collective: CollectiveState
  event: EventState
}

interface OverviewSubItem {
  title?: string
  desc: string
}

export interface Overview {
  title: string
  subItems: OverviewSubItem[]
}

export interface Coin {
  balance: number
  address: string
  symbol: string
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  newUser: boolean
  data: UserInfo
}

export interface NetworkState {
  isInitialized: boolean
  isLoading: boolean
  data: Network
}

export interface Network {
  chainId: number
  chainIdFromUrl?: boolean
}

export interface ChainState {
  activeChainID: number
  activeCurrency?: Currency
}

export interface ToastsState {
  data: Toast[]
}

export interface CollectiveState {
  owner: string | null
  collective: any
  forums: any
  galleries: any
  mixedData: any
  members: any[]
  sort: string | null
}
export interface EventState {
  data: any
}
