import cn from 'classnames'
import { VoteDown, VoteUp } from 'components/Svg'
import { VoteBarWrapper } from './styles'

interface iProps {
  onVoteUp: (e) => void
  onVoteDown: (e) => void
  votes: string
  votes_count: string
}
export default function VoteBar(props: iProps) {
  const { votes, votes_count, onVoteDown, onVoteUp } = props
  return (
    <VoteBarWrapper bgColor="#F9FAFB">
      <div
        className={cn('voteUp', {
          active: parseInt(votes_count) === 1,
        })}
      >
        <VoteUp width={32} onClick={onVoteUp} />
      </div>
      <div className="votes">{votes}</div>
      <div
        className={cn('voteDown', {
          active: parseInt(votes_count) === -1,
        })}
      >
        <VoteDown width={32} onClick={onVoteDown} />
      </div>
    </VoteBarWrapper>
  )
}
