import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { GalleryPostCard } from 'uikit/GalleryPostCard'
import { useArtDetailModal } from 'widgets/GalleryModal/useShareArtModal'
import { CollectiveFeedPost } from 'uikit/CollectiveFeedPost'
import { EventPostCard } from 'uikit/EventPostCard'

import { ForumPostCard } from 'uikit/ForumPostCard'

import { TrendingTopicsBar } from 'uikit/TrendingTopicsBar'
import { HomeTabV2Wrapper } from '../styles'
export default function HomeTab() {
  const [memberUsers, setMemberUsers] = useState<any[]>()
  const [adminUsers, setAdminUsers] = useState<any[]>()
  const [searchMemberText, setSearchMember] = useState('')
  const navigate = useNavigate()
  const { cname, post_id } = useParams()
  const postList = [
    'post1',
    'post2',
    'post3',
    'post4',
    'post5',
    'post6',
    'post7',
    'post8',
    'post9',
    'post10',
  ]
  const { collectiveInfo, members } = useOutletContext<CollectiveContextProps>()

  const { onPresentArtDetailModal } = useArtDetailModal(collectiveInfo)

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
    }
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
          {postList.map(function (title, index) {
            return index % 3 == 0 ? (
              <div key={title + index}>
                <ForumPostCard
                  onCardClick={() => {
                    navigate(
                      `/collective/${collectiveInfo.name}/details/${index}/home`,
                    )
                  }}
                ></ForumPostCard>
                <div className="underLine"></div>
              </div>
            ) : index % 3 == 1 ? (
              <div key={title + index}>
                <EventPostCard></EventPostCard>
                <div className="underLine"></div>
              </div>
            ) : (
              <div key={title + index}>
                <GalleryPostCard></GalleryPostCard>
                <div className="underLine"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="rightPart"></div>
    </HomeTabV2Wrapper>
  )
}
