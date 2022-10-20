import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import NFTAvatar from 'uikit/NFTAvatar'
import { TabListV2 } from 'uikit/TabListV2'
import {
  CalendarFillIcon,
  HomeOutlineFillIcon,
  ImageFillIcon,
} from '../../components/Svg'
import { CollectiveSidebarWrapper } from './styles'

interface iProps {
  collectiveInfo: any
  galleries: any[]
  currentUserProfile: any
  addNewForum: (newForum: any) => void
  addNewGallery: (newGallery: any) => void
  addNewEvent: (newEvent: any) => void
}
export default function CollectiveSidebarV2(props: iProps) {
  const { cname } = useParams()
  const location = useLocation()
  const { collectiveInfo, currentUserProfile } = props
  const [activeTabItem, setActiveTabItem] = useState('home')

  const navigate = useNavigate()

  useEffect(() => {
    switch (location.pathname) {
      case `/collective/${cname}`:
      case `/collective/${cname}/home`:
        setActiveTabItem('home')
        break
      case `/collective/${cname}/forum`:
        setActiveTabItem('forum')
        break
      case `/collective/${cname}/gallery`:
        setActiveTabItem('gallery')
        break
      case `/collective/${cname}/events`:
        setActiveTabItem('events')
        break
    }
  }, [location])
  return (
    <>
      {collectiveInfo && currentUserProfile && (
        <CollectiveSidebarWrapper>
          <NFTAvatar
            avatarUrl={currentUserProfile?.avatarUrl}
            width={'150px'}
          />
          <div className="navBtns"></div>
          <TabListV2
            direction="column"
            minWidth="136px"
            items={[
              {
                text: (
                  <div className="tabContent">
                    <HomeOutlineFillIcon width="24px" /> <span>HOME</span>
                  </div>
                ),
                value: 'home',
                onClick: () => navigate(`/collective/${cname}`),
              },

              {
                text: (
                  <div className="tabContent">
                    <ImageFillIcon width="24px" /> <span>GALLERY</span>
                  </div>
                ),
                value: 'gallery',
                onClick: () => navigate(`/collective/${cname}/gallery`),
              },
              {
                text: (
                  <div className="tabContent">
                    <CalendarFillIcon width="24px" /> <span>EVENTS</span>
                  </div>
                ),
                value: 'events',
                onClick: () => navigate(`/collective/${cname}/events`),
              },
            ]}
            activeTab={activeTabItem}
            setActiveTab={(val) => setActiveTabItem(val)}
          />
        </CollectiveSidebarWrapper>
      )}
    </>
  )
}
