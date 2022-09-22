import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { Text } from "components/Text"
import { EventCardModalBodyWrapper, EventCardModalHeaderWrapper } from "./style"
import { Flex } from "components/Flex";
import { FiCalendar } from "react-icons/fi";
import EventImage from "../../assets/image/eventBg.png";
import useAttendEventModal from "../../widgets/AttendEventModal/useAttendEventModal";

interface iProps {
  onDismiss?: Handler;
  params?: {
  }
}

export default function EventCardModal(props: iProps) {
  const { onPresentAttendEventModal } = useAttendEventModal();

  return (
    <Modal
      title={""}
      hideCloseButton={true}
      width={"680px"}
      bodyPadding={"0px 0px"}
      borderRadius={"16px"}
      onDismiss={() => {
        alert();
      }}
    >
      <EventCardModalHeaderWrapper>
        <Flex flexDirection={"row"} alignItems="center">
          <img className="logoImage" src={EventImage} alt="event" />
          <Text className="logoTitle" style={{ marginLeft: "10px" }}>THEIA</Text>
          <Text className="userType" style={{ marginLeft: "10px" }}>Admin</Text>
        </Flex>
      </EventCardModalHeaderWrapper>
      <EventCardModalBodyWrapper>
        <Flex flexDirection={"column"} style={{ gap: "17px", marginTop: "8px" }}>
          <Flex>
            <Text className="placeHolder">PLACE HOLDER</Text>
            <Text className="virtualTag" style={{ marginLeft: "16px" }}>VIRTUAL</Text>
            {/* <Text className="irlTag" style={{ marginLeft: "16px" }}>IRL</Text> */}
          </Flex>
          <Flex alignItems={"center"}>
            <FiCalendar size={22} color="#101828" />
            <Text className="eventDate" style={{ marginLeft: "10px" }}>SEP 16</Text>
            <Text className="eventTime" style={{ marginLeft: "16px" }}>6.00PM - 8.00PM EDT</Text>
          </Flex>
          <Flex>
            <Text className="eventDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex style={{ margin: "24px 40px 0px 40px" }}>
            <img className="eventImage" src={EventImage} alt="event" />
          </Flex>
          <Flex className={"addToCalendarButton"} style={{ margin: "32px 40px 0px 40px" }} onClick={() => onPresentAttendEventModal()}>
            ATTEND
          </Flex>
        </Flex>

      </EventCardModalBodyWrapper>
    </Modal>
  );
}
