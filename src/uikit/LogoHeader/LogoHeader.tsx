import Logo from 'components/Svg/Icons/Logo'
import LogoBlack from 'components/Svg/Icons/LogoBlack'
import { Link, useLocation } from 'react-router-dom'

import { LogoHeaderWrapper } from './styles'

export default function LogoHeader() {
  const location = useLocation()
  return (
    <LogoHeaderWrapper>
      <Link to={'/'}>
        {location.pathname === '/mint' ? (
          <Logo width={135} />
        ) : (
          <LogoBlack width={135} />
        )}
      </Link>
      <div className={'versionTag'}>BETA</div>
    </LogoHeaderWrapper>
  )
}
