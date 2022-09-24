import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'
import { BigNumber, ethers } from 'ethers'

import { Contract } from '@ethersproject/contracts'
import CFDiamondABI from '../abi/CFDiamond.json'
import InitDiamondABI from '../abi/InitDiamond.json'
import DiamondLoupeFacetABI from '../abi/facets/DiamondLoupeFacet.json'
import OwnershipFacetABI from '../abi/facets/OwnershipFacet.json'
import PausableFacetABI from '../abi/facets/PausableFacet.json'
import CrowdfundingFacetABI from '../abi/facets/CrowdfundingFacet.json'
import BondfundingFacetABI from '../abi/facets/BondfundingFacet.json'
import MarketFacetABI from '../abi/facets/MarketFacet.json'
import { CHAIN_ID, CHAIN_PARAMS } from '../config/constants/chains'

export function getSigner(
  library: Web3Provider,
  account: string,
): JsonRpcSigner {
  return library.getSigner(account)
}

// account is optional
export function getProviderOrSigner(
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

const FacetCutAction = { Add: 0, Replace: 1, Remove: 2 }

type Selectors = {
  signatures: string[]
  contract: Contract | null
  remove: any
  get: any
}

export function getSelectors(contract: Contract) {
  const signatures = Object.keys(contract.interface.functions)
  const selectors: Selectors = {
    signatures: [],
    contract: null,
    remove: null,
    get: null,
  }
  selectors.signatures = signatures.reduce((acc: string[], val: string) => {
    if (val !== 'init(bytes)') {
      acc.push(contract.interface.getSighash(val))
    }
    return acc
  }, [])
  selectors.contract = contract

  // used with getSelectors to remove selectors from an array of selectors
  // functionNames argument is an array of function signatures
  selectors.remove = function (functionNames: string[]): Selectors {
    this.signatures = this.signatures.filter((v: string) => {
      for (const functionName of functionNames) {
        if (
          this.contract &&
          v === this.contract.interface.getSighash(functionName)
        ) {
          return false
        }
      }
      return true
    })
    return this
  }

  // used with getSelectors to get selectors from an array of selectors
  // functionNames argument is an array of function signatures
  selectors.get = function (functionNames: string[]): Selectors {
    this.signatures = this.signatures.filter((v: string) => {
      for (const functionName of functionNames) {
        if (
          this.contract &&
          v === this.contract.interface.getSighash(functionName)
        ) {
          return true
        }
      }
      return false
    })
    return this
  }
  return selectors
}

export async function deployDiamond(
  projectName: string,
  coinAddr: string,
  stAddr: string,
  projectFee: number,
  bufferPeriod: number,
  conversionPeriod: number,
  minTh: string,
  treasuryAddr: string,
  analyticMathAddr: string,
  signer: JsonRpcSigner,
) {
  // deploy Diamond
  const diamondInterface = new ethers.utils.Interface(CFDiamondABI.abi)
  const Diamond = new ethers.ContractFactory(
    diamondInterface,
    CFDiamondABI.bytecode,
    signer,
  )
  const diamond = await Diamond.deploy(
    projectName,
    coinAddr,
    stAddr,
    projectFee,
    bufferPeriod,
    conversionPeriod,
    BigNumber.from(10).pow(18).mul(minTh),
    treasuryAddr,
    analyticMathAddr,
  )
  await diamond.deployed()

  // deploy InitDiamond
  // InitDiamond provides a function that is called when the diamond is upgraded to initialize state variables
  // Read about how the diamondCut function works here: https://eips.ethereum.org/EIPS/eip-2535#addingreplacingremoving-functions
  const InitDiamond = new ethers.ContractFactory(
    InitDiamondABI.abi,
    InitDiamondABI.bytecode,
    signer,
  )
  const diamondInit = await InitDiamond.deploy()
  await diamondInit.deployed()

  // deploy facets
  // console.log('Deploying facets')
  const FacetNames = [
    DiamondLoupeFacetABI,
    OwnershipFacetABI,
    PausableFacetABI,
    CrowdfundingFacetABI,
    BondfundingFacetABI,
    MarketFacetABI,
  ]
  const cut: any[] = []
  for (const FacetName of FacetNames) {
    const Facet = new ethers.ContractFactory(
      FacetName.abi,
      FacetName.bytecode,
      signer,
    )
    const facet = await Facet.deploy()
    await facet.deployed()
    console.log(`${FacetName} deployed: ${facet.address}`)
    cut.push({
      facetAddress: facet.address,
      action: FacetCutAction.Add,
      functionSelectors: getSelectors(facet).signatures,
    })
  }

  // call to init function
  const functionCall = diamondInit.interface.encodeFunctionData('init')
  const tx = await diamond.diamondCut(cut, diamondInit.address, functionCall)
  // console.log('Diamond cut tx: ', tx.hash)
  const receipt = await tx.wait()
  if (!receipt.status) {
    throw Error(`Diamond create failed: ${tx.hash}`)
  }
  // console.log('Completed diamond cut')

  return diamond.address
}

export function goToScan(
  chainId: number | undefined,
  address: string,
  type = 'address',
) {
  if (!chainId) return

  let scanUrl = ''
  if (type === 'tx') {
    scanUrl = `${CHAIN_PARAMS[chainId].blockExplorerUrls[0]}/tx/${address}`
  }
  if (type === 'token') {
    scanUrl = `${CHAIN_PARAMS[chainId].blockExplorerUrls[0]}/token/${address}`
  } else {
    scanUrl = `${CHAIN_PARAMS[chainId].blockExplorerUrls[0]}/address/${address}`
  }
  window.open(scanUrl, '_blank')
}

export function goToOpenSea(
  chainId: number | undefined,
  address: string,
  tokenId,
) {
  let scanUrl = ''
  if (chainId === CHAIN_ID.ETH) {
    scanUrl = `https://opensea.io/assets/ethereum/${address}/${tokenId}`
  } else if (chainId === CHAIN_ID.ETH_RINKEBY) {
    scanUrl = `https://testnets.opensea.io/assets/rinkeby/${address}`
  } else {
    return
  }
  window.open(scanUrl, '_blank')
}
