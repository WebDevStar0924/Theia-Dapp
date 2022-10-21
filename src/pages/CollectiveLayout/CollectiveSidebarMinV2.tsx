// import { TabList } from 'components/TabList'
import { Flex } from 'components/Flex'
import { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom'

import { TabListV2 } from 'uikit/TabListV2'
import {
  CalendarFillIcon,
  HomeOutlineFillIcon,
  ImageFillIcon,
} from '../../components/Svg'
import { CollectiveSidebarMinWrapper } from './styles'
import { useShareArtModal } from '../../widgets/GalleryModal/useShareArtModal'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMembership } from 'hooks/useMembership'
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
  const { collectiveInfo, galleries } = props
  const [activeTabItem, setActiveTabItem] = useState('home')
  const navigate = useNavigate()
  const [sharedGalleries, setGalleries] = useState<any[]>([])
  const { account } = useActiveWeb3React()
  const onMemberShipCheck = useMembership()
  const [sharedNfts, setSharedNfts] = useState<any[]>(galleries)

  const onShare = (shared: any[]) => {
    setSharedNfts([...sharedNfts, ...shared])
    setGalleries([...sharedNfts, ...shared])
  }
  const { onPresentShareArtModal } = useShareArtModal(
    sharedNfts,
    onShare,
    collectiveInfo,
  )

  const onShareArt = () => {
    onPresentShareArtModal()
  }

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
          <Flex
            className="shareButton"
            onClick={() => {
              onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                onShareArt(),
              )
            }}
          >
            <Flex className="buttonText">
              +<div>SHARE NFT</div>
            </Flex>
          </Flex>
          <img
            src={collectiveInfo.avatar}
            className="userNftAvatar"
            alt="user nft image"
          />
          <TabListV2
            direction="column"
            minWidth="60px"
            items={[
              {
                text: (
                  <div className="tabContent">
                    <HomeOutlineFillIcon width="32px" height="32px" />
                  </div>
                ),
                value: 'home',
                onClick: () => navigate(`/collective/${cname}`),
              },

              {
                text: (
                  <div className="tabContent">
                    <ImageFillIcon width="32px" height="32px" />
                  </div>
                ),
                value: 'gallery',
                onClick: () => navigate(`/collective/${cname}/gallery`),
              },
              {
                text: (
                  <div className="tabContent">
                    <CalendarFillIcon width="32px" height="32px" />
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
