import React from 'react'
import ConnectModal from './ConnectModal'
import { Login } from './types'
import { useModal } from '../Modal'
import AccountModal from './AccountModal'

interface ReturnType {
  onPresentConnectModal: () => void
  onPresentAccountModal: () => void
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
): ReturnType => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal login={login} key={'connectModal'} />,
  )
  const [onPresentAccountModal] = useModal(
    <AccountModal logout={logout} account={account} />,
  )
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
