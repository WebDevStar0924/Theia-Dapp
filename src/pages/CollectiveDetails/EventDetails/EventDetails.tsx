import ExternalInput from "components/ExternalInput";
import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Label } from "theme-ui";
import EventDetailBg from "../../../assets/image/eventDetailBg.png";
import { FiCalendar, FiMap, } from "react-icons/all";
import EventCommentCard from "./EventCommentCard";
import EventGoing from "./EventGoing";
import { HeartButton } from "components/HeartButton";
import { CommentButton2 } from "components/CommentButton2";
import BookmarkSvg from "../../../assets/svg/bookmark.svg";
import ShareSvg from "../../../assets/svg/share.svg";
import BackArrow from "../../../assets/svg/backarrow.svg";
import { useNavigate } from "react-router-dom";
import { EventDetailsWrapper, BackButtonWrapper } from "./styles";
import useAttendEventModal from "../../../widgets/AttendEventModal/useAttendEventModal";

export default function EventDetails() {
  const navigate = useNavigate();
  const { onPresentAttendEventModal } = useAttendEventModal();

  return (
    <>
      <BackButtonWrapper>
        <div className="backButton" onClick={() => { navigate('/collective/THEIA/events') }}>
          <img src={BackArrow} alt="event" style={{ margin: "auto" }} />
        </div>
      </BackButtonWrapper>
      <EventDetailsWrapper >

        <Flex flexDirection={"column"} >
          <Flex flexDirection="row" style={{ height: "300px", borderBottom: "1px solid #E4E7EC" }}>
            <Flex className={"bannerImage"} flex="2" alignItems="center" justifyContent="center">
              <img src={EventDetailBg} alt="event" style={{ borderTopLeftRadius: "16px" }} />
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              margin="32px 32px 18px 32px"
              flex="1"
            >
              <Flex flexDirection="row" justifyContent="space-between">
                <Text className={"date"} >SEP 16</Text>
                <Flex style={{ gap: "16px" }}>
                  <Flex
                    className={"locationMark"}
                  >
                    <Text className={"locationMarkText"}>IRL</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Text className={"placeHolder"}>PLACEHOLDER</Text>

              <Flex className={"attendButton"} onClick={() => { onPresentAttendEventModal() }}>ATTEND</Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="row" style={{ borderBottom: "1px solid #E4E7EC" }}>
            <Flex
              flexDirection="column"
              alignItems="start"
              flex="2"
              style={{ padding: "20px 30px", gap: "16px" }}
            >
              <Text className="title">SUMMARY</Text>
              <Label className="event-container__about-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Label>
              <Label></Label>
              <Text className="title">ABOUT THIS EVENT</Text>
              <Label className="event-container__about-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
              </Label>
            </Flex>
            <Flex
              flexDirection="column"
              style={{ padding: "20px 30px", gap: "48px", maxWidth: "298px" }}
              flex="1"
            >
              <Flex flexDirection="column" style={{ gap: "16px" }}>
                <Text className="title">DATE AND TIME</Text>
                <Flex flexDirection="column" style={{ gap: "8px" }}>
                  <span className="date-time">
                    Monday, Sep 16, 6:00PM-
                  </span>
                  <span className="date-time">
                    Monday, Sep 16, 8:00PM EDT
                  </span>
                </Flex>
                <div className="calendar-add">
                  <FiCalendar />
                  Add to Calendar
                </div>
              </Flex>

              <Flex flexDirection="column" style={{ gap: "16px" }}>
                <Text className="title">LOCATION</Text>
                <Flex flexDirection="column" style={{ gap: "4px" }} className="location">
                  <span>
                    Metropolitan Pavilion 125 West 18th Street New York, NY 10011
                  </span>
                </Flex>
                <a className="calendar-add" style={{ background: "#344054" }} target="_blank" href="https://maps.google.com/?q=Metropolitan Pavilion 125 West 18th Street New York, NY 10011" rel="noreferrer">
                  <FiMap />
                  view map
                </a>
              </Flex>

              <Flex flexDirection="column" style={{ gap: "16px" }}>
                <Text className="title">125 GOING</Text>
                <Flex
                  alignItems="center"
                  style={{ gap: "20px", overflowX: 'scroll' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
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
            style={{ padding: "22px 22px", borderBottom: "1px solid #E4E7EC" }}
            className="bottom-border-line"
          >
            <Flex flexDirection="row">
              <Flex alignItems="center" style={{ marginRight: '20px' }}>
                <HeartButton
                  active={false}
                  count={"23"}
                  size={"lg"}
                  onClick={() => { }}
                />
              </Flex>
              <Flex alignItems="center">
                <CommentButton2 count={"14"} onClick={() => { }} />
              </Flex>
            </Flex>
            <Flex flexDirection="row">
              <Flex alignItems="center">
                <img
                  className="socialButton"
                  src={BookmarkSvg}
                  alt="bookmark"
                  style={{ marginRight: "20px" }}
                />
                <img
                  className="socialButton"
                  src={ShareSvg}
                  alt="share"
                />
              </Flex>

            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: "20px 24px", borderBottom: "1px solid #E4E7EC" }}
            className="bottom-border-line"
          >
            <EventCommentCard />
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: "20px 24px", borderBottom: "1px solid #E4E7EC" }}
            className="bottom-border-line"
          >
            <EventCommentCard />
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: "10px 24px" }}
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
            <div className={"replyPost"}>Post</div>
          </Flex>
        </Flex>
      </EventDetailsWrapper>
    </>
  );
}
