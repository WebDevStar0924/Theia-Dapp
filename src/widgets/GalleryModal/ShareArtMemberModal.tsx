import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { StyledBecomeMemberContent } from "./styles";
import { ReactComponent as LockIcon } from "../../assets/svg/lock.svg";
import { CloseModal } from "components/Svg";
import { useParams } from "react-router-dom";

interface iProps {
  onDismiss?: Handler;
}

export default function ShareArtMemberModal(props: iProps) {
  const { onDismiss } = props;
  const { cname } = useParams();
  const onBecomeMember = () => {
    window.open("https://opensea.io/collection/theia-genesis", "_blank");
    onDismiss && onDismiss();
  };
  return (
    <Modal
      title={""}
      onDismiss={onDismiss}
      hideCloseButton={true}
      bodyPadding={"32px"}
      bgColor={"rgba(255, 255, 255, 0.9)"}
      width={"737px"}
    >
      <StyledBecomeMemberContent>
        <div
          className="close"
          onClick={() => {
            onDismiss && onDismiss();
          }}
        >
          <CloseModal width="35px" />
        </div>
        <div className={"title"}>
          <LockIcon className="lockIcon" />
        </div>
        <div className={"description"}>
          You must own the {cname} NFT to use this feature.
        </div>
        <div className={"actions"}>
          <div onClick={onBecomeMember} className={"actionBtn"}>
            BECOME A MEMBER
          </div>
        </div>
      </StyledBecomeMemberContent>
    </Modal>
  );
}
