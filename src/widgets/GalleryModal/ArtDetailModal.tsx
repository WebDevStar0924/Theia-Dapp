import API from 'api/api'
import ExternalInput from 'components/ExternalInput'
import { Interactions, NFTDetails, PostTop } from 'components/PostCard'
import { useMembership } from 'hooks/useMembership'
import { useToast } from 'hooks/useToast'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from 'state/types'
import { checkVideoUrl, getImageLinkFromMetadata } from 'utils'
import { default as defaultProjectIcon } from '../../assets/image/defaultProjectIcon.png'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { Modal } from '../Modal'
import { Handler } from '../Modal/types'
import GalleryCommentCard from './GalleryCommentCard'
import { ArtDetailContent } from './styles'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

interface iProps {
  params?: any
  onDismiss?: Handler
  collectiveInfo: any
}

export default function ArtDetailModal(props: iProps) {
  const { account } = useActiveWeb3React()
  const { onDismiss, params, collectiveInfo } = props
  const { gallery_id, callback } = params
  const [commentCreator, setCommentCreatorName] = useState('')
  const [commentCreatorAvatar, setCommentCreatorAvatar] = useState('')
  const [commentCreatorAddress, setCommentCreatorAddress] = useState('')
  const [message, setMessage] = useState('')
  const [showComment, setShowComment] = useState(false)
  const [artDetails, setArtDetails] = useState<any>(null)
  const [commentData, setCommentData] = useState<any[]>([])
  const [replyId, setReplyId] = useState<number | null>(null)
  const onMemberShipCheck = useMembership()
  const { toastSuccess } = useToast()
  const profileData = useSelector((state: State) => state.profile.data)

  const onFavourite = () => {
    API.updateFavorite(
      artDetails.gallery_id,
      'gallery',
      artDetails.favorite_count > 0 ? 'down' : 'up',
      account,
    ).then((res) => {
      if (res.data.success) {
        setArtDetails({
          ...artDetails,
          favorite_count: artDetails.favorite_count > 0 ? 0 : 1,
          favorites:
            artDetails.favorite_count > 0
              ? Number(artDetails.favorites) - 1
              : Number(artDetails.favorites) + 1,
        })
      }
    })
  }

  const onComment = () => {
    setShowComment(!showComment)
  }

  const onReply = useCallback(() => {
    if (message === '') {
      return
    }
    API.replyComment(
      artDetails.gallery_id,
      replyId,
      'gallery',
      message,
      account,
    ).then((res) => {
      API.getComments(gallery_id, 'gallery', account, 'trending').then(
        (res) => {
          if (res.data.success) {
            setCommentData(res.data.comments)

            setArtDetails({
              ...artDetails,
              commentscount: Number(artDetails.commentscount) + 1,
            })
            setMessage('')
            setShowComment(true)
            setReplyId(null)
          }
        },
      )
    })
  }, [message])

  useEffect(() => {
    API.getComments(gallery_id, 'gallery', account, 'trending').then((res) => {
      if (res.data.success) {
        setCommentData(res.data.comments)
      }
    })
  }, [])
  useEffect(() => {
    const filterComment = commentData.filter(
      (item) => item.comment_id == replyId,
    )
    setCommentCreatorName(' @' + filterComment[0]?.creator[0]?.username)
    setCommentCreatorAvatar(filterComment[0]?.creator[0]?.avatar)
    setCommentCreatorAddress(filterComment[0]?.creator[0]?.walletaddress)
  }, [replyId])

  useEffect(() => {
    API.getGalleryByID(gallery_id, account).then((res) => {
      if (res.data.success) {
        setArtDetails({
          ...res.data.gallery,
        })
      }
    })
  }, [account])

  const { animationUrl, metadataImage, mediaImage } =
    getImageLinkFromMetadata(artDetails)

  const [imageLink, updateImageLink] = useState(metadataImage)
  useEffect(() => {
    if (!imageLink) {
      updateImageLink(metadataImage)
    }
  }, [metadataImage, mediaImage])

  return (
    <Modal
      title={''}
      onDismiss={() => {
        onDismiss && onDismiss()
        callback && callback()
      }}
      hideCloseButton={true}
      bodyPadding={'0'}
      borderRadius={'16px'}
    >
      {artDetails && (
        <ArtDetailContent>
          <PostTop
            creator={artDetails.creator[0]}
            createdat={artDetails.createdat}
          />
          <div className="content">
            <div className={'detailLeft'}>
              {animationUrl ? (
                <video
                  src={animationUrl}
                  className="artImage"
                  autoPlay
                  muted
                  loop
                  onError={() => updateImageLink(mediaImage)}
                />
              ) : (
                <>
                  {imageLink ? (
                    <>
                      {!checkVideoUrl(imageLink) ? (
                        <img
                          className="artImage"
                          src={imageLink}
                          alt={'art_image'}
                          onError={() => updateImageLink(mediaImage)}
                        />
                      ) : (
                        <video
                          src={imageLink}
                          className="artImage"
                          autoPlay
                          muted
                          loop
                          onError={() => updateImageLink(mediaImage)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <img
                        className="artImage"
                        src={defaultProjectIcon}
                        alt={'art_image'}
                      />
                    </>
                  )}
                </>
              )}
            </div>
            <NFTDetails
              title={artDetails.title ?? ''}
              collectionName={artDetails.contractmetadata?.name ?? ''}
              description={artDetails.description ?? ''}
              contractAddress={artDetails.contract.address}
              tokenId={artDetails.id.tokenId}
            />
          </div>
          <Interactions
            heart={{
              active: artDetails.favorite_count > 0,
              count: artDetails.favorites,
              onClick: () =>
                onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                  onFavourite(),
                ),
            }}
            comment={{
              count: artDetails.commentscount,
              onClick: onComment,
            }}
            bookmark={{
              active: false,
              onClick: () => {},
            }}
            onShare={() => {
              if (typeof window !== 'undefined') {
                const shareLink = window.location.href
                if ('clipboard' in navigator) {
                  navigator.clipboard.writeText(shareLink.toString())
                } else {
                  document.execCommand('copy', false, `${shareLink.toString()}`)
                }

                toastSuccess('Share link is copied', '')
              }
            }}
          />
          <div className={'commentReply'}>
            {replyId && commentCreatorAvatar != null && (
              <img
                className={'userImage'}
                src={commentCreatorAvatar}
                alt="user_image"
              />
            )}
            {replyId && commentCreatorAvatar == null && (
              <Jazzicon
                diameter={40}
                seed={jsNumberForAddress(commentCreatorAddress ?? '')}
              />
            )}

            {!replyId && profileData.avatar != null && (
              <img
                className={'userImage'}
                src={profileData.avatar}
                alt="user_image"
              />
            )}
            {!replyId && profileData.avatar == null && (
              <Jazzicon
                diameter={40}
                seed={jsNumberForAddress(profileData.avatar ?? '')}
              />
            )}
            <div className={'userName'}>{replyId ? commentCreator : ''}</div>
            <ExternalInput
              label=""
              value={message}
              type="active"
              placeholder="Add a comment"
              onUserInput={(val) => setMessage(val)}
              noborder={true}
            />
            <div
              className={'replyAction'}
              onClick={() =>
                onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                  onReply(),
                )
              }
            >
              Post
            </div>
          </div>
          {showComment && (
            <div className="detailComments">
              <div className={'commentList'}>
                <GalleryCommentCard
                  comments={commentData}
                  depth={0}
                  collectiveID={collectiveInfo.collective_id}
                  setReplyId={setReplyId}
                  onUpdateComments={(newComments, isAdding) => {
                    setCommentData(newComments)
                    if (isAdding) {
                      setArtDetails({
                        ...artDetails,
                        commentscount: Number(artDetails.commentscount) + 1,
                      })
                    }
                  }}
                />
              </div>
            </div>
          )}
        </ArtDetailContent>
      )}
    </Modal>
  )
}
