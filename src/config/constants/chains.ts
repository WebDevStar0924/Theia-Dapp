// Network chain ids

import { Currency } from "../../components/CurrencyInputPanel/types";

export const CHAIN_ID = {
  ETH: 1,
  BSC: 56,
  xDAI: 100,
  HT: 128,
  MATIC: 137,
  FTM: 250,
  FSN: 32659,
  AVAX: 43114,
  AVAX_FUJI: 43113,
  BTC: "BTC",
  LTC: "LTC",
  BLOCK: "BLOCK",

  //Testnet
  ETH_RINKEBY: 4,
  BSC_TESTNET: 97,
};

// Network labels

export const NETWORK_LABEL = {
  [CHAIN_ID.ETH]: "ETH",
  [CHAIN_ID.ETH_RINKEBY]: "ETH Rinkeby",
  [CHAIN_ID.BSC]: "BSC",
  [CHAIN_ID.BSC_TESTNET]: "BSC Testnet",
  [CHAIN_ID.xDAI]: "xDAI",
  [CHAIN_ID.HT]: "Huobi",
  [CHAIN_ID.MATIC]: "Polygon",
  [CHAIN_ID.FTM]: "Fantom",
  [CHAIN_ID.FSN]: "Fusion",
  [CHAIN_ID.AVAX]: "Avalanche",
  [CHAIN_ID.AVAX_FUJI]: "Avalanche Fuji Testnet",
  [CHAIN_ID.BTC]: "Bitcoin",
  [CHAIN_ID.LTC]: "Litecoin",
  [CHAIN_ID.BLOCK]: "Blocknet",
};

// Network RPC nodes
export const NETWORK_RPC = {
  [CHAIN_ID.ETH]: [
    "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  ],
  [CHAIN_ID.ETH_RINKEBY]: [
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  ],
  [CHAIN_ID.BSC]: [
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed.binance.org/",
    "https://bsc-dataseed1.defibit.io",
  ],
  [CHAIN_ID.BSC_TESTNET]: ["https://data-seed-prebsc-2-s3.binance.org:8545/"],
  [CHAIN_ID.MATIC]: ["https://polygon-rpc.com/"],
  [CHAIN_ID.xDAI]: "",
  [CHAIN_ID.HT]: "",
  [CHAIN_ID.FTM]: "",
  [CHAIN_ID.FSN]: "",
  [CHAIN_ID.AVAX]: "",
  [CHAIN_ID.AVAX_FUJI]: ["https://api.avax-test.network/ext/bc/C/rpc"],
  [CHAIN_ID.BTC]: "",
  [CHAIN_ID.LTC]: "",
  [CHAIN_ID.BLOCK]: "",
};

// Network block explorers

export const BLOCK_EXPLORER = {
  [CHAIN_ID.ETH]: "https://etherscan.io",
  [CHAIN_ID.ETH_RINKEBY]: "https://rinkeby.etherscan.io",
  [CHAIN_ID.BSC]: "https://bscscan.com",
  [CHAIN_ID.BSC_TESTNET]: "https://testnet.bscscan.com/",
  [CHAIN_ID.MATIC]: "https://polygonscan.com",
  [CHAIN_ID.xDAI]: "https://blockscout.com/xdai/mainnet",
  [CHAIN_ID.HT]: "https://hecoinfo.com",
  [CHAIN_ID.FTM]: "https://ftmscan.com",
  [CHAIN_ID.FSN]: "https://fsnex.com",
  [CHAIN_ID.AVAX]: "https://cchain.explorer.avax.network/",
  [CHAIN_ID.AVAX_FUJI]: "https://testnet.snowtrace.io/",
  [CHAIN_ID.BTC]: "",
  [CHAIN_ID.LTC]: "",
  [CHAIN_ID.BLOCK]: "",
};

export const CHAIN_PARAMS = {
  [CHAIN_ID.ETH]: {
    chainId: "0x1",
    chainName: "Ethereum",
    nativeCurrency: {
      name: "eth",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.ETH],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.ETH]],
  },
  [CHAIN_ID.ETH_RINKEBY]: {
    chainId: "0x4",
    chainName: "Ethereum Rinkeby Testnet",
    nativeCurrency: {
      name: "eth",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.ETH_RINKEBY],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.ETH_RINKEBY]],
  },
  [CHAIN_ID.BSC]: {
    chainId: "0x38",
    chainName: "Binance Smart Chain",
    nativeCurrency: {
      name: "bnb",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.BSC],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.BSC]],
  },
  [CHAIN_ID.BSC_TESTNET]: {
    chainId: "0x61",
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "bnb",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.BSC_TESTNET],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.BSC_TESTNET]],
  },
  [CHAIN_ID.MATIC]: {
    chainId: "0x89",
    chainName: "Matic",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.MATIC],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.MATIC]],
  },
  [CHAIN_ID.AVAX_FUJI]: {
    chainId: "0xA869",
    chainName: "Avax Fuji Testnet",
    nativeCurrency: {
      name: "Avax",
      symbol: "Avax",
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.AVAX_FUJI],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.AVAX_FUJI]],
  },
};

