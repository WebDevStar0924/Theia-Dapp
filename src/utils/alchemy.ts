import axios from 'axios'

export const ALCHEMY_ENDPOINT = 'https://eth-mainnet.g.alchemy.com/'

export async function getNFTs(
  owner,
  contractAddress,
  pageKey,
  pageSize,
  withMetadata,
) {
  return axios.get(
    `${ALCHEMY_ENDPOINT}/nft/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}/getNFTs`,
    {
      params: {
        owner,
        contractAddresses: [],
        pageKey,
        pageSize,
        withMetadata,
        filters: ['SPAM', 'AIRDROPS'],
      },
    },
  )
}
export async function getNFTMetadata(contractAddress, tokenId, tokenType) {
  return axios.get(
    `${ALCHEMY_ENDPOINT}/nft/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}/getNFTMetadata`,
    {
      params: {
        contractAddress,
        tokenId,
        tokenType,
      },
    },
  )
}
