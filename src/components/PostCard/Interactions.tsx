import { CommentButton } from 'components/CommentButton'
import { HeartButton } from 'components/HeartButton'
import Row, { RowFixed } from 'components/Layout/Row'
import { SaveButton } from 'components/SaveButton'
import { ShareButton } from 'components/ShareButton'

interface iProps {
  heart: {
    active: boolean
    count: string
    onClick: () => void
  }
  comment: {
    count: string
    onClick: () => void
  }
  bookmark: {
    active: boolean
    onClick: () => void
  }
  onShare: () => void
}
export default function Interactions(props: iProps) {
  const { heart, comment, bookmark, onShare } = props
  return (
    <Row padding="20px 24px" justify="space-between">
      <RowFixed style={{ gap: '20px' }}>
        <HeartButton
          size="md"
          active={heart.active}
          count={heart.count}
          onClick={heart.onClick}
        />
        <CommentButton count={comment.count} onClick={comment.onClick} />
      </RowFixed>
      <RowFixed style={{ gap: '20px' }}>
        <SaveButton isSaved={bookmark.active} onClick={bookmark.onClick} />
        <ShareButton onClick={onShare} />
      </RowFixed>
    </Row>
  )
}
