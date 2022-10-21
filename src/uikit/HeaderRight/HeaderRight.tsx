import { HeaderRightWrapper } from './styles'
import { ThemeSwitch } from '../ThemeSwitch'
import { Button } from 'components/Button'

import { useState } from 'react'
import { useWalletModal } from '../../widgets/WalletModal'
import AvatarV2 from '../../uikit/AvatarV2/AvatarV2'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import useAuth from '../../hooks/useAuth'
interface iProps {
  themeMode: boolean
}

export default function HeaderRight(props: iProps) {
  const { account } = useActiveWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined,
  )

  const { themeMode } = props
  const [themeModeOption, setThemeMode] = useState(themeMode)

  return (
    <HeaderRightWrapper>

      <ThemeSwitch
        activeValue={themeModeOption}
        onUpdateItem={(val) => {
          setThemeMode(!val)
        }}
      ></ThemeSwitch>

      {account ? (
        <AvatarV2 account={account} login={login} logout={logout} />
      ) : (
        <Button className={'connectButton'} onClick={onPresentConnectModal}>
          CONNECT WALLET
        </Button>
      )}
    </HeaderRightWrapper>
  )
}
