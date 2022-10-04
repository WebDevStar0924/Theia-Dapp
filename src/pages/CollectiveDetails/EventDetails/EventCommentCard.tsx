import API from 'api/api'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { PostTop } from 'components/PostCard'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMembership } from 'hooks/useMembership'
import { useState } from 'react'
import { ReplyItemWrapper } from './styles'

interface iProps {
  collectiveID: number | null
  comments: any[]
  depth: number
  onUpdateComments: (newComments: any[], isAdding: boolean) => void
  setReplyId: (commentId: number) => void
}

export default function EventCommentCard(props: iProps) {
  const { comments, depth, onUpdateComments, collectiveID, setReplyId } = props
  const [showReply, setShowReply] = useState<boolean>(false)
  const { account } = useActiveWeb3React()
  const onMemberShipCheck = useMembership()

  const handleFavorite = (comment_id, action, idx) => {
    API.updateFavorite(comment_id, 'comment', action, account).then((res) => {
      if (res.data.success) {
        const newComments = [...comments]
        newComments[idx] = {
          ...newComments[idx],
          favorites:
            action === 'up'
              ? Number(newComments[idx].favorites) + 1
              : Number(newComments[idx].favorites) - 1,
          favorite_count: action === 'up' ? 1 : 0,
        }
        onUpdateComments(newComments, false)
      }
    })
  }

  return (
    <>
      {comments.map((comment, idx) => (
        <ReplyItemWrapper>
          <div className={'replyContent'}>
            <PostTop
              creator={comment.creator[0]}
              createdat={comment.createdat}
            />
            <div className={'replyMessage'}>{comment.text}</div>
            <div className={'replyAction2'}>
              <HeartButton
                count={comment.favorites}
                onClick={(e) => {
                  e.stopPropagation()
                  onMemberShipCheck(collectiveID, account, () =>
                    handleFavorite(
                      comment.comment_id,
                      comment.favorite_count > 0 ? 'down' : 'up',
                      idx,
                    ),
                  )
                }}
                active={comment.favorite_count > 0}
                size={'sm'}
              />
              <Flex
                alignItems="center"
                onClick={() => {
                  setReplyId(comment.comment_id)
                }}
              >
                Reply
              </Flex>
            </div>
            {comment.subComments.length > 0 && (
              <>
                <div
                  className={'replyAction1'}
                  onClick={(event) => {
                    event.preventDefault()
                    setShowReply(!showReply)
                  }}
                >
                  {!showReply ? (
                    <div className="line">
                      <span className={'replyLine'}></span> View replies (
                      {comment.count})
                    </div>
                  ) : (
                    <div className="line">
                      <span className={'replyLine'}></span> Hide replies (
                      {comment.count})
                    </div>
                  )}
                </div>
                {showReply && comment.subComments.length > 0 && (
                  <div style={{ marginLeft: 30 * (depth + 1) + 'px' }}>
                    <EventCommentCard
                      key={comment.comment_id}
                      comments={comment.subComments}
                      onUpdateComments={(newSubcomments, isAdding) => {
                        const newComment = { ...comment }
                        newComment.subComments = newSubcomments
                        const newComments = [...comments]
                        newComments[idx] = newComment
                        onUpdateComments(newComments, isAdding)
                      }}
                      depth={depth}
                      collectiveID={collectiveID}
                      setReplyId={setReplyId}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </ReplyItemWrapper>
      ))}
    </>
  )
}
