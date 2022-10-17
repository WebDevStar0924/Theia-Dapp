import { useLocation, useParams } from 'react-router-dom'
import { Header } from '../Header'
import { SidebarV2 } from '../../uikit/SidebarV2'
import { LayoutWrapper } from './styles'

export default function Layout({ children }) {
  const location = useLocation()
  return (
    <LayoutWrapper
      bgColor={location.pathname === '/mint' ? '#101828' : '#f9fafb'}
    >
      <Header />
      <div className={'contentView'}>
        {!location.pathname.includes('/gallery') && <SidebarV2 />}
        {/* {location.pathname === '/home' && <Sidebar />} */}

        <div className={'componentsView'} id="componentsView">
          {children}
        </div>
      </div>
    </LayoutWrapper>
  )
}
