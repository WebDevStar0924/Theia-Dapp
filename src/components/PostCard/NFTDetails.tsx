import { Button } from 'components/Button'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components'
import { goToOpenSea, goToScan } from 'utils/ethers'
import { Text } from '../Text'

interface iProps {
  title: string
  collectionName: string
  description: string
  contractAddress: string
  tokenId: string
}
const StyledNFTDetails = styled.div`
  background: #f2f4f7;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 16px;
  gap: 24px;
  width: 200px;
  overflow-wrap: anywhere;
`
export default function NFTDetails(props: iProps) {
  const { chainId } = useActiveWeb3React()

  const { title, collectionName, description, contractAddress, tokenId } = props
  return (
    <StyledNFTDetails>
      <div>
        <Text fontSize="16px" fontWeight={600}>
          {title}
        </Text>
        <Text fontSize="14px" fontWeight={600} mt="5px">
          {collectionName}
        </Text>
      </div>
      <Text fontSize="14px">{description}</Text>
      <div>
        <Text fontSize="12px" fontWeight={600}>
          Contract Address
        </Text>
        <Button
          as={'a'}
          variant="text"
          fontSize="12px"
          color="#344054"
          boxShadow="none"
          mt="5px"
          target={'_blank'}
          href={goToScan(chainId, contractAddress, 'token')}
        >
          {contractAddress}
        </Button>
      </div>
      <div>
        <Text fontSize="12px" fontWeight={600}>
          TOKEN ID
        </Text>
        <Text fontSize="12px">{parseInt(tokenId, 16) ?? '-'}</Text>
      </div>
      <div>
        <Button
          variant="text"
          fontSize="12px"
          boxShadow="none"
          onClick={() =>
            goToOpenSea(chainId, contractAddress, parseInt(tokenId, 16))
          }
        >
          MORE INFO
        </Button>
      </div>
    </StyledNFTDetails>
  )
}
