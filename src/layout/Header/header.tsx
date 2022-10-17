import { useLocation } from 'react-router-dom'

import Avatar from '../../components/Avatar/Avatar'
import { MotionButton } from '../../components/MotionButton/styles'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import useAuth from '../../hooks/useAuth'
import { hoverTxtBoxShadow } from '../../utils/Animations'
import { useWalletModal } from '../../widgets/WalletModal'
import { HeaderLeftWrapper, HeaderWrapper } from './styles'
import { LogoHeader } from '../../uikit/LogoHeader'
import { HeaderRight } from '../../uikit/HeaderRight'

export default function Header() {
  const { account } = useActiveWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined,
  )
  const location = useLocation()

  return (
    <HeaderWrapper bgColor={location.pathname === '/mint' ? '#101828' : '#fff'}>
      <div className={'headerContent'}>
        <HeaderLeftWrapper>
          <LogoHeader></LogoHeader>
        </HeaderLeftWrapper>
        <HeaderLeftWrapper>
          {/* {account ? (
            <Avatar account={account} login={login} logout={logout} />
          ) : (
            <MotionButton
              whileHover={hoverTxtBoxShadow}
              onClick={onPresentConnectModal}
              className={'connectWalletBtn'}
            >
              Connect Wallet
            </MotionButton>

          )} */}
          <HeaderRight themeMode={true}></HeaderRight>
        </HeaderLeftWrapper>
      </div>
    </HeaderWrapper>
  )
}
