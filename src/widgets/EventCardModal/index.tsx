import { CommentButton2 } from 'components/CommentButton2'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { Text } from 'components/Text'
import { FiCalendar } from 'react-icons/fi'
import EventImage from '../../assets/image/eventBg.png'
import BookmarkSvg from '../../assets/svg/bookmark.svg'
import ShareSvg from '../../assets/svg/share.svg'
import useAttendEventModal from '../AttendEventModal/useAttendEventModal'
import {
  EventCardModalBodyWrapper, EventCardModalHeaderWrapper, EventCardWrapper
} from './style'

export default function EventCardModal() {
  const { onPresentAttendEventModal } = useAttendEventModal()
  return (
    <EventCardWrapper>
      <EventCardModalHeaderWrapper>
        <Flex flexDirection={'row'} alignItems="center">
          <img className="logoImage" src={EventImage} alt="event" />
          <Text className="logoTitle" style={{ marginLeft: '10px' }}>
            THEIA
          </Text>
          <Text className="userType" style={{ marginLeft: '10px' }}>
            Admin
          </Text>
        </Flex>
      </EventCardModalHeaderWrapper>
      <EventCardModalBodyWrapper>
        <Flex flexDirection={'column'} style={{ gap: '21px' }}>
          <Flex>
            <Text className="placeHolder">PLACE HOLDER</Text>
            <Text className="virtualTag" style={{ marginLeft: '16px' }}>
              VIRTUAL
            </Text>
            {/* <Text className="irlTag" style={{ marginLeft: "16px" }}>IRL</Text> */}
          </Flex>
          <Flex alignItems={'center'}>
            <FiCalendar size={22} color="#101828" />
            <Text className="eventDate" style={{ marginLeft: '10px' }}>
              SEP 16
            </Text>
            <Text className="eventTime" style={{ marginLeft: '16px' }}>
              6.00PM - 8.00PM EDT
            </Text>
          </Flex>
          <Flex>
            <Text className="eventDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex style={{ margin: '0px 40px 0px 40px' }}>
            <img className="eventImage" src={EventImage} alt="event" />
          </Flex>
          <Flex
            className={'attendButton'}
            style={{ margin: '0px 40px 0px 40px' }}
            onClick={() => {
              onPresentAttendEventModal()
            }}
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
      </EventCardModalBodyWrapper>
    </EventCardWrapper>
  )
}
