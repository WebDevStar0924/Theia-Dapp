import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { FiMap } from 'react-icons/all'
import { Label } from 'theme-ui'
import EventDetailBg from '../../../assets/image/eventDetailBg.png'
import { atcb_action } from 'add-to-calendar-button'
import 'add-to-calendar-button/assets/css/atcb.css'
import API from 'api/api'
import { SaveButton } from 'components/SaveButton'
import { ShareButton } from 'components/ShareButton'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useToast } from 'hooks/useToast'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import BackArrow from '../../../assets/svg/backarrow.svg'
import useAttendEventModal from '../../../widgets/AttendEventModal/useAttendEventModal'
// import EventGoing from './EventGoing'
import { BackButtonWrapper, EventDetailsWrapper } from './styles'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'
import EventCommentCard from './EventCommentCard'
import ExternalInput from 'components/ExternalInput'
import { useMembership } from 'hooks/useMembership'
import { State } from 'state/types'
import { useSelector } from 'react-redux'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export default function EventDetails() {
  const { events, setEvents, collectiveInfo } =
    useOutletContext<CollectiveContextProps>()
  const onMemberShipCheck = useMembership()
  const onUpdateEvent = (event: any, is_saved: any) => {
    const newEvents = [...events]
    for (const i in events) {
      if (events[i].event_id == event.event_id) {
        events[i] = event
        events[i].is_saved = is_saved
        break
      }
    }
    setEvents(newEvents)
  }
  const profileData = useSelector((state: State) => state.profile.data)
  const navigate = useNavigate()
  const { account } = useActiveWeb3React()
  const [replyId, setReplyId] = useState<number | null>(null)
  const { cname, event_id, prev_tab } = useParams()
  const [message, setMessage] = useState('')
  const [eventData, setEventData] = useState<any>()
  const [commentCreator, setCommentCreatorName] = useState('')
  const [commentCreatorAvatar, setCommentCreatorAvatar] = useState('')
  const [showComment, setShowComment] = useState(true)
  const [commentData, setCommentData] = useState<any[]>([])
  const { onPresentAttendEventModal } = useAttendEventModal(eventData)
  const [commentCreatorAddress, setCommentCreatorAddress] = useState('')

  const { toastSuccess } = useToast()
  function formatDate(string) {
    const data = new Date(string).toDateString()
    const array = data.split(' ')
    const returnDate = array[0] + ', ' + array[1] + ', ' + array[2] + ', '
    return returnDate
  }
  function getMonth(string) {
    const data = new Date(string).toDateString()
    const array = data.split(' ')
    const returnDate = array[1] + ' ' + array[2]
    return returnDate
  }
  const onComment = () => {
    setShowComment(!showComment)
  }
  useEffect(() => {
    if (account) {
      API.getEventById(event_id, account).then((res) => {
        setEventData(res.data.event)
      })
      API.getComments(event_id, 'event', account, 'trending').then((res) => {
        setCommentData(res.data.comments)
      })
    }
  }, [account])

  useEffect(() => {
    const filterComment = commentData.filter(
      (item) => item.comment_id == replyId,
    )
    setCommentCreatorName('@' + filterComment[0]?.creator[0]?.username)
    setCommentCreatorAvatar(filterComment[0]?.creator[0]?.avatar)
    setCommentCreatorAddress(filterComment[0]?.creator[0]?.walletaddress)
  }, [replyId])

  useEffect(() => {
    API.getComments(event_id, 'event', account, 'trending').then((res) => {
      if (res.data.success) {
        setCommentData(res.data.comments)
      }
    })
  }, [])

  // let getUserCommentUserName :(replyId:number) => any = function(replyId:number) {
  //   const filterComment = eventData.comments.filter(
  //     (item) => item.id == replyId,
  //   );
  //   return filterComment;
  // }

  const AddToCalendar = () => {
    const starttime = eventData.starttime.toString().substring(0, 5)
    const endtime = eventData.endtime.toString().substring(0, 5)
    return (
      <div
        onClick={() => {
          atcb_action({
            name: eventData.event_title,
            startDate: eventData.event_date,
            startTime: starttime,
            endTime: endtime,
            endDate: eventData.event_date,
            options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
            location: eventData.location,
            timeZone: 'Europe/Berlin',
            iCalFileName: 'Reminder-Event',
          })
        }}
      >
        ADD TO CALENDAR
      </div>
    )
  }
  const onFavourite = () => {
    API.updateFavorite(
      eventData.event_id,
      'event',
      eventData.favorite_count > 0 ? 'down' : 'up',
      account,
    ).then((res) => {
      if (res.data.success) {
        setEventData({
          ...eventData,
          favorite_count: eventData.favorite_count > 0 ? 0 : 1,
          favorites:
            eventData.favorite_count > 0
              ? Number(eventData.favorites) - 1
              : Number(eventData.favorites) + 1,
        })
      }
    })
  }

  const handleSaveItem = () => {
    const is_saved = Number(eventData.is_saved) === 1 ? 0 : 1
    API.updateSaveItem('event', event_id, account, is_saved).then(() => {
      onUpdateEvent(eventData, is_saved)
    })
  }

  const onReply = useCallback(() => {
    if (message === '') {
      return
    }
    API.replyComment(
      eventData.event_id,
      replyId,
      'event',
      message,
      account,
    ).then((res) => {
      API.getComments(event_id, 'event', account, 'trending').then((res) => {
        if (res.data.success) {
          setCommentData(res.data.comments)

          setEventData({
            ...eventData,
            commentscount: Number(eventData.commentscount) + 1,
          })
          setMessage('')
          setShowComment(true)
          setReplyId(null)
        }
      })
    })
  }, [message])
  return (
    <>
      {eventData && (
        <EventDetailsWrapper>
          <BackButtonWrapper>
            <div
              className="backButton"
              onClick={() => {
                navigate(`/collective/${cname}/${prev_tab}`)
              }}
            >
              <img src={BackArrow} alt="event" style={{ margin: 'auto' }} />
            </div>
          </BackButtonWrapper>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection="row"
              style={{ height: '300px', borderBottom: '1px solid #E4E7EC' }}
            >
              <Flex
                className={'bannerImage'}
                flex="2"
                alignItems="center"
                justifyContent="center"
                style={{ paddingBottom: '1px' }}
              >
                {eventData.event_image !== null ? (
                  <img
                    src={eventData.event_image}
                    alt="event"
                    style={{
                      borderTopLeftRadius: '16px',
                      width: '600px',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <img
                    src={EventDetailBg}
                    alt="event"
                    style={{
                      borderTopLeftRadius: '16px',
                      width: '600px',
                      height: '300px',
                    }}
                  />
                )}
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                margin="32px 32px 18px 32px"
                flex="1"
              >
                <Flex flexDirection="row" justifyContent="space-between">
                  <Text className={'date'}>
                    {getMonth(eventData.event_date).toUpperCase()}
                  </Text>
                  {eventData.location_type === 'IRL' ? (
                    <Flex style={{ gap: '16px' }}>
                      <Flex className={'irlMark'}>
                        <Text className={'irlMarkText'}>IRL</Text>
                      </Flex>
                    </Flex>
                  ) : (
                    <Flex style={{ gap: '16px' }}>
                      <Flex className={'virtualTag'}>VIRTUAL</Flex>
                    </Flex>
                  )}
                </Flex>
                <Text className={'eventTitle'}>
                  {eventData.event_title.toUpperCase()}
                </Text>

                <Flex
                  className={'attendButton'}
                  onClick={() => {
                    onPresentAttendEventModal(eventData)
                  }}
                >
                  ATTEND
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              style={{
                padding: '22px 22px',
                borderBottom: '1px solid #E4E7EC',
              }}
              className="bottom-border-line"
            >
              <Flex flexDirection="row">
                <Flex alignItems="center" style={{ marginRight: '20px' }}>
                  <HeartButton
                    active={eventData.favorite_count > 0}
                    count={eventData.favorites}
                    size={'lg'}
                    onClick={() => {
                      onMemberShipCheck(
                        collectiveInfo.collective_id,
                        account,
                        onFavourite(),
                      )
                      // onFavourite()
                    }}
                  />
                </Flex>
                <Flex alignItems="center">
                  <CommentButton
                    count={eventData.commentscount}
                    // onClick={onComment}
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
                    isSaved={Number(eventData.is_saved) > 0}
                  />
                  <ShareButton
                    onClick={(e) => {
                      e.stopPropagation()
                      if (typeof window !== 'undefined') {
                        const shareLink =
                          window.location.protocol +
                          '//' +
                          window.location.host +
                          `/collective/${cname}/events/eventdetails/${eventData.event_id}`
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

            <Flex
              flexDirection="row"
              style={{ borderBottom: '1px solid #E4E7EC' }}
            >
              <Flex
                flexDirection="column"
                alignItems="start"
                flex="2"
                style={{ padding: '20px 30px', gap: '16px' }}
              >
                <Text className="title">SUMMARY</Text>
                <Label className="event-container__about-content">
                  {eventData.event_title}
                </Label>
                <Label></Label>
                <Text className="title">ABOUT THIS EVENT</Text>
                <Label className="event-container__about-content">
                  <div
                    dangerouslySetInnerHTML={{ __html: eventData.details }}
                  ></div>
                </Label>
              </Flex>
              <Flex
                flexDirection="column"
                style={{ padding: '20px 30px', gap: '48px', maxWidth: '298px' }}
                flex="1"
              >
                <Flex flexDirection="column" style={{ gap: '16px' }}>
                  <Text className="title">DATE AND TIME</Text>
                  <Flex flexDirection="column" style={{ gap: '8px' }}>
                    <span className="date-time">
                      {formatDate(eventData.event_date)}
                      {eventData.starttime} -{/* {eventData.event_date} */}
                    </span>
                    <span className="date-time">
                      {formatDate(eventData.event_date)}
                      {eventData.endtime} {eventData.timezone}
                    </span>
                  </Flex>
                  <div className="calendar-add">
                    <AddToCalendar></AddToCalendar>
                  </div>
                </Flex>

                {eventData.location_type === 'IRL' ? (
                  <Flex flexDirection="column" style={{ gap: '16px' }}>
                    <Text className="title">LOCATION</Text>
                    <Flex
                      flexDirection="column"
                      style={{ gap: '4px' }}
                      className="location"
                    >
                      {/* <span>{JSON.parse(eventData.location).label}</span> */}
                    </Flex>
                    <a
                      className="calendar-add"
                      style={{ background: '#344054' }}
                      target="_blank"
                      href={'https://maps.google.com/?q=' + eventData.location}
                      rel="noreferrer"
                    >
                      <FiMap />
                      view map
                    </a>
                  </Flex>
                ) : (
                  <Flex flexDirection="column" style={{ gap: '16px' }}>
                    <Text className="title">LOCATION</Text>

                    <a
                      target="_blank"
                      style={{ wordBreak: 'break-word', color: 'blue' }}
                      href={eventData.location}
                      rel="noreferrer"
                      className={'virtualLink'}
                    >
                      {eventData.location}
                    </a>
                  </Flex>
                )}
                {/* <Flex flexDirection="column" style={{ gap: '16px' }}>
                <Text className="title">125 GOING</Text>
                <Flex
                  alignItems="center"
                  style={{ gap: '20px', overflowX: 'scroll' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <EventGoing />
                  ))}
                </Flex>
              </Flex> */}
              </Flex>
            </Flex>

            <div className={'commentReply'}>
              {replyId && commentCreatorAvatar != null && (
                <img
                  className={'userImage'}
                  src={commentCreatorAvatar}
                  alt="user_image"
                />
              )}
              {replyId && commentCreatorAvatar == null && (
                <Jazzicon
                  diameter={40}
                  seed={jsNumberForAddress(commentCreatorAddress ?? '')}
                />
              )}

              {!replyId && profileData.avatar != null && (
                <img
                  className={'userImage'}
                  src={profileData.avatar}
                  alt="user_image"
                />
              )}
              {!replyId && profileData.avatar == null && (
                <Jazzicon
                  diameter={40}
                  seed={jsNumberForAddress(profileData.avatar ?? '')}
                />
              )}
              <div className={'userName'}>{replyId ? commentCreator : ''}</div>
              <ExternalInput
                label=""
                value={message}
                type="active"
                placeholder="Add a comment"
                onUserInput={(val) => setMessage(val)}
                noborder={true}
              />
              <div
                className={'replyAction'}
                onClick={
                  () =>
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => onReply(),
                    )
                  // onReply()
                }
              >
                Post
              </div>
            </div>
            {showComment && (
              <div className="detailComments">
                <div className={'commentList'}>
                  <EventCommentCard
                    comments={commentData}
                    depth={0}
                    collectiveID={collectiveInfo.collective_id}
                    setReplyId={setReplyId}
                    onUpdateComments={(newComments, isAdding) => {
                      setCommentData(newComments)
                      if (isAdding) {
                        setEventData({
                          ...eventData,
                          commentscount: Number(eventData.commentscount) + 1,
                        })
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </Flex>
        </EventDetailsWrapper>
      )}
    </>
  )
}