export const teaCurrency: Currency = {
  name: "Theia Token",
  symbol: "TEAp",
  destChainID: "1",
  logoUrl:
    "https://assets.coingecko.com/coins/images/17982/large/logo-200x200_%287%29.png",
  srcChainID: "56",
  DestToken: {
    BaseFeePercent: 0,
    BigValueThreshold: 920000000,
    ContractAddress: "0x2cf51e73c3516f3d86e9c0b4de0971dbf0766fd4",
    DcrmAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Decimals: 18,
    Description: "cross chain bridge $MANGA with $MANGA",
    DisableSwap: false,
    ID: "$MANGA",
    IsDelegateContract: false,
    MaximumSwap: 4600000000,
    MaximumSwapFee: 0,
    MinimumSwap: 72850,
    MinimumSwapFee: 0,
    Name: "Manga token",
    PlusGasPricePercentage: 1,
    SwapFeeRate: 0,
    Symbol: "$MANGA",
    routerABI: "Swapout(amount,toAddress)",
  },
  SrcToken: {
    BaseFeePercent: 0,
    BigValueThreshold: 920000000,
    ContractAddress: "0xc2cb89bbb5bba6e21db1dfe13493dfd7dcbabd68",
    DcrmAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Decimals: 18,
    DepositAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Description: "ERC20 $MANGA",
    DisableSwap: false,
    ID: "ERC20",
    IsDelegateContract: false,
    MaximumSwap: 4600000000,
    MaximumSwapFee: 91630,
    MinimumSwap: 145700,
    MinimumSwapFee: 72850,
    Name: "$MANGAERC20",
    PlusGasPricePercentage: 1,
    SwapFeeRate: 0.001,
    Symbol: "$MANGA",
    routerABI: "transfer(toAddress,amount)",
  },
};

export const activeCurrency: Currency = {
  name: "Theia Token",
  symbol: "USDC",
  destChainID: "1",
  logoUrl:
    "https://assets.coingecko.com/coins/images/17982/large/logo-200x200_%287%29.png",
  srcChainID: "56",
  DestToken: {
    BaseFeePercent: 0,
    BigValueThreshold: 920000000,
    ContractAddress: "0x2cf51e73c3516f3d86e9c0b4de0971dbf0766fd4",
    DcrmAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Decimals: 18,
    Description: "cross chain bridge $MANGA with $MANGA",
    DisableSwap: false,
    ID: "$MANGA",
    IsDelegateContract: false,
    MaximumSwap: 4600000000,
    MaximumSwapFee: 0,
    MinimumSwap: 72850,
    MinimumSwapFee: 0,
    Name: "Manga token",
    PlusGasPricePercentage: 1,
    SwapFeeRate: 0,
    Symbol: "$MANGA",
    routerABI: "Swapout(amount,toAddress)",
  },
  SrcToken: {
    BaseFeePercent: 0,
    BigValueThreshold: 920000000,
    ContractAddress: "0xc2cb89bbb5bba6e21db1dfe13493dfd7dcbabd68",
    DcrmAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Decimals: 18,
    DepositAddress: "0xB16E3336699A636DD6C8246A3a12b813bFa0A3AD",
    Description: "ERC20 $MANGA",
    DisableSwap: false,
    ID: "ERC20",
    IsDelegateContract: false,
    MaximumSwap: 4600000000,
    MaximumSwapFee: 91630,
    MinimumSwap: 145700,
    MinimumSwapFee: 72850,
    Name: "$MANGAERC20",
    PlusGasPricePercentage: 1,
    SwapFeeRate: 0.001,
    Symbol: "$MANGA",
    routerABI: "transfer(toAddress,amount)",
  },
};
