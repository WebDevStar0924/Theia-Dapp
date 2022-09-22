import { Comment2Icon } from "components/Svg";
import { CommentButton2Wrapper } from "./styles";

interface iProps {
  count: string;
  onClick: (e) => void;
}
export default function CommentButton(props: iProps) {
  const { count, onClick } = props;
  return (
    <CommentButton2Wrapper onClick={onClick}>
      <Comment2Icon width="18px" height="18px" stroke="#667085" />
      <span>{count}</span>
    </CommentButton2Wrapper>
  );
}
