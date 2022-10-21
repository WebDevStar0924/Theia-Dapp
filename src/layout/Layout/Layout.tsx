import { useLocation } from 'react-router-dom'
import { SidebarV2 } from 'uikit/SidebarV2'
import { Header } from '../Header'
import { LayoutWrapper } from './styles'

export default function Layout({ children }) {
  const location = useLocation()
  return (
    <LayoutWrapper
      bgColor={location.pathname === '/mint' ? '#101828' : '#f9fafb'}
      marginTop={'-64px'}
    >
      <Header />
      <div className={'contentView'}>
        {location.pathname.split('/')[3] !== 'gallery' && <SidebarV2 />}

        <div className={'componentsView'} id="componentsView">
          {children}
        </div>
      </div>
    </LayoutWrapper>
  )
}
