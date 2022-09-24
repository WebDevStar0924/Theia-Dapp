import classnames from 'classnames'
import { ExpandableView } from 'components/ExpandableView'
import { FilterBar } from 'components/FilterBar'
import { Flex } from 'components/Flex'
import { ForumCard } from 'components/ForumCard'
import { GalleryCard } from 'components/GalleryCard'
import { ImageCard } from 'components/ImageCard/ImageCard'
import { TagList } from 'components/TagList'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useMemo, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { useNavigate, useOutletContext } from 'react-router-dom'
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel'
import { formatBlockchainAddress } from 'utils'
import EventCardModal from 'widgets/EventCardModal'
import stackedBg from '../../../assets/image/stackedBg.png'
import { galleryImages } from '../data'
import { HomeTabWrapper, StackedCarouselWrapper } from '../styles'

export default function HomeTab() {
  const [activeSlideNum, setActiveSlideNum] = useState(0)
  const ref = useRef<any>(null)
  const navigate = useNavigate()
  const { account } = useActiveWeb3React()

  const tags = [
    'announcements',
    'suggestions',
    'whitelist',
    'product bugs',
    'memes',
    'new drop',
    'fan art',
    'events',
    'ethereum merge',
    'airdrop',
  ]

  const {
    forums,
    galleries,
    mixedData,
    collectiveInfo,
    setForums,
    setMixedData,
    setGalleries,
    sort,
    updateSort,
    filter,
    updateFilter,
    members,
  } = useOutletContext<CollectiveContextProps>()

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

  const filterData = useMemo(() => {
    let newData = mixedData
    if (filter.onlySaved) {
      newData = mixedData.filter(
        (item) => localStorage.getItem(`forum_${item.forum_id}`) === 'true',
      )
    }
    if (filter.onlyMyPosts) {
      newData = newData.filter((item) => item.owneraddress === account)
    }
    return newData
  }, [filter, mixedData])

  return (
    <HomeTabWrapper>
      <div className="leftPart">
        <FilterBar
          sort={sort}
          updateSort={updateSort}
          filter={filter}
          updateFilter={updateFilter}
        />
        <EventCardModal></EventCardModal>
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
          content={<TagList tags={tags} />}
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
              {members.map((member, idx) => (
                <Flex
                  flexDirection={'column'}
                  alignItems="flex-start"
                  style={{ gridGap: '5px' }}
                  key={`user_${idx}`}
                >
                  {member.creator && member.creator[0].avatar ? (
                    <img
                      className="ellipse80"
                      src={member.creator[0].avatar}
                      alt={member.creator[0].name}
                    />
                  ) : (
                    <Jazzicon
                      diameter={80}
                      seed={jsNumberForAddress(member.member_address)}
                    />
                  )}
                  <div className="userName">
                    {member.creator
                      ? member.creator[0].name
                      : formatBlockchainAddress(member.member_address, 2, 2)}
                  </div>
                  <div className="userTag">MEMBER</div>
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
