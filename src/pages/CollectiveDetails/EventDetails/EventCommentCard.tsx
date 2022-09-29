import API from 'api/api'
import { Flex } from 'components/Flex'
import { ReplyIcon } from 'components/Svg'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMembership } from 'hooks/useMembership'
import { useState } from 'react'
import { FiHeart } from 'react-icons/all'
import { ReplyItemWrapper } from './styles'
import { HeartButton } from 'components/HeartButton'
import { checkVideoUrl, getDiffTime } from 'utils'
import moment from 'moment'
interface iProps {
  collectiveID: number | null
  comments: any[]
  depth: number
  onUpdateComments: (newComments: any[], isAdding: boolean) => void
}

export default function EventCommentCard(props: iProps) {
  const { comments, depth, onUpdateComments, collectiveID } = props
  const [showReply, setShowReply] = useState<boolean>(false)
  const { account, chainId } = useActiveWeb3React()
  const [showReplyBox, setShowReplyBox] = useState(false)
  const [replyMsg, setReplyMsg] = useState('')
  const [commentData, setCommentData] = useState<any[]>(comments)
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

  const handleReply = (post_id, parent_id, type, idx) => {
    if (replyMsg === '') return

    API.replyComment(post_id, parent_id, type, replyMsg, account).then(
      (res: any) => {
        if (res.data.success) {
          const newComment = res.data.comment
          newComment.subComments = []
          const newComments = [...comments]
          newComments[idx].subComments.unshift(newComment)
          newComments[idx].count++
          newComments.map((item) => {
            item.subComments.map((sub) => {
              if (sub.comment_id === parent_id) {
                sub.count++
              }
              return sub
            })
            return item
          })
          newComments[idx].show = false
          onUpdateComments(newComments, false)
          setReplyMsg('')
        }
      },
    )
  }

  const showComment = (comment) => {
    comment.show = !comment.show
    comment.showSubComments = true
    setCommentData((_prev) => {
      _prev.forEach((item) => {
        if (item.comment_id === comment.comment_id) Object.assign(item, comment)
      })
      return [..._prev]
    })
  }

  return (
    <>
      {commentData.map((comment, idx) => (
        <ReplyItemWrapper>
          <div className={'replyContent'}>
            <div className={'replyHeader'}>
              <div className={'replyOwner'}>
                {comment.creator[0].avatar ? (
                  <img
                    className={'userImage'}
                    src={comment.creator[0].avatar}
                    alt="user_image"
                  />
                ) : (
                  <div className="userDefaultImage" />
                )}
                <div className={'userName'}>{comment.creator[0].name}</div>
                <span className={'userType memberTag'}>MEMBER</span>
                <span className={'replyTime'}></span>
                <div className="createTime">{getDiffTime(moment(comment.createdat))}</div>
              </div>
              <div
                className={'favouriteAction'}
                onClick={(event) => {
                  // onMemberShipCheck(collectiveID, account, () => {
                  //   event.preventDefault()
                  //   handleFavorite(
                  //     comment.comment_id,
                  //     comment.favorite_count > 0 ? 'down' : 'up',
                  //     idx,
                  //   )
                  // })
                  event.preventDefault()
                  handleFavorite(
                    comment.comment_id,
                    comment.favorite_count > 0 ? 'down' : 'up',
                    idx,
                  )
                }}
              >
                {/* <FiHeart
                  width={'16px'}
                  height={'16px'}
                  fill={comment.favorite_count > 0 ? '#F04438' : '#FFFFFF'}
                  color={comment.favorite_count > 0 ? '#F04438' : '#667085'}
                /> */}
              </div>
            </div>
            <div className={'replyMessage'}>{comment.text}</div>
            {comment.showSubComments && comment.show && (
              <div className={'commentReply subComment'}>
                {comment.creator[0].avatar ? (
                  <img
                    className={'userImage'}
                    src={comment.creator[0].avatar}
                    alt="user_image"
                  />
                ) : (
                  <div className={'userDefaultImage'} />
                )}
                <input
                  className={'commentInput'}
                  value={replyMsg}
                  onChange={(e) => setReplyMsg(e.target.value)}
                />
                <div
                  className={'replyAction'}
                  onClick={() => {
                    // onMemberShipCheck(collectiveID, account, () => {
                    //   handleReply(
                    //     comment.post_id,
                    //     comment.comment_id,
                    //     comment.type,
                    //     idx,
                    //   )
                    // })
                    handleReply(
                      comment.post_id,
                      comment.comment_id,
                      comment.type,
                      idx,
                    )
                  }}
                >
                  Reply
                </div>
              </div>
            )}
            <div className={'replyAction2'}>
              <HeartButton
                active={comment.favorites > 0}
                count={comment.favorites}
                size={'lg'}
                onClick={() => {
                  handleFavorite(
                    comment.comment_id,
                    comment.favorite_count > 0 ? 'down' : 'up',
                    idx,
                  )
                }}
              />
              {/* <div style={{ marginLeft: '8px' }}>{comment.favorites}</div> */}
              <Flex
                alignItems="center"
                onClick={() => {
                  setShowReplyBox(!showReplyBox)
                  comment.showSubComments = !comment.showSubComments
                  const newComments = [...comments]
                  newComments[idx] = comment
                  onUpdateComments(newComments, false)
                  account && chainId && showComment(comment)
                }}
              >
                {/* <ReplyIcon fill={'#667085'} /> */}
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
                {showReply &&
                  comment.subComments.length > 0 &&
                  comment.subComments.map((item) => {
                    return (
                      <div style={{ marginLeft: 30 * (depth + 1) + 'px' }}>
                        <EventCommentCard
                          key={item.comment_id}
                          comments={comment.subComments}
                          onUpdateComments={(newSubevents, isAdding) => {
                            const newComment = { ...comment }
                            newComment.subComments = newSubevents
                            const newComments = [...comments]
                            newComments[idx] = newComment
                            onUpdateComments(newComments, isAdding)
                          }}
                          depth={depth}
                          collectiveID={collectiveID}
                        />
                      </div>
                    )
                  })}
              </>
            )}

          </div>
        </ReplyItemWrapper>
      ))}
    </>
  )
}
