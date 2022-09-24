import React from 'react'
import { Modal } from '../Modal'
import { CHAIN_ID, NETWORK_LABEL } from '../../config/constants/chains'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../state/types'
import { setActiveChainID } from '../../state/chain'

interface Props {
  onDismiss?: () => void
}

const ChainItem = styled.div<{ active?: boolean }>`
  font-size: 18px;
  line-height: 48px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 48px;
  display: flex;
  align-items: center;

  background-color: ${({ active }) => (active ? '#0000004D' : 'transparent')};

  &:hover {
    background-color: #0000002d;
  }

  &:before {
    content: ${({ active }) => (active ? '*' : '')};
    padding-right: ${({ active }) => (active ? '4px' : '0')};
  }
`

const ActiveCollon = styled.div`
  width: 8px;
  height: 8px;
  background-color: #7dffd9;
  border-radius: 100%;
  margin-right: 4px;
`
const NetworkListModal: React.FC<Props> = ({ onDismiss = () => null }) => {
  const activeChainID = useSelector((state: State) => state.chain.activeChainID)
  const dispatch = useDispatch()
  const handleSetChain = (chainId) => {
    dispatch(setActiveChainID(chainId))
    onDismiss()
  }
  return (
    <Modal
      title={'Select chain'}
      onDismiss={onDismiss}
      bgColor={'#272727'}
      bodyPadding={'24px 0 48px 0'}
    >
      {Object.values(CHAIN_ID).map((chainId, index) => (
        <ChainItem
          key={`chain_${index}`}
          active={chainId === activeChainID}
          onClick={() => handleSetChain(chainId)}
        >
          {chainId === activeChainID && <ActiveCollon />}
          {NETWORK_LABEL[chainId]}
        </ChainItem>
      ))}
    </Modal>
  )
}

export default NetworkListModal
