import { Modal } from "../Modal";
import { Handler } from "../Modal/types";
import { MotionButton } from "../../components/MotionButton/styles";
import { StyledShareArtContent } from "./styles";
import { useWalletModal } from "../WalletModal";
import useAuth from "../../hooks/useAuth";

interface iProps {
  onDismiss?: Handler;
  communityName?: string;
}

export default function ShareArtConnectModal(props: iProps) {
  const { onDismiss, communityName } = props;
  const { login } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, () => {}, undefined);
  const onConnect = () => {
    onDismiss && onDismiss();
    onPresentConnectModal();
  };
  return (
    <Modal
      title={""}
      onDismiss={onDismiss}
      hideCloseButton={true}
      bodyPadding={"0 32px 32px 32px"}
      width={"480px"}
    >
      <StyledShareArtContent>
        <div className={"title"}>Share Your Art</div>
        <div className={"description"}>
          {communityName
            ? `Connect your wallet to be able to share your NFTs with the ${communityName} community.`
            : `Connect your wallet to be able to share your NFTs`}
        </div>
        <div className={"actions"}>
          <MotionButton onClick={onConnect} color={"#fff"} bgColor={"#000"}>
            CONNECT WALLET
          </MotionButton>
        </div>
      </StyledShareArtContent>
    </Modal>
  );
}
