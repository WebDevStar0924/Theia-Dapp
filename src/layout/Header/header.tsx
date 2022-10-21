import { useLocation } from 'react-router-dom'

import { HeaderRight } from '../../uikit/HeaderRight'
import { LogoHeader } from '../../uikit/LogoHeader'
import { HeaderLeftWrapper, HeaderWrapper } from './styles'

export default function Header() {
  const location = useLocation()

  return (
    <HeaderWrapper bgColor={location.pathname === '/mint' ? '#101828' : location.pathname.split('/')[3] === 'gallery' ? 'transparent' : 'rgba(255, 255, 255, 0.6)'}>
      <div className={'headerContent'}>
        <HeaderLeftWrapper>
          <LogoHeader></LogoHeader>
        </HeaderLeftWrapper>
        <HeaderLeftWrapper>
          <HeaderRight themeMode={true}></HeaderRight>
        </HeaderLeftWrapper>
      </div>
    </HeaderWrapper>
  )
}
