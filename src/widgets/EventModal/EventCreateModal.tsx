import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CloseButton } from "components/CloseButton";
import { Flex } from "components/Flex";
import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { TabtWrapper, ModalHeaderWrapper } from "./styles";
import EventDetailPage from "./EventDetailPage";
import EventBasicPage from "./EventBasicPage";
interface iProps {
  onDismiss?: Handler;
}

export default function EventCreateModal(props: iProps) {
  const { onDismiss } = props;
  const [isBasic, setBasic] = useState<boolean>(true);

  return (
    <Modal
      title={""}
      hideCloseButton={true}
      bodyPadding={"21px 32px 40px 60px"}
      width={"856px"}
      borderRadius={"16px"}
      onDismiss={() => {
        alert();
      }}
    >
      <Flex justifyContent="flex-end">
        <CloseButton
          onClick={() => {
            onDismiss && onDismiss();
          }}
        />
      </Flex>
      <ModalHeaderWrapper>
        <Flex flexDirection="column" style={{ gap: "4px" }}>
          <div className="title">CREATE EVENT</div>
          <p className="description">
            Share an upcoming event with your community.
          </p>
        </Flex>
      </ModalHeaderWrapper>
      <Flex justifyContent="center" style={{ marginTop: "32px", gap: "80px" }}>
        <TabtWrapper active={isBasic} onClick={() => setBasic(true)}>
          <p className="title">BASIC INFO</p>
          <div className="bottomBar"></div>
        </TabtWrapper>

        <TabtWrapper active={!isBasic} onClick={() => setBasic(false)}>
          <p className="title">DETAILS</p>
          <div className="bottomBar"></div>
        </TabtWrapper>
      </Flex>

      {isBasic ? (
        <EventBasicPage></EventBasicPage>
      ) : (
        <EventDetailPage></EventDetailPage>
      )}
      {/* <ModalFooterWrapper>
        <Flex justifyContent="center" style={{ marginTop: "60px" }}>
          <div
            className="saveButton"
          >
            SAVE
          </div>
        </Flex>
      </ModalFooterWrapper> */}
    </Modal>
  );
}
