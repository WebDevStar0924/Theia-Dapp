import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { Text } from "components/Text"
import { AttendEventModalWrapper } from "./style"
import { Flex } from "components/Flex";
import { FiCalendar } from "react-icons/fi";
import EventImage from "../../assets/image/eventBg.png";

interface iProps {
  onDismiss?: Handler;
  params?: {
  }
}

export default function AttendEventModal(props: iProps) {
  return (
    <Modal
      title={""}
      hideCloseButton={true}
      bodyPadding={"32px 40px"}
      width={"680px"}
      borderRadius={"16px"}
      onDismiss={() => {
        alert();
      }}
    >
      <AttendEventModalWrapper>
        <Flex>
          <Text className={"modalTitle"}>YOU'RE GOING</Text>
        </Flex>

        <Flex flexDirection={"column"} style={{ gap: "17px", marginTop: "40px" }}>
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
          <Flex style={{ marginTop: "24px" }}>
            <img className="eventImage" src={EventImage} alt="event" />
          </Flex>
          <Flex className={"addToCalendarButton"} style={{ marginTop: "32px" }}>
            ADD TO CALENDAR
          </Flex>
        </Flex>

      </AttendEventModalWrapper>
    </Modal>
  );
}
