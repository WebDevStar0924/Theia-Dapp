import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { FiCalendar } from 'react-icons/fi'
import EventImage from '../../assets/image/eventBg.png'
import { Modal } from '../Modal'
import { AttendEventModalWrapper } from './style'
import { Handler } from 'widgets/Modal/types'
import { atcb_init } from 'add-to-calendar-button'
import 'add-to-calendar-button/assets/css/atcb.css'
import React from 'react'
interface iProps {
  eventData?: any
  onDismiss?: Handler
}
export default function AttendEventModal(props: iProps) {
  const { eventData } = props
  function getMonth(string) {
    const data = new Date(string).toDateString()
    const array = data.split(' ')
    const returnDate = array[1] + ' ' + array[2]
    return returnDate
  }
  const AddToCalendar = () => {
    React.useEffect(atcb_init, [])
    let location = ''
    try {
      location = JSON.parse(eventData?.location).label
    } catch {
      location = eventData?.location
    }
    return (
      <div className="atcb">
        {'{'}
        "name":"{eventData?.event_title}", "description":"
        {eventData?.description}", "startDate":"{eventData?.event_date}",
        "endDate":"{eventData?.event_date}", "startTime":"{eventData?.starttime}
        ", "endTime":"{eventData?.endtime}", "location":"{location}",
        "label":"ADD TO CALENDAR", "options":[ "Google", "iCal", "Microsoft365",
        "Outlook.com", "Yahoo" ],
        {/* "timeZone":"{eventData?.timezone}", */}
        "iCalFileName":"Reminder-Event", "trigger": "click"
        {'}'}
      </div>
    )
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
          style={{ gap: '17px', marginTop: '20px' }}
        >
          <Flex style={{ alignItems: 'center' }}>
            <Text className="placeHolder">
              {eventData?.event_title.toUpperCase()}
            </Text>
            {eventData?.location_type === 'VIRTUAL' ? (
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
              {getMonth(eventData?.event_date).toUpperCase()}
            </Text>
            <Text className="eventTime" style={{ marginLeft: '16px' }}>
              {eventData?.starttime} - {eventData?.endtime}{' '}
              {eventData?.timezone}
            </Text>
          </Flex>
          <Flex>
            <Text className="eventDescription">{eventData?.description}</Text>
          </Flex>
          <Flex style={{ marginTop: '24px' }}>
            {eventData?.event_image !== null ? (
              <img
                className="eventImage"
                src={eventData?.event_image}
                alt="event"
                style={{
                  borderTopLeftRadius: '16px',
                  width: '600px',
                  height: '300px',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <img className="eventImage" src={EventImage} alt="event" />
            )}
          </Flex>
          <Flex className={'addToCalendarButton'} style={{ marginTop: '32px' }}>
            <AddToCalendar />
          </Flex>
        </Flex>
      </AttendEventModalWrapper>
    </Modal>
  )
}
