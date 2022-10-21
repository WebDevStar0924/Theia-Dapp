import API from 'api/api'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import CollectiveHeader from './CollectiveHeader'
import CollectiveSidebarV2 from './CollectiveSidebarV2'
import CollectiveSidebarMinV2 from './CollectiveSidebarMinV2'
import { CollectiveLayoutWrapper } from './styles'
import { useCurrentNFTProfile } from 'hooks/useCurrentNFTProfile'
interface LocationState {
  forum_id: string
}

export default function CollectiveLayout() {
  const [collectiveInfo, setCollectiveInfo] = useState<any>(null)
  const { account } = useActiveWeb3React()
  const { cname } = useParams()

  const [mixedData, setMixedData] = useState<any[]>([])
  const [forums, setForums] = useState<any[]>([])
  const [galleries, setGalleries] = useState<any[]>([])
  const [members, setMembers] = useState<any[]>([])
  const [isMixed, setIsMixed] = useState(false)
  const [events, setEvents] = useState<any[]>([])
  const [sortOption, setSortOption] = useState('trending')
  const location = useLocation()
  const currentUserProfile = useCurrentNFTProfile(collectiveInfo?.collective_id)
  const [filter, updateFilter] = useState({
    onlySaved: false,
    onlyMyPosts: false,
  })
  const [topics, updateTopics] = useState([])
  console.log('fdskfsdfsdfsdljflsadjflsajf')


  useEffect(() => {
    setIsMixed(false)
  }, [sortOption])

  useEffect(() => {
    if (account) {
      API.getCollectiveByName(cname, account).then((res) => {
        if (res.data.success) {
          setCollectiveInfo(res.data.collective)
        }
      })
    }
  }, [cname, account])

  const addNewForum = (newForum) => {
    if (newForum) {
      const newForums = [...forums]
      newForums.unshift(newForum)
      setForums(newForums)

      const newMixedData = mixedData.map((item) => {
        if (item.cardType === 'gallery') {
          return item
        }
        return {
          ...item,
          fIdx: item.fIdx + 1,
        }
      })
      newMixedData.unshift({
        ...newForum,
        cardType: 'forum',
        fIdx: 0,
      })
      setMixedData(newMixedData)
    }
  }
  const addNewEvent = (newEvent) => {
    if (newEvent) {
      const newEvents = [...events]
      newEvents.unshift(newEvent)
      setEvents(newEvents)
      const newMixedData = mixedData.map((item) => {
        if (item.cardType === 'event') {
          return item
        }
        return {
          ...item,
          fIdx: item.eIdx + 1,
        }
      })
      newMixedData.unshift({
        ...newEvent,
        cardType: 'event',
        eIdx: 0,
      })
      setMixedData(newMixedData)
    }
  }

  const addNewGallery = (shared) => {
    setGalleries([...shared, ...galleries])
    const newMixedData = [
      ...shared.map((item, idx) => {
        return {
          ...item,
          cardType: 'gallery',
          gIdx: idx,
        }
      }),
      ...mixedData.map((item) => {
        if (item.cardType === 'forum') {
          return item
        }
        item.gIdx += shared.length
        return item
      }),
    ]
    setMixedData(newMixedData)
  }

  const loadMixDatas = useCallback(async () => {
    const forumLast36 = await API.getForumLast36(collectiveInfo.collective_id)
    const galleryLast36 = await API.getGalleryLast36(
      collectiveInfo.collective_id,
    )
    const eventLast36 = await API.getEventLast36(collectiveInfo.collective_id)
    let forumIdx = 0
    let galleryIdx = 0
    let eventIdx = 0
    const sumWeight =
      Number(forumLast36.data.count) +
      Number(galleryLast36.data.count) +
      Number(eventLast36.data.count)
    const forumWeight =
      sumWeight === 0 ? 1 : Number(forumLast36.data.count) / sumWeight
    const galleryWeight =
      sumWeight === 0 ? 1 : Number(galleryLast36.data.count) / sumWeight
    const mixedData: any[] = []
    while (
      forumIdx < forums.length ||
      galleryIdx < galleries.length ||
      eventIdx < events.length
    ) {
      const rand = Math.random()
      if (rand < forumWeight && forumIdx < forums.length) {
        mixedData.push({
          ...forums[forumIdx],
          cardType: 'forum',
          fIdx: forumIdx,
        })
        forumIdx++
      } else {
        if (
          rand < forumWeight + galleryWeight &&
          galleryIdx < galleries.length
        ) {
          mixedData.push({
            ...galleries[galleryIdx],
            cardType: 'gallery',
            gIdx: galleryIdx,
          })
          galleryIdx++
        } else {
          if (eventIdx < events.length) {
            mixedData.push({
              ...events[eventIdx],
              cardType: 'event',
              eIdx: eventIdx,
            })
            eventIdx++
          } else if (forumIdx < forums.length) {
            mixedData.push({
              ...forums[forumIdx],
              cardType: 'forum',
              fIdx: forumIdx,
            })
            forumIdx++
          } else if (galleryIdx < galleries.length) {
            mixedData.push({
              ...galleries[galleryIdx],
              cardType: 'gallery',
              gIdx: galleryIdx,
            })
            galleryIdx++
          }
        }
      }
    }

    setMixedData(mixedData)
    setIsMixed(true)
  }, [forums, galleries, events])

  useEffect(() => {
    if (forums.length > 0 || galleries.length > 0) {
      if (mixedData.length === 0 || !isMixed) {
        loadMixDatas()
      }
    }
  }, [forums, galleries, events, isMixed, sortOption])

  useEffect(() => {
    if (collectiveInfo) {
      updateTopics(collectiveInfo.topics ?? [])
      API.getForums(
        collectiveInfo.collective_id,
        'forum',
        account ?? '',
        sortOption,
      ).then((res) => {
        setForums(res.data.forums)
      })

      API.getGalleries(collectiveInfo.collective_id, account, sortOption).then(
        (res) => {
          const galleries = res.data.galleries || []
          setGalleries(galleries)
        },
      )
    }
  }, [account, sortOption, collectiveInfo])

  useEffect(() => {
    if (collectiveInfo) {
      API.getEventList(collectiveInfo.collective_id, account).then((res) => {
        setEvents(res.data.events)
      })

      API.getMembers(collectiveInfo.collective_id).then((res) => {
        if (res.data.success) {
          setMembers(res.data.members)
        }
      })
    }
  }, [collectiveInfo, account])

  useEffect(() => {
    if (!document) {
      return
    }

    if (!(location.state as LocationState)?.forum_id) {
      return
    }

    setTimeout(() => {
      const element_id = `forum_${(location.state as LocationState).forum_id}`
      const componentView = document.getElementById('collectiveDetails')
      const element = document.getElementById(element_id)
      componentView?.scrollTo(
        0,
        element?.offsetTop ? element.offsetTop - 100 : 0,
      )
    }, 2000)
  }, [location])

  const handleFilter = (newFilter) => {
    updateFilter(newFilter)
  }
  return (
    <>
      {collectiveInfo && (
        <CollectiveLayoutWrapper>
          <div className="collectiveDetails" id="collectiveDetails">
            <CollectiveHeader
              collectiveInfo={collectiveInfo}
              updateCollectiveInfo={(data) => setCollectiveInfo(data)}
            />
            <div className={'collectiveLayout'}>
              {location.pathname.split('/')[3] === 'gallery' ? (
                <CollectiveSidebarMinV2
                  collectiveInfo={collectiveInfo}
                  galleries={galleries}
                  addNewForum={addNewForum}
                  addNewGallery={addNewGallery}
                  addNewEvent={addNewEvent}
                  currentUserProfile={currentUserProfile}
                />
              ) : (
                <CollectiveSidebarV2
                  collectiveInfo={collectiveInfo}
                  galleries={galleries}
                  addNewForum={addNewForum}
                  addNewGallery={addNewGallery}
                  addNewEvent={addNewEvent}
                  currentUserProfile={currentUserProfile}
                />
              )}
              <Outlet
                context={{
                  forums,
                  events,
                  galleries,
                  mixedData,
                  setForums,
                  setGalleries,
                  setMixedData,
                  setEvents,
                  collectiveInfo,
                  sort: sortOption,
                  updateSort: setSortOption,
                  filter,
                  updateFilter: handleFilter,
                  members,
                  topics,
                  updateTopics,
                }}
              />
            </div>
          </div>
        </CollectiveLayoutWrapper>
      )}
    </>
  )
}
