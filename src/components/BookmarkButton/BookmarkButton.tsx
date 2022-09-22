import { FiHeart, FiBookmark } from "react-icons/all";
import { BookmarkWrapper } from "./styles";
import { BookMarkIcon } from "components/Svg";

interface iProps {
  onClick: (e) => void;
}
export default function BookmarkButton(props: iProps) {
  const { onClick } = props;
  return (
    <BookmarkWrapper onClick={onClick}>
      <BookMarkIcon
        width="20px"
        height="20px"
        stroke="#667085"
        stroke-width="1px"
      />
    </BookmarkWrapper>
  );
}
