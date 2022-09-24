import ExternalInput from 'components/ExternalInput'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Label } from 'theme-ui'
import EventDetailBg from '../../../assets/image/eventDetailBg.png'
import { FiCalendar, FiMap } from 'react-icons/all'
import EventCommentCard from './EventCommentCard'
import EventGoing from './EventGoing'
import { HeartButton } from 'components/HeartButton'
import { CommentButton2 } from 'components/CommentButton2'
import BookmarkSvg from '../../../assets/svg/bookmark.svg'
import ShareSvg from '../../../assets/svg/share.svg'
import BackArrow from '../../../assets/svg/backarrow.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { EventDetailsWrapper, BackButtonWrapper } from './styles'
import useAttendEventModal from '../../../widgets/AttendEventModal/useAttendEventModal'
import { useEffect, useState } from 'react'
import API from 'api/api'

export default function EventDetails() {
  const navigate = useNavigate()
  const { event_id } = useParams()
  const [eventData, setEventData] = useState<any>()
  const { onPresentAttendEventModal } = useAttendEventModal(eventData)

  function formatDate(string) {
    const data = new Date(string).toDateString();
    const array = data.split(" ");
    const returnDate = array[0] + ', ' + array[1] + ', ' + array[2] + ', ';
    return returnDate
  }
  function getMonth(string) {
    const data = new Date(string).toDateString();
    const array = data.split(" ");
    const returnDate = array[1] + ' ' + array[2];
    return returnDate
  }
  // function getMonth(string) {
  //   const convert = new Date(string).toLocaleDateString().split("/");
  //   return convert
  // }
  useEffect(() => {
    API.getEventById(event_id).then((res) => {
      setEventData(res.data.event)
    })
  }, [event_id])

  return (
    <>

      <EventDetailsWrapper>
        <BackButtonWrapper>
          <div
            className="backButton"
            onClick={() => {
              navigate('/collective/THEIA/events')
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
              <img
                src={EventDetailBg}
                alt="event"
                style={{ borderTopLeftRadius: '16px' }}
              />
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              margin="32px 32px 18px 32px"
              flex="1"
            >
              <Flex flexDirection="row" justifyContent="space-between">
                <Text className={'date'}>{getMonth(eventData?.event_date).toUpperCase()}</Text>
                {eventData?.location_type === 'IRL' ? (
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
              <Text className={'placeHolder'}>{eventData?.event_title.toUpperCase()}</Text>

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
                {eventData?.description}
              </Label>
              <Label></Label>
              <Text className="title">ABOUT THIS EVENT</Text>
              <Label className="event-container__about-content">
                {eventData?.details}
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
                    {formatDate(eventData?.event_date)}{eventData?.starttime} -
                    {/* {eventData?.event_date} */}
                  </span>
                  <span className="date-time">
                    {formatDate(eventData?.event_date)}{eventData?.endtime} {eventData?.timezone}
                  </span>
                </Flex>
                <div className="calendar-add">
                  <FiCalendar />
                  Add to Calendar
                </div>
              </Flex>

              <Flex flexDirection="column" style={{ gap: '16px' }}>
                <Text className="title">LOCATION</Text>
                <Flex
                  flexDirection="column"
                  style={{ gap: '4px' }}
                  className="location"
                >
                  <span>{eventData?.location}</span>
                </Flex>
                <a
                  className="calendar-add"
                  style={{ background: '#344054' }}
                  target="_blank"
                  href={'https://maps.google.com/?q=' + eventData?.location}
                  rel="noreferrer"
                >
                  <FiMap />
                  view map
                </a>
              </Flex>

              <Flex flexDirection="column" style={{ gap: '16px' }}>
                <Text className="title">125 GOING</Text>
                <Flex
                  alignItems="center"
                  style={{ gap: '20px', overflowX: 'scroll' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <EventGoing />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '22px 22px', borderBottom: '1px solid #E4E7EC' }}
            className="bottom-border-line"
          >
            <Flex flexDirection="row">
              <Flex alignItems="center" style={{ marginRight: '20px' }}>
                <HeartButton
                  active={false}
                  count={'23'}
                  size={'lg'}
                  onClick={() => { }}
                />
              </Flex>
              <Flex alignItems="center">
                <CommentButton2 count={'14'} onClick={() => { }} />
              </Flex>
            </Flex>
            <Flex flexDirection="row">
              <Flex alignItems="center">
                <img
                  className="socialButton"
                  src={BookmarkSvg}
                  alt="bookmark"
                  style={{ marginRight: '20px' }}
                />
                <img className="socialButton" src={ShareSvg} alt="share" />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '20px 24px', borderBottom: '1px solid #E4E7EC' }}
            className="bottom-border-line"
          >
            <EventCommentCard />
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '20px 24px', borderBottom: '1px solid #E4E7EC' }}
            className="bottom-border-line"
          >
            <EventCommentCard />
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '10px 24px' }}
          >
            <div className="event-container__user-default-image" />
            <ExternalInput
              label=""
              value=""
              type="active"
              placeholder="Add a comment..."
              noborder={true}
              fontSize="14px"
              fontColor="#98A2B3"
            />
            <div className={'replyPost'}>Post</div>
          </Flex>
        </Flex>
      </EventDetailsWrapper>
    </>
  )
}
