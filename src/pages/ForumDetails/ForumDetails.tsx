import { LinkPreview } from '@dhaiwat10/react-link-preview'
import API from 'api/api'
import { default as classnames } from 'classnames'
import { Card } from 'components/Card'
import { CommentButton } from 'components/CommentButton'
import { CommentCard } from 'components/CommentCard'
import { ExpandableView } from 'components/ExpandableView'
import { Flex } from 'components/Flex'
import {
  Backbutton,
  Card as FCard,
  ForumCardWrapper,
  ForumCommentWrapper,
} from 'components/ForumCard/styles'
import { ImageCard } from 'components/ImageCard/ImageCard'
import { ReadMore } from 'components/ReadMore'
import { ShareButton } from 'components/ShareButton'
import { TextView } from 'components/TextView'
import { VoteBar } from 'components/VoteBar'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useAuth from 'hooks/useAuth'
import { useMembership } from 'hooks/useMembership'
import { useToast } from 'hooks/useToast'
import moment from 'moment'
import { galleryImages } from 'pages/CollectiveDetails/data'
import {
  CollectiveDetailsContainer,
  HomeTabWrapper,
  StackedCarouselWrapper,
} from 'pages/CollectiveDetails/styles'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight, MdArrowBack } from 'react-icons/all'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { useSelector } from 'react-redux'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel'
import { State } from 'state/types'
import { Button } from 'theme-ui'
import { formatBlockchainAddress, getDiffTime } from 'utils'
import { useImagePreviewModal } from 'widgets/ImagePreviewModal'
import { useWalletModal } from 'widgets/WalletModal'
import stackedBg from '../../assets/image/stackedBg.png'

