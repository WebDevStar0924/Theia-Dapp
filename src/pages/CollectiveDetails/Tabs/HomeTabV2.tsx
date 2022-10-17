import classnames from 'classnames'
import { ExpandableView } from 'components/ExpandableView'
import { FilterBar } from 'components/FilterBar'
import { Flex } from 'components/Flex'
import SearchSvg from '../../../assets/svg/Search.svg'
import { ForumCard } from 'components/ForumCard'
import { GalleryCard } from 'components/GalleryCard'
import { ImageCard } from 'components/ImageCard/ImageCard'
import { TagList } from 'components/TagList'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { useMembership } from 'hooks/useMembership'
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel'
import EventCardModal from 'widgets/EventCardModal'
import { useArtDetailModal } from 'widgets/GalleryModal/useShareArtModal'
import stackedBg from '../../../assets/image/stackedBg.png'
import { galleryImages } from '../data'
import { HomeTabV2Wrapper, StackedCarouselWrapper } from '../styles'
import ExternalInput from 'components/ExternalInput'
import { CollectiveFeedPost } from '../../../uikit/CollectiveFeedPost'
import { TrendingTopicsBar } from '../../../uikit/TrendingTopicsBar'
import { ForumPostCard } from '../../../uikit/ForumPostCard'
import { EventPostCard } from '../../../uikit/EventPostCard'
import { EventPostCardRSVP } from '../../../uikit/EventPostCardRSVP'
import { ForumPostCardTwoImage } from '../../../uikit/ForumPostCardTwoImage'
export default function HomeTab() {
  const [activeSlideNum, setActiveSlideNum] = useState(0)
  const [memberUsers, setMemberUsers] = useState<any[]>()
  const [adminUsers, setAdminUsers] = useState<any[]>()
  const [searchMemberText, setSearchMember] = useState('')
  const ref = useRef<any>(null)
  const navigate = useNavigate()
  const onMemberShipCheck = useMembership()

  const { account } = useActiveWeb3React()
  const { cname, post_id } = useParams()

  const {
    forums,
    galleries,
    mixedData,
    collectiveInfo,
    events,
    setForums,
    setMixedData,
    setGalleries,
    setEvents,
    sort,
    updateSort,
    filter,
    updateFilter,
    members,
    topics,
    updateTopics,
  } = useOutletContext<CollectiveContextProps>()

  const { onPresentArtDetailModal } = useArtDetailModal(collectiveInfo)

  const onUpdateGallery = (idx: number, gallery: any) => {
    const newGalleries = [...galleries]
    newGalleries[idx] = gallery
    setGalleries(newGalleries)
    const newMixedData = [...mixedData]
    setMixedData(
      newMixedData.map((item) => {
        if (item.gallery_id === gallery.gallery_id) {
          return gallery
        }
        return item
      }),
    )
  }
  const onUpdateEvent = (idx: number, event: any) => {
    const newEvents = [...events]
    newEvents[idx] = event
    setEvents(newEvents)
    const newMixedData = [...mixedData]
    setMixedData(
      newMixedData.map((item) => {
        if (item.event_id === event.event_id) {
          return event
        }
        return item
      }),
    )
  }
  const filterMemberUser = () => {
    const filterMemberUsers = members.filter(
      (item) =>
        item.creator != null &&
        (item.creator[0].role == 'member' || item.creator[0].role == null),
    )
    setMemberUsers(filterMemberUsers)
  }
  const filterAdminUser = () => {
    const filterAdminUsers = members.filter(
      (item) => item.creator != null && item.creator[0].role == 'admin',
    )
    setAdminUsers(filterAdminUsers)
  }

  const onUpdateForum = (idx: number, forum: any) => {
    const newForums = [...forums]
    newForums[idx] = forum
    setForums(newForums)

    const newMixedData = [...mixedData]
    setMixedData(
      newMixedData.map((item) => {
        if (item.forum_id === forum.forum_id) {
          return forum
        }
        return item
      }),
    )
  }
  // const onUpdateEvent = (idx: number, event: any) => {
  //   const newEvents = [...events]
  //   newEvents[idx] = event
  //   setForums(newEvents)

  //   const newMixedData = [...mixedData]
  //   setMixedData(
  //     newMixedData.map((item) => {
  //       if (item.event_id === event.event_id) {
  //         return event
  //       }
  //       return item
  //     }),
  //   )
  // }

  const filterData = useMemo(() => {
    let newData = mixedData
    if (filter.onlySaved) {
      newData = newData.filter((item) => Number(item.is_saved) === 1)
    }
    if (filter.onlyMyPosts) {
      newData = newData.filter((item) => item.owneraddress === account)
    }
    if (topics.filter((t) => t.selected).length > 0) {
      newData = newData.filter((item) => item.tags && item.tags.length > 0)
    }
    return newData
  }, [filter, mixedData, topics])

  useEffect(() => {
    if (post_id && collectiveInfo) {
      onPresentArtDetailModal({
        gallery_id: post_id,
        callback: () => navigate(`/collective/${cname}`),
      })
    }
  }, [post_id, collectiveInfo])

  useEffect(() => {
    if (searchMemberText == '') {
      filterMemberUser()
      filterAdminUser()
    } else {
      if (memberUsers != null) {
        const filterMemberUsers = memberUsers.filter(
          (item) =>
            (item.creator[0].name &&
              String(item.creator[0].name.toLowerCase()).indexOf(
                searchMemberText.toLocaleLowerCase(),
              ) != -1) ||
            (item.creator[0].username &&
              String(item.creator[0].username.toLocaleLowerCase()).indexOf(
                searchMemberText.toLocaleLowerCase(),
              ) != -1) ||
            (item.member_address &&
              item.member_address
                .toLowerCase()
                .indexOf(searchMemberText.toLocaleLowerCase()) != -1),
        )
        setMemberUsers(filterMemberUsers)
      }
      if (adminUsers != null) {
        const filterAdminUsers = adminUsers.filter(
          (item) =>
            (item.creator[0].name &&
              String(item.creator[0].name.toLowerCase()).indexOf(
                searchMemberText.toLocaleLowerCase(),
              ) != -1) ||
            (item.creator[0].username &&
              String(item.creator[0].username.toLocaleLowerCase()).indexOf(
                searchMemberText.toLocaleLowerCase(),
              ) != -1) ||
            (item.member_address &&
              item.member_address
                .toLowerCase()
                .indexOf(searchMemberText.toLocaleLowerCase()) != -1),
        )
        setAdminUsers(filterAdminUsers)
      }

      // }
    }
    // const memberUsers = members.filter(item => item.creator != null && item.creator[0].role == "member")
  }, [searchMemberText])

  useEffect(() => {
    filterMemberUser()
    filterAdminUser()
  }, [members])

  return (
    <HomeTabV2Wrapper>
      <div className="leftPart">
        <CollectiveFeedPost />
        <div className="underLine"></div>
        <TrendingTopicsBar />
        <div className="underLine"></div>
        <div className="postList">
          <ForumPostCard></ForumPostCard>
          <div className="underLine"></div>

          <EventPostCard></EventPostCard>
          <div className="underLine"></div>

          <EventPostCardRSVP></EventPostCardRSVP>
          <div className="underLine"></div>

          <ForumPostCardTwoImage></ForumPostCardTwoImage>
          <div className="underLine"></div>
          <ForumPostCardTwoImage></ForumPostCardTwoImage>
          <div className="underLine"></div>
          <ForumPostCardTwoImage></ForumPostCardTwoImage>
          <div className="underLine"></div>
          <ForumPostCardTwoImage></ForumPostCardTwoImage>
          <div className="underLine"></div>
        </div>
      </div>
      <div className="rightPart"></div>
    </HomeTabV2Wrapper>
  )
}
