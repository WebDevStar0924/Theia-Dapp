// import { CommentButton2 } from 'components/CommentButton2'
import { Flex } from 'components/Flex'
// import { HeartButton } from 'components/HeartButton'
import API from 'api/api'
import { SaveButton } from 'components/SaveButton'
import { ShareButton } from 'components/ShareButton'
import { Text } from 'components/Text'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useToast } from 'hooks/useToast'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { FiCalendar } from 'react-icons/fi'
import { useOutletContext, useParams } from 'react-router-dom'
import EventImage from '../../assets/image/eventBg.png'
import useAttendEventModal from '../AttendEventModal/useAttendEventModal'
import sampleImg from '../../assets/image/defaultProjectIcon.png'
import {
  EventCardModalBodyWrapper,
  EventCardModalHeaderWrapper,
  EventCardWrapper,
  Card,
} from './style'
import moment from 'moment'
import { getDiffTime } from 'utils'
import { useMembership } from 'hooks/useMembership'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'

export type iProps = {
  data: any
  onUpdateEvent: (event: any) => void
  onClick: () => void
}

export default function EventCardModal(props: iProps) {
  const { data, onUpdateEvent, onClick } = props
  const { account } = useActiveWeb3React()
  const {
    creator,
    event_id,
    commentscount,
    favorite_count,
    createdat,
    favorites,
  } = data
  const onMemberShipCheck = useMembership()
  const { cname } = useParams()
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const { onPresentAttendEventModal } = useAttendEventModal(data)
  const { toastSuccess } = useToast()
  function getMonth(string) {
    const data = new Date(string).toDateString()
    const array = data.split(' ')
    const returnDate = array[1] + ' ' + array[2]
    return returnDate
  }

  const handleSaveItem = () => {
    const is_saved = Number(data?.is_saved) === 1 ? 0 : 1
    API.updateSaveItem('event', event_id, account, is_saved).then(() => {
      onUpdateEvent({
        ...data,
        is_saved: Number(is_saved) === 1 ? 0 : 1,
      })
    })
  }
  const setCommentBox = () => {
    onClick()
  }

  const handleLike = (action) => {
    API.updateFavorite(event_id, 'event', action, account).then((res: any) => {
      if (res.data.success) {
        onUpdateEvent({
          ...data,
          favorites:
            action === 'up' ? Number(favorites) + 1 : Number(favorites) - 1,
          favorite_count: action === 'up' ? 1 : 0,
        })
      }
    })
  }
  return (
    <Card onClick={onClick}>
      <EventCardWrapper>
        <EventCardModalHeaderWrapper>
          {creator && (
            <div className="forumCardHeader">
              <Flex style={{ gridGap: '10px' }} alignItems="center">
                <img
                  src={creator[0].avatar ?? sampleImg}
                  className="creatorAvatar"
                  alt={creator[0].name}
                />
                <span className="username">{creator[0].name}</span>
                <span className="userTag">MEMBER</span>
              </Flex>
              <div className="createTime">{getDiffTime(moment(createdat))}</div>
            </div>
          )}
        </EventCardModalHeaderWrapper>
        <EventCardModalBodyWrapper>
          <Flex flexDirection={'column'} style={{ gap: '21px' }}>
            <Flex>
              <Text className="placeHolder">{data?.event_title}</Text>
              {data?.location_type === 'VIRTUAL' ? (
                <Text className="virtualTag" style={{ marginLeft: '16px' }}>
                  VIRTUAL
                </Text>
              ) : (
                <Text className="irlTag" style={{ marginLeft: '16px' }}>
                  IRL
                </Text>
              )}
            </Flex>
            <Flex alignItems={'center'}>
              <FiCalendar size={22} color="#101828" />
              <Text className="eventDate" style={{ marginLeft: '10px' }}>
                {getMonth(data?.event_date).toUpperCase()}
              </Text>
              <Text className="eventTime" style={{ marginLeft: '16px' }}>
                {data?.starttime} - {data?.endtime} {data?.timezone}
              </Text>
            </Flex>
            <Flex>
              <Text className="eventDescription">{data?.description}</Text>
            </Flex>
            <Flex style={{ margin: '0px 40px 0px 40px' }}>
              {data?.event_image === null ? (
                <img className="eventImage" src={EventImage} alt="event" />
              ) : (
                <img
                  className="eventImage"
                  src={data?.event_image}
                  alt="event"
                />
              )}
            </Flex>
            <Flex
              className={'attendButton'}
              key={`mixdata_${data.event_id}`}
              style={{ margin: '0px 40px 0px 40px' }}
              onClick={(e) =>
                onMemberShipCheck(collectiveInfo.collective_id, account, () => {
                  e.stopPropagation()
                  onPresentAttendEventModal(data)
                })
              }
            >
              ATTEND
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '40px 0px 0px 0px' }}
            className="bottom-border-line"
          >
            <Flex flexDirection="row">
              <Flex alignItems="center" style={{ marginRight: '20px' }}>
                <HeartButton
                  count={favorites}
                  onClick={(e) => {
                    e.stopPropagation()
                    onMemberShipCheck(data.collective_id, account, () =>
                      handleLike(favorite_count > 0 ? 'down' : 'up'),
                    )
                  }}
                  active={favorite_count > 0}
                  size={'lg'}
                />
              </Flex>
              <Flex alignItems="center">
                <CommentButton
                  count={commentscount}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCommentBox()
                  }}
                />
              </Flex>
            </Flex>
            <Flex flexDirection="row">
              <Flex alignItems="center" style={{ gap: '10px' }}>
                <SaveButton
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSaveItem()
                  }}
                  isSaved={Number(data?.is_saved) > 0}
                />
                <ShareButton
                  onClick={(e) => {
                    e.stopPropagation()
                    if (typeof window !== 'undefined') {
                      const shareLink =
                        window.location.protocol +
                        '//' +
                        window.location.host +
                        `/collective/${cname}/events/eventdetails/${data?.event_id}`
                      navigator.clipboard.writeText(shareLink.toString())
                      document.execCommand(
                        'copy',
                        false,
                        `${shareLink.toString()}`,
                      )
                      toastSuccess('Share link is copied', '')
                    }
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </EventCardModalBodyWrapper>
      </EventCardWrapper>
    </Card>
  )
}
