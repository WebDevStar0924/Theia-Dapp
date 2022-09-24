import React from 'react'
import Text from '../../components/Text/Text'
import LinkExternal from '../../components/Link/LinkExternal'
import Flex from '../../components/Flex/Flex'
import { Modal } from '../Modal'
import CopyToClipboard from './CopyToClipboard'
import { localStorageKey } from './config'
import { StyledModalTitle } from '../Modal/styles'
import { AutoColumn } from '../../components/Layout/Column'
import { MotionButton } from '../../components/MotionButton/styles'
import { hoverTxtBoxShadow } from '../../utils/Animations'

interface Props {
  account?: string
  logout: () => void
  onDismiss?: () => void
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
}) => (
  <Modal title="" onDismiss={onDismiss}>
    <AutoColumn gap={'12px'}>
      <StyledModalTitle>Your wallet</StyledModalTitle>
      <Text
        fontSize="18px"
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: '8px',
        }}
      >
        {account}
      </Text>
      <Flex mb="32px">
        <LinkExternal
          small
          href={`https://testnet.snowtrace.io/address/${account}`}
          mr="16px"
          color={'link'}
          bold
        >
          View on Explorer
        </LinkExternal>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex justifyContent="center">
        <MotionButton
          whileHover={hoverTxtBoxShadow}
          style={{ width: '100%' }}
          onClick={() => {
            logout()
            window.localStorage.removeItem(localStorageKey)
            onDismiss()
            window.location.reload()
          }}
          bgColor={'rgba(255, 255, 255, 0.2)'}
        >
          Logout
        </MotionButton>
      </Flex>
    </AutoColumn>
  </Modal>
)

AccountModal.defaultProps = {
  account: undefined,
  onDismiss: () => null,
}

export default AccountModal
