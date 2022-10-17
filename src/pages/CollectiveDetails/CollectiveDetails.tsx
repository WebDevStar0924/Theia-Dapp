import API from 'api/api'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { EventDetails } from './EventDetails'
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom'
import { updateMembers } from 'state/collective'
import { useArtDetailModal } from 'widgets/GalleryModal/useShareArtModal'
import { CollectiveDetailsContainer } from './styles'
import EventsTab from './Tabs/EventsTab'
import ForumTab from './Tabs/ForumTab'
import GalleryTab from './Tabs/GalleryTab'
// import HomeTab from './Tabs/HomeTab'
import HomeTabV2 from './Tabs/HomeTabV2'

interface LocationState {
  forum_id: string
}

export default function CollectiveDetails() {
  const { cname, ctab, post_id, event_id } = useParams()
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const navigate = useNavigate()
  const [members, setMembers] = useState<any[]>([])
  const { onPresentArtDetailModal } = useArtDetailModal(collectiveInfo)
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (post_id && collectiveInfo) {
      onPresentArtDetailModal({
        gallery_id: post_id,
        callback: () => navigate(`/collective/${cname}/${ctab}`),
      })
    }
  }, [post_id, collectiveInfo])

  useEffect(() => {
    if (collectiveInfo) {
      API.getMembers(collectiveInfo.collective_id).then((res) => {
        if (res.data.success) {
          setMembers(res.data.members)
          dispatch(updateMembers(res.data.members))
        }
      })
    }
  }, [collectiveInfo])

  useEffect(() => {
    if (!document) {
      return
    }

    if (!(location.state as LocationState)?.forum_id) {
      return
    }

    setTimeout(() => {
      const element_id = `forum_${(location.state as LocationState).forum_id}`
      const componentView = document.getElementById('componentsView')
      const element = document.getElementById(element_id)
      componentView?.scrollTo(
        0,
        element?.offsetTop ? element.offsetTop - 100 : 0,
      )
    }, 2000)
  }, [location])

  return (
    <>
      {collectiveInfo && (
        <CollectiveDetailsContainer>
          <div className={'detailsContent'}>
            {(ctab === 'home' || ctab === undefined) && <HomeTabV2 />}
            {ctab === 'forum' && <ForumTab />}
            {ctab === 'events' && event_id === undefined && <EventsTab />}
            {ctab === 'events' && event_id !== undefined && <EventDetails />}
            {ctab === 'gallery' && <GalleryTab />}
          </div>
        </CollectiveDetailsContainer>
      )}
    </>
  )
}
