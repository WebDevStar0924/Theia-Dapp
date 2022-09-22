import { FiSend } from "react-icons/all";
import { ShareButtonWrapper } from "./styles";

interface iProps {
  onClick: (e) => void;
}
export default function ShareButton(props: iProps) {
  const { onClick } = props;
  return (
    <ShareButtonWrapper onClick={onClick}>
      <FiSend size={16} />
      <span>Share</span>
    </ShareButtonWrapper>
  );
}
