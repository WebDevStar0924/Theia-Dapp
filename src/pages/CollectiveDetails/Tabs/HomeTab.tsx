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
import { HomeTabWrapper, StackedCarouselWrapper } from '../styles'
import ExternalInput from 'components/ExternalInput'

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
    <HomeTabWrapper>
      <div className="leftPart">
        <FilterBar
          sort={sort}
          updateSort={updateSort}
          filter={filter}
          updateFilter={updateFilter}
        />
        {/* <EventCardModal></EventCardModal> */}
        {filterData.map((item, idx) => (
          <div
            key={`mixdata_${idx}`}
            id={
              item.cardType === 'forum'
                ? `forum_${item.forum_id}`
                : `gallery_${item.gallery_id}`
            }
          >
            {item.cardType === 'forum' && (
              <ForumCard
                data={item}
                key={`forum_${idx}`}
                onCardClick={() => {
                  navigate(
                    `/collective/${collectiveInfo.name}/details/${item.forum_id}/home`,
                  )
                }}
                onUpdateForum={(forum) => onUpdateForum(forum.fIdx, forum)}
                sort={sort}
              />
            )}
            {item.cardType === 'event' && (
              <div
                className={'eventCard'}
                onClick={() => {
                  onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                    navigate(
                      `/collective/${collectiveInfo.name}/events/eventdetails/${item.owneraddress}/${item.event_id}/home`,
                    ),
                  )
                  // navigate(
                  //   `/collective/${collectiveInfo.name}/events/eventdetails/${item.owneraddress}/${item.event_id}/home`,
                  // )
                }}
              >
                <EventCardModal
                  key={`mixdata_${idx}`}
                  data={item}
                  onUpdateEvent={(event) => onUpdateEvent(event.fIdx, event)}
                  onClick={() => {
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => {
                        navigate(
                          `eventdetails/${item.owneraddress}/${item.event_id}/events`,
                        )
                      },
                    )
                  }}
                />
              </div>
            )}
            {item.cardType === 'gallery' && (
              <GalleryCard
                data={item}
                key={`gallery_${idx}`}
                onUpdateGallery={(gallery) =>
                  onUpdateGallery(gallery.gIdx, gallery)
                }
                onClick={() => {
                  navigate(
                    `/collective/${collectiveInfo.name}/home/${item.gallery_id}`,
                  )
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="rightPart">
        <ExpandableView
          header={<div>TOPICS</div>}
          content={<TagList tags={topics} updateTopics={updateTopics} />}
        />

        <ExpandableView
          header={<div>MEMBERS</div>}
          content={
            <Flex
              flexDirection={'column'}
              style={{
                gridGap: '20px',
                paddingBottom: '20px',
                maxHeight: '1130px',
                overflow: 'scroll',
              }}
            >
              <ExternalInput
                label=""
                value={searchMemberText}
                className={'searchMemberInput'}
                type="active"
                startIcon={<img src={SearchSvg} alt="calendar" />}
                placeholder="search members"
                onUserInput={(val) => setSearchMember(val)}
              />
              {/* <StyledInput
                value={searchMember}
                onChange={(event) => { setSearchMember(event.target.value) }}
                autoComplete={'off'}
                autoCorrect={'off'}
                type={'text'}
                placeholder={'Search members'}
                fontSize={'12px'}
                style={{
                  backgroundColor: '#FFFFFF10',
                  padding: '20px 16px',
                  borderRadius: '20px',
                  lineHeight: '32px',
                  width: '100%',
                  border: 'solid 2px #E4E7EC',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '500',
                }}
              /> */}
              {adminUsers && adminUsers.length != 0 && (
                <div className={'userTypeText'}>TEAM</div>
              )}
              {adminUsers &&
                adminUsers.map((member, idx) => (
                  <Flex
                    flexDirection={'row'}
                    alignItems="center"
                    style={{ gridGap: '5px' }}
                    marginLeft={'10px'}
                    key={`user_${idx}`}
                  >
                    <Flex flexDirection={'column'} alignItems={'center'}>
                      {member.creator[0].avatar ? (
                        <img
                          className="ellipse60"
                          src={member.creator[0].avatar}
                          alt={member.creator[0].name}
                        />
                      ) : (
                        <Jazzicon
                          diameter={60}
                          seed={jsNumberForAddress(member.member_address)}
                        />
                      )}
                      <div className="adminTag" style={{ marginTop: '4px' }}>
                        ADMIN
                      </div>
                    </Flex>
                    <Flex
                      flexDirection={'column'}
                      marginLeft={'22.5px'}
                      alignItems="flex-start"
                    >
                      <div className="memberName">{member.creator[0].name}</div>
                      <div className="userName">
                        @{member.creator[0].username}
                      </div>
                    </Flex>
                  </Flex>
                ))}
              {memberUsers && memberUsers.length != 0 && (
                <div className={'userTypeText'} style={{ marginTop: '10px' }}>
                  MEMBERS
                </div>
              )}
              {memberUsers &&
                memberUsers.map((member, idx) => (
                  <Flex
                    flexDirection={'row'}
                    alignItems="center"
                    style={{ gridGap: '5px' }}
                    key={`user_${idx}`}
                    marginLeft={'10px'}
                  >
                    <Flex flexDirection={'column'} alignItems={'center'}>
                      {member.creator[0].avatar != null &&
                      member.creator[0].avatar != 'null' ? (
                        <img
                          className="ellipse60"
                          src={member.creator[0].avatar}
                          alt={member.creator[0].name}
                        />
                      ) : (
                        <Jazzicon
                          diameter={60}
                          seed={jsNumberForAddress(member.member_address)}
                        />
                      )}
                      <div className="memberTag" style={{ marginTop: '4px' }}>
                        MEMBER
                      </div>
                    </Flex>
                    <Flex
                      flexDirection={'column'}
                      marginLeft={'22.5px'}
                      alignItems="flex-start"
                    >
                      <div className="memberName">{member.creator[0].name}</div>
                      <div className="userName">
                        @{member.creator[0].username}
                      </div>
                    </Flex>
                  </Flex>
                ))}
            </Flex>
          }
        />

        <StackedCarouselWrapper bg={stackedBg}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={ImageCard}
                  slideWidth={400}
                  carouselWidth={parentWidth}
                  data={galleryImages}
                  currentVisibleSlide={5}
                  maxVisibleSlide={5}
                  useGrabCursor
                  onActiveSlideChange={(activeSlide) =>
                    setActiveSlideNum(activeSlide)
                  }
                />
              )
            }}
          />
          <div className="carouselActions">
            <div
              className="moveBtn"
              onClick={() => {
                if (ref.current) ref.current.goBack()
              }}
            >
              <BsArrowLeft fill="#999999" />
            </div>
            <div className="dots">
              {galleryImages.map((_, idx) => (
                <span
                  key={`dot_${idx}`}
                  className={classnames('dot', {
                    active: ref.current && idx === activeSlideNum,
                  })}
                />
              ))}
            </div>
            <div
              className="moveBtn"
              onClick={() => {
                if (ref.current) {
                  ref?.current.goNext()
                }
              }}
            >
              <BsArrowRight fill="#999999" />
            </div>
          </div>
        </StackedCarouselWrapper>
      </div>
    </HomeTabWrapper>
  )
}
