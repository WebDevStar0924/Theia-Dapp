// import { TabList } from 'components/TabList'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { TabListV2 } from 'uikit/TabListV2'
import {
  CalendarFillIcon,
  HomeOutlineFillIcon,
  ImageFillIcon,
} from '../../components/Svg'
import { CollectiveSidebarMinWrapper } from './styles'

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
  const { collectiveInfo } = props
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
      {collectiveInfo && (
        <CollectiveSidebarMinWrapper>
          <img
            src={collectiveInfo.avatar}
            className="userNftAvatar"
            alt="user nft image"
          />
          {/* <div className="createBtns">
            <div
              className={cn('eventToggleBtn', {
                active: isShowEventBtns,
              })}
              onClick={() => showEventBtns(!isShowEventBtns)}
            >
              <HiPlus size={30} />
            </div>
            {isShowEventBtns && (
              <>
                <div
                  className="eventBtn"
                  onClick={() =>
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () =>
                        onPresentForumModal({
                          active: 'POST',
                          collectiveID: collectiveInfo.collective_id,
                          topics: collectiveInfo.topics,
                          callback: addNewForum,
                        }),
                    )
                  }
                >
                  <FiEdit3 size={24} color="#101828" />
                  <span>Post</span>
                </div>
                <div
                  className="eventBtn"
                  onClick={() =>
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => onPresentShareArtModal(),
                    )
                  }
                >
                  <FiImage size={24} color="#101828" />
                  <span>Share</span>
                </div>
                <div
                  className="eventBtn"
                  onClick={() => {
                    dispatch(eventClear())
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () =>
                        onPresentEventCreateModal({
                          collectiveID: collectiveInfo.collective_id,
                          callback: addNewEvent,
                        }),
                    )
                  }}
                >
                  <FiCalendar size={24} color="#101828" />
                  <span>Event</span>
                </div>
              </>
            )}
          </div> */}
          {/* <div className="navBtns"></div> */}
          {/* <TabList
            direction="column"
            minWidth="136px"
            items={[
              {
                text: (
                  <div className="tabContent">
                    <FiHome size={24} /> HOME
                  </div>
                ),
                value: 'home',
                onClick: () => navigate(`/collective/${cname}`),
              },
              {
                text: (
                  <div className="tabContent">
                    <FiEdit3 size={24} /> FORUM
                  </div>
                ),
                value: 'forum',
                onClick: () => navigate(`/collective/${cname}/forum`),
              },
              {
                text: (
                  <div className="tabContent">
                    <FiImage size={24} /> GALLERY
                  </div>
                ),
                value: 'gallery',
                onClick: () => navigate(`/collective/${cname}/gallery`),
              },
              {
                text: (
                  <div className="tabContent">
                    <FiCalendar size={24} />
                    EVENTS
                  </div>
                ),
                value: 'events',
                onClick: () => navigate(`/collective/${cname}/events`),
              },
            ]}
            activeTab={activeTabItem}
            setActiveTab={(val) => setActiveTabItem(val)}
          /> */}

          <TabListV2
            direction="column"
            minWidth="60px"
            items={[
              {
                text: (
                  <div className="tabContent">
                    <HomeOutlineFillIcon width="24px" />
                  </div>
                ),
                value: 'home',
                onClick: () => navigate(`/collective/${cname}`),
              },

              {
                text: (
                  <div className="tabContent">
                    <ImageFillIcon width="24px" />
                  </div>
                ),
                value: 'gallery',
                onClick: () => navigate(`/collective/${cname}/gallery`),
              },
              {
                text: (
                  <div className="tabContent">
                    <CalendarFillIcon width="24px" />
                  </div>
                ),
                value: 'events',
                onClick: () => navigate(`/collective/${cname}/events`),
              },
            ]}
            activeTab={activeTabItem}
            setActiveTab={(val) => setActiveTabItem(val)}
          />
        </CollectiveSidebarMinWrapper>
      )}
    </>
  )
}
