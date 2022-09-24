export interface Token {
  BaseFeePercent: number
  BigValueThreshold: number
  ContractAddress: string
  DcrmAddress: string
  Decimals: number
  DepositAddress?: string
  Description: string
  DisableSwap: boolean
  ID: string
  IsDelegateContract: boolean
  MaximumSwap: number
  MaximumSwapFee: number
  MinimumSwap: number
  MinimumSwapFee: number
  Name: string
  PlusGasPricePercentage: number
  SwapFeeRate: number
  Symbol: string
  routerABI: string
}

export interface Currency {
  DestToken?: Token
  SrcToken?: Token
  destChainID?: string
  logoUrl?: string
  name?: string
  srcChainID?: string
  symbol: string
}
