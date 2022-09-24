import { Flex } from 'components/Flex'
import * as React from 'react'
import { FiCalendar } from 'react-icons/all'
import EventImage from '../../assets/image/eventBg.png'
import BookmarkSvg from '../../assets/svg/bookmark.svg'
import { Card, EventCardWrapper } from './styles'

export type EventCardProps = {
  onClick?: () => void
  eventData?: any
}

function formatDate(string) {
  return new Date(string).toLocaleDateString()
}
const ForumCard: React.FC<EventCardProps> = ({
  eventData,
  onClick,
}: EventCardProps) => {
  return (
    <Card>
      <EventCardWrapper onClick={onClick}>
        <img className="headerImage" src={EventImage} alt="event" />
        <div className="mainContent">
          <Flex justifyContent="space-between" alignItems="center">
            {eventData?.location_type === 'IRL' ? (
              <span className="irl">{eventData?.location_type}</span>
            ) : (
              <span className="virtual">{eventData?.location_type}</span>
            )}
            <span style={{ marginRight: '10px' }}>
              {/* <BookmarkButton onClick={(e) => {}} /> */}
              <img className="bookmark" src={BookmarkSvg} alt="bookmark" />
            </span>
          </Flex>

          <Flex justifyContent="spapce-between">
            <Flex flexDirection="column" flex="1" style={{ gap: '12px' }}>
              <span className="eventTitle">{eventData?.event_title.toUpperCase()}</span>
              <span className="eventDate">
                {formatDate(eventData.event_date)}
              </span>
              <span className="eventContent">{eventData?.description} </span>
            </Flex>

            <div className="calendarContainer">
              <FiCalendar width={12} height={13} color={'white'} />
            </div>
          </Flex>
        </div>
      </EventCardWrapper>
    </Card>
  )
}

export default ForumCard
