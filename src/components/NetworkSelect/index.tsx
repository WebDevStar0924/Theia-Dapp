import styled from 'styled-components'
import { Text } from '../Text'
import ArrowDropDown from '../Svg/Icons/ArrowDropDown'
import { Handler } from '../../widgets/Modal/types'
import { NETWORK_LABEL } from '../../config/constants/chains'

interface NetworkSelectProps {
  activeChainID: number
  onSelect: Handler
}

const NetworkSelectContainer = styled.div`
  background-color: ${({ theme }) => (theme.isDark ? '#383838' : '#F0F0F0')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 384px;
    flex-direction: row;
  }
`
export default function NetworkSelect({
  activeChainID,
  onSelect,
}: NetworkSelectProps) {
  return (
    <NetworkSelectContainer onClick={onSelect}>
      <Text>{NETWORK_LABEL[activeChainID]}</Text>
      <ArrowDropDown />
    </NetworkSelectContainer>
  )
}
