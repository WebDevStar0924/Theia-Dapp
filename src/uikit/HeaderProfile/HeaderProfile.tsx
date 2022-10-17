import { HeaderProfileWrapper } from './styles'
import useAuth from '../../hooks/useAuth'
import hexagon from '../../assets/image/Hexagon.png'
import { useWalletModal } from '../../widgets/WalletModal'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'

export default function HeaderProfile() {
  const { login, logout } = useAuth()
  const { account } = useActiveWeb3React()
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined,
  )
  return (
    <HeaderProfileWrapper>
      <div className={'profileImage'}>
        <img src={hexagon} alt="event" style={{ margin: 'auto' }} />
      </div>
      <div className={'profileName'}>0xf1534 ... C0c</div>
    </HeaderProfileWrapper>
  )
}
