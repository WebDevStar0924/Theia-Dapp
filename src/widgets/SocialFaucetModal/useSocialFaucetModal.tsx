import { useModal } from "../Modal";
import SocialFaucetModal from "./index";

const useSocialFaucetModal = (onCallback) => {
  const [onPresentSocialFaucetModal] = useModal(
    <SocialFaucetModal onCallback={onCallback} />
  );
  return { onPresentSocialFaucetModal };
};
export default useSocialFaucetModal;