export default function ForumDetails() {
  const { cname, prev_tab, post_id: forum_id } = useParams()

  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { account } = useActiveWeb3React()
  const { login, logout } = useAuth()
  const [commentData, setCommentData] = useState<any[]>([])
  const profileData = useSelector((state: State) => state.profile.data)
  const [commentText, setCommentText] = useState('')
  const [show, setShow] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  const readMoreRef = useRef<any>()
  const onMemberShipCheck = useMembership()
  const [forumData, setForumData] = useState<any>(null)
  const [members, setMembers] = useState<any[]>([])
  const [activeSlideNum, setActiveSlideNum] = useState(0)
  const ref = useRef<any>(null)
  const [pollVotes, updatePollVotes] = useState(forumData?.poll_votes ?? [])
  const [activePollOption, setActivePollOption] = useState<any>(null)
  const { toastSuccess } = useToast()
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined,
  )

  const { onPresentImagePreviewModal } = useImagePreviewModal()

  useEffect(() => {
    if (collectiveInfo) {
      API.getMembers(collectiveInfo.collective_id).then((res) => {
        if (res.data.success) {
          setMembers(res.data.members)
        }
      })
    }
  }, [collectiveInfo])

  useEffect(() => {
    if (account) {
      API.getForumById(forum_id, account).then((res) => {
        setForumData(res.data.forum)
        updatePollVotes(res.data.forum.poll_votes ?? [])
      })
      API.getComments(forum_id, 'forum', account, 'trending').then((res) => {
        setCommentData(res.data.comments)
      })
    }
  }, [account])

  const handleVote = (action) => {
    if (loading) return
    if (account) {
      setLoading(true)
      API.updateVote(forum_id, 'forum', action, account).then((res: any) => {
        if (res.data.success) {
          setForumData({
            ...forumData,
            votes: Number(forumData.votes) + Number(res.data.updateCnt),
            votes_count:
              action === 'up'
                ? forumData.votes_count === 1
                  ? 0
                  : 1
                : forumData.votes_count === -1
                ? 0
                : -1,
          })
          setLoading(false)
        }
      })
    } else {
      onPresentConnectModal()
    }
  }

  const onVotePoll = () => {
    API.voteForumPoll(activePollOption, account, forumData.forum_id).then(
      () => {
        const newPollVotes = pollVotes ? [...pollVotes] : []
        newPollVotes.push({
          forum_poll_id: activePollOption,
          user_address: account,
          forum_id: forumData.forum_id,
        })
        updatePollVotes(newPollVotes)
      },
    )
  }
  const handleReply = () => {
    API.replyComment(forum_id, null, 'forum', commentText, account).then(
      (res: any) => {
        const newComment = res.data.comment
        newComment.subComments = []
        setCommentData([newComment, ...commentData])
        setForumData({
          ...forumData,
          commentscount: Number(forumData.commentscount) + 1,
        })
        setCommentText('')
      },
    )
    setShow(false)
  }

  const setCommentBox = () => {
    if (account) {
      onMemberShipCheck(forumData.collective_id, account, () => setShow(!show))
    } else {
      onPresentConnectModal()
    }
  }

  return (
    <>
      {collectiveInfo && (
        <CollectiveDetailsContainer>
          <div className={'detailsContent'}>
            <HomeTabWrapper>
              <div className="leftPart">
                <Backbutton
                  onClick={() => {
                    navigate(`/collective/${cname}/${prev_tab}`, {
                      replace: false,
                      state: {
                        forum_id,
                      },
                    })
                  }}
                >
                  <MdArrowBack size={30} />
                </Backbutton>
                {forumData && (
                  <>
                    <FCard>
                      <ForumCardWrapper>
                        <VoteBar
                          onVoteUp={() => {
                            onMemberShipCheck(
                              forumData.collective_id,
                              account,
                              () => handleVote('up'),
                            )
                          }}
                          onVoteDown={() => {
                            onMemberShipCheck(
                              forumData.collective_id,
                              account,
                              () => handleVote('down'),
                            )
                          }}
                          votes={forumData.votes}
                          votes_count={forumData.votes_count}
                        />
                        <div className="forum" ref={divRef} tabIndex={0}>
                          <div
                            className="forumCardHeader"
                            onClick={() => {
                              divRef.current?.focus()
                              readMoreRef.current.toggleRead()
                            }}
                          >
                            <Flex
                              style={{ gridGap: '10px' }}
                              alignItems="center"
                            >
                              <img
                                src={forumData.creator[0].avatar}
                                className="creatorAvatar"
                                alt={forumData.creator[0].name}
                              />
                              <span className="username">
                                {forumData.creator[0].name}
                              </span>
                              <span className="userTag">MEMBER</span>
                            </Flex>
                            <div className="createTime">
                              {getDiffTime(moment(forumData.createdat))}
                            </div>
                          </div>

                          <div
                            className="forumTitle"
                            onClick={() => {
                              divRef.current?.focus()
                              readMoreRef.current.toggleRead()
                            }}
                          >
                            {forumData.title}
                          </div>

                          <ReadMore
                            length={400}
                            ref={readMoreRef}
                            itemClick={() => {
                              divRef.current?.focus()
                            }}
                          >
                            {forumData.description}
                          </ReadMore>

                          {forumData.type === 'IMAGE' && forumData.images[0] && (
                            <div
                              onClick={() => {
                                divRef.current?.focus()
                                readMoreRef.current.toggleRead()
                              }}
                              className={`forumImg size-${forumData.images.length}`}
                            >
                              {forumData.images &&
                                forumData.images.map((item, index) => (
                                  <img
                                    src={item}
                                    alt={forumData.title}
                                    className={`img${index}`}
                                    key={`forum_image_${forum_id}_${index}`}
                                    onClick={() => {
                                      onPresentImagePreviewModal(item)
                                    }}
                                  />
                                ))}
                            </div>
                          )}

                          {forumData.type === 'LINK' && (
                            <div className="linkPreview">
                              <LinkPreview
                                url={forumData.url}
                                fetcher={async (url: string) => {
                                  const response = await fetch(
                                    `https://theia-rlp-proxy.herokuapp.com?url=${url}`,
                                  )
                                  const json = await response.json()
                                  const metadata = {
                                    title: '',
                                    description: '',
                                    image: '',
                                    siteName: '',
                                    hostname: '',
                                  }
                                  return {
                                    ...metadata,
                                    ...json.metadata.og,
                                  }
                                }}
                                showLoader={true}
                                fallback={<div>Fallback</div>}
                              />
                            </div>
                          )}
                          {forumData.type === 'POLL' && (
                            <div className="pollView">
                              {pollVotes.filter(
                                (poll_vote) =>
                                  poll_vote.user_address === account,
                              ).length === 0 ? (
                                <>
                                  <div className="pollOptionList">
                                    {forumData.poll_options &&
                                      forumData.poll_options.map(
                                        (item, idx) => (
                                          <label
                                            className="pollOption"
                                            key={`pollOption_${idx}`}
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {item.poll_option}
                                            <input
                                              type="radio"
                                              name="dark-mode"
                                              value={item.poll_option}
                                              id={item.forum_poll_id}
                                              checked={
                                                item.forum_poll_id ===
                                                activePollOption
                                              }
                                              onChange={() => {
                                                setActivePollOption(
                                                  item.forum_poll_id,
                                                )
                                              }}
                                            />
                                            <span className="radioCheckmark"></span>
                                          </label>
                                        ),
                                      )}
                                  </div>
                                  <div className="pollActions">
                                    <Button
                                      className="pollVoteBtn"
                                      onClick={onVotePoll}
                                    >
                                      Vote
                                    </Button>
                                    <div>{pollVotes?.length ?? 0} votes</div>
                                    <div> 16 hours left</div>
                                  </div>
                                </>
                              ) : (
                                <div className="pollOptionList">
                                  {forumData.poll_options &&
                                    forumData.poll_options.map(
                                      (pollOption, idx) => {
                                        const totalVotes =
                                          pollVotes?.length ?? 0
                                        const singleVotes =
                                          pollVotes?.filter(
                                            (poll_vote) =>
                                              poll_vote.forum_poll_id ===
                                              pollOption.forum_poll_id,
                                          ).length ?? 0
                                        return (
                                          <div
                                            className="pollBar"
                                            key={`pollOption_${idx}`}
                                          >
                                            <div
                                              className="pollOptionTitle"
                                              style={{
                                                width: `${Math.floor(
                                                  (singleVotes * 100) /
                                                    totalVotes,
                                                )}%`,
                                              }}
                                            >
                                              {pollOption.poll_option}
                                            </div>
                                            <div className="pollOptionPercent">
                                              {Math.floor(
                                                (singleVotes * 100) /
                                                  totalVotes,
                                              )}{' '}
                                              %
                                            </div>
                                          </div>
                                        )
                                      },
                                    )}
                                </div>
                              )}
                            </div>
                          )}

                          <div className="forumActions">
                            <Flex style={{ gridGap: '20px' }}>
                              <CommentButton
                                count={forumData.commentscount}
                                onClick={setCommentBox}
                              />
                            </Flex>
                            <ShareButton
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  const shareLink = window.location.href
                                  if ('clipboard' in navigator) {
                                    navigator.clipboard.writeText(
                                      shareLink.toString(),
                                    )
                                  } else {
                                    document.execCommand(
                                      'copy',
                                      true,
                                      `${shareLink.toString()}`,
                                    )
                                  }
                                  toastSuccess('Share link is copied', '')
                                }
                              }}
                            />
                          </div>
                        </div>
                      </ForumCardWrapper>
                    </FCard>

                    <div>
                      <ForumCommentWrapper>
                        <div className="forum">
                          <div className="forumCardHeader">
                            <Flex
                              style={{ gridGap: '10px', display: 'flex' }}
                              alignItems="center"
                            >
                              <img
                                src={profileData.avatar ?? ''}
                                className="creatorAvatar"
                                alt={profileData.name}
                              />
                              <span>{profileData.name}</span>
                              <span className="userTag">MEMBER</span>
                            </Flex>
                          </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                          <TextView
                            label={''}
                            value={commentText}
                            rows={4}
                            onUserInput={(val) => {
                              setCommentText(val)
                            }}
                            placeholder={'Comment'}
                          />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'end',
                              marginTop: '30px',
                              gridGap: '24px',
                            }}
                          >
                            <button
                              className="replyBtn"
                              onClick={handleReply}
                              disabled={commentText === ''}
                            >
                              REPLY
                            </button>
                          </div>
                        </div>
                      </ForumCommentWrapper>
                      <CommentCard
                        collectiveID={forumData.collective_id}
                        comments={commentData}
                        depth={0}
                        onUpdateComments={(newComments, isAdding) => {
                          setCommentData(newComments)
                          if (isAdding) {
                          }
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="rightPart">
                <ExpandableView
                  header={<div>ABOUT</div>}
                  content={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: collectiveInfo.details,
                      }}
                    />
                  }
                />
                <Card
                  header={<div>MEMBERS</div>}
                  content={
                    <Flex
                      alignItems={'center'}
                      style={{ gridGap: '20px', paddingBottom: '20px' }}
                      className="horizontalScroll"
                    >
                      {members.map((member, idx) => (
                        <Flex
                          flexDirection={'column'}
                          alignItems="center"
                          style={{ gridGap: '5px' }}
                          key={`user_${idx}`}
                        >
                          {member.creator && member.creator[0].avatar ? (
                            <img
                              className="ellipse80"
                              src={member.creator[0].avatar}
                              alt={member.creator[0].name}
                            />
                          ) : (
                            <Jazzicon
                              diameter={80}
                              seed={jsNumberForAddress(member.member_address)}
                            />
                          )}
                          <div className="userName">
                            {member.creator
                              ? member.creator[0].name
                              : formatBlockchainAddress(
                                  member.member_address,
                                  2,
                                  2,
                                )}
                          </div>
                          <div className="userTag">MEMBER</div>
                        </Flex>
                      ))}
                    </Flex>
                  }
                />
                <StackedCarouselWrapper bg={stackedBg}>
                  <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                      return (
                        <StackedCarousel
                          ref={carouselRef}
                          slideComponent={ImageCard}
                          slideWidth={400}
                          carouselWidth={parentWidth}
                          data={galleryImages}
                          currentVisibleSlide={5}
                          maxVisibleSlide={5}
                          useGrabCursor
                          onActiveSlideChange={(activeSlide) =>
                            setActiveSlideNum(activeSlide)
                          }
                        />
                      )
                    }}
                  />
                  <div className="carouselActions">
                    <div
                      className="moveBtn"
                      onClick={() => {
                        if (ref.current) ref.current.goBack()
                      }}
                    >
                      <BsArrowLeft fill="#999999" />
                    </div>
                    <div className="dots">
                      {galleryImages.map((_, idx) => (
                        <span
                          key={`dot_${idx}`}
                          className={classnames('dot', {
                            active: ref.current && idx === activeSlideNum,
                          })}
                        />
                      ))}
                    </div>
                    <div
                      className="moveBtn"
                      onClick={() => {
                        if (ref.current) {
                          ref?.current.goNext()
                        }
                      }}
                    >
                      <BsArrowRight fill="#999999" />
                    </div>
                  </div>
                </StackedCarouselWrapper>
              </div>
            </HomeTabWrapper>
          </div>
        </CollectiveDetailsContainer>
      )}
    </>
  )
}
