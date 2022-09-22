import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { MotionButton } from "../../components/MotionButton/styles";
import { StyledInviteContent } from "./styles";
import CheckmarkCircleIcon from "../../components/Svg/Icons/CheckmarkCircle";
import EventEmitter from "../../utils/EventEmitter";

interface iProps {
  onDismiss?: Handler;
  params?: {
    name: string;
    email: string;
    twitter: string;
    invite: boolean;
  };
}

export default function InviteModal(props: iProps) {
  const { onDismiss, params } = props;
  const onInvite = () => {
    //ToDo: call api to send invitation to email

    EventEmitter.emit("inviteNewProject", {
      ...params,
    });
    onDismiss && onDismiss();
  };
  return (
    <Modal
      title={""}
      onDismiss={onDismiss}
      hideCloseButton={true}
      width={"400px"}
    >
      <StyledInviteContent>
        <CheckmarkCircleIcon width={"40px"} />
        <div className={"title"}>Confirm Invite</div>
        <div className={"description"}>
          An email will be sent to {params?.email} and we will notify{" "}
          {params?.twitter} via a Twitter post from our company account.
        </div>

        <div className={"actions"}>
          <MotionButton onClick={onDismiss} color={"##344054"} bgColor={"#fff"}>
            CANCEL
          </MotionButton>
          <MotionButton onClick={onInvite} color={"#fff"} bgColor={"#6172F3"}>
            CONFIRM
          </MotionButton>
        </div>
      </StyledInviteContent>
    </Modal>
  );
}
