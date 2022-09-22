import cn from "classnames";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/all";
import { VoteBarWrapper } from "./styles";

interface iProps {
  onVoteUp: (e) => void;
  onVoteDown: (e) => void;
  votes: string;
  votes_count: string;
}
export default function VoteBar(props: iProps) {
  const { votes, votes_count, onVoteDown, onVoteUp } = props;
  return (
    <VoteBarWrapper bgColor="#F9FAFB">
      <div
        className={cn("voteUp", {
          active: parseInt(votes_count) === 1,
        })}
      >
        <HiOutlineChevronUp size={24} onClick={onVoteUp} />
      </div>
      <div className="votes">{votes}</div>
      <div
        className={cn("voteDown", {
          active: parseInt(votes_count) === -1,
        })}
      >
        <HiOutlineChevronDown size={24} onClick={onVoteDown} />
      </div>
    </VoteBarWrapper>
  );
}
