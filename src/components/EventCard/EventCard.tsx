import 'add-to-calendar-button/assets/css/atcb.css'
import API from 'api/api'
import { Flex } from 'components/Flex'
import SaveButton from 'components/SaveButton/SaveButton'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import * as React from 'react'
import { FiCalendar } from 'react-icons/all'
import EventImage from '../../assets/image/eventBg.png'
import { EventCardWrapper } from './styles'
// import { atcb_init } from 'add-to-calendar-button';

export type EventCardProps = {
  data: any
  onClick?: () => void
  onUpdateEvent: (event: any) => void
  eventData?: any
  sort: string
}

function formatDate(string) {
  return new Date(string).toLocaleDateString()
}

const ForumCard: React.FC<EventCardProps> = ({
  data,
  eventData,
  onUpdateEvent,
  onClick,
}: EventCardProps) => {
  const { event_id, is_saved } = data
  const { account } = useActiveWeb3React()
  const handleSaveItem = () => {
    const savedData = Number(is_saved) === 1 ? 0 : 1
    API.updateSaveItem('event', event_id, account, savedData).then(() => {
      onUpdateEvent({
        ...data,
        is_saved: Number(is_saved) === 1 ? 0 : 1,
      })
    })
  }
  return (
    <EventCardWrapper onClick={onClick}>
      {eventData?.event_image !== null ? (
        <img className="headerImage" src={eventData?.event_image} alt="event" />
      ) : (
        <img className="headerImage" src={EventImage} alt="event" />
      )}
      <div className="mainContent">
        <Flex justifyContent="space-between" alignItems="center">
          {eventData?.location_type === 'IRL' ? (
            <span className="irl">{eventData?.location_type}</span>
          ) : (
            <span className="virtual">{eventData?.location_type}</span>
          )}
          <span style={{ marginRight: '10px' }}>
            {/* <BookmarkButton onClick={(e) => {}} /> */}
            <SaveButton
              onClick={(e) => {
                e.stopPropagation()
                handleSaveItem()
              }}
              isSaved={Number(is_saved) > 0}
            />
          </span>
        </Flex>

        <Flex justifyContent="spapce-between">
          <Flex flexDirection="column" flex="1" style={{ gap: '12px' }}>
            <span className="eventTitle">
              {eventData?.event_title.toUpperCase()}
            </span>
            <span className="eventDate">
              {formatDate(eventData?.event_date)}
            </span>
            <span className="eventContent">{eventData?.description} </span>
          </Flex>

          <div className="calendarContainer" id="add-to-calendar">
            <FiCalendar width={12} height={13} color={'white'} />
            {/* <AddToCalendar ></AddToCalendar> */}
          </div>
        </Flex>
      </div>
    </EventCardWrapper>
  )
}

export default ForumCard
