import { Flex } from "components/Flex";
import * as React from "react";
import { FiCalendar } from "react-icons/all";
import EventImage from "../../assets/image/eventBg.png";
import BookmarkSvg from "../../assets/svg/bookmark.svg";
import { Card, EventCardWrapper } from "./styles";

export type EventCardProps = {
  onClick?: () => void;
};

const ForumCard: React.FC<EventCardProps> = ({ onClick }: EventCardProps) => {
  return (
    <Card>
      <EventCardWrapper onClick={onClick}>
        <img className="headerImage" src={EventImage} alt="event" />
        <div className="mainContent">
          <Flex justifyContent="space-between" alignItems="center">
            <span className="virtual">IRL</span>
            <span style={{ marginRight: "10px" }}>
              {/* <BookmarkButton onClick={(e) => {}} /> */}
              <img className="bookmark" src={BookmarkSvg} alt="bookmark" />
            </span>
          </Flex>

          <Flex justifyContent="spapce-between">
            <Flex flexDirection="column" flex="1" style={{ gap: "12px" }}>
              <span className="eventTitle">PLACEHOLDER</span>
              <span className="eventDate">Monday, Sep 16, 6:00PM</span>
              <span className="eventContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </span>
            </Flex>

            <div className="calendarContainer">
              <FiCalendar width={12} height={13} color={"white"} />
            </div>
          </Flex>
        </div>
      </EventCardWrapper>
    </Card>
  );
};

export default ForumCard;
