import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { FiCalendar } from 'react-icons/fi'
import EventImage from '../../assets/image/eventBg.png'
import { Modal } from '../Modal'
import { AttendEventModalWrapper } from './style'
interface iProps {
  eventData?: any
}
export default function AttendEventModal(props: iProps) {
  const { eventData } = props;
  function getMonth(string) {
    const data = new Date(string).toDateString();
    const array = data.split(" ");
    const returnDate = array[1] + ' ' + array[2];
    return returnDate
  }
  return (
    <Modal
      title={''}
      hideCloseButton={true}
      bodyPadding={'32px 40px'}
      width={'680px'}
      borderRadius={'16px'}
      onDismiss={() => {
        alert()
      }}
    >
      <AttendEventModalWrapper>
        <Flex>
          <Text className={'modalTitle'}>YOU'RE GOING</Text>
        </Flex>

        <Flex
          flexDirection={'column'}
          style={{ gap: '17px', marginTop: '40px' }}
        >
          <Flex style={{ alignItems: "center" }}>
            <Text className="placeHolder">{eventData?.event_title.toUpperCase()}</Text>
            {eventData?.location_type === 'VIRTUAL' ? (
              <Text className="virtualTag" style={{ marginLeft: '16px' }}>
                VIRTUAL
              </Text>) : (
              <Text className="irlTag" style={{ marginLeft: "16px" }}>IRL</Text>
            )}
          </Flex>
          <Flex alignItems={'center'}>
            <FiCalendar size={22} color="#101828" />
            <Text className="eventDate" style={{ marginLeft: '10px' }}>
              {getMonth(eventData?.event_date).toUpperCase()}
            </Text>
            <Text className="eventTime" style={{ marginLeft: '16px' }}>
              {eventData?.starttime} - {eventData?.endtime} {eventData?.timezone}
            </Text>
          </Flex>
          <Flex>
            <Text className="eventDescription">
              {eventData?.description}
            </Text>
          </Flex>
          <Flex style={{ marginTop: '24px' }}>
            <img className="eventImage" src={EventImage} alt="event" />
          </Flex>
          <Flex className={'addToCalendarButton'} style={{ marginTop: '32px' }}>
            ADD TO CALENDAR
          </Flex>
        </Flex>
      </AttendEventModalWrapper>
    </Modal>
  )
}
