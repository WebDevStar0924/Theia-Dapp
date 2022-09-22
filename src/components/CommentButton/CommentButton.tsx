import { CommentIcon } from "components/Svg";
import { CommentButtonWrapper } from "./styles";

interface iProps {
  count: string;
  onClick: (e) => void;
}
export default function CommentButton(props: iProps) {
  const { count, onClick } = props;
  return (
    <CommentButtonWrapper onClick={onClick}>
      <CommentIcon width="20px" fill="#667085" />
      <span>{count} Comments</span>
    </CommentButtonWrapper>
  );
}
