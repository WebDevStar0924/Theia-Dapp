import API from 'api/api'
import { CommentButton } from 'components/CommentButton'
import ExternalInput from 'components/ExternalInput'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { ShareButton } from 'components/ShareButton'
import { WineButton } from 'components/WineButton'
import { useMembership } from 'hooks/useMembership'
import { useToast } from 'hooks/useToast'
import moment from 'moment'
import { useCallback, useEffect, useState } from 'react'
import { checkVideoUrl, getDiffTime, getImageLinkFromMetadata } from 'utils'
import {
  default as defaultProjectIcon,
  default as sampleImg,
} from '../../assets/image/defaultProjectIcon.png'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { goToOpenSea, goToScan } from '../../utils/ethers'
import { Modal } from '../Modal'
import { Handler } from '../Modal/types'
import GalleryCommentCard from './GalleryCommentCard'
import { ArtDetailContent } from './styles'

interface iProps {
  params?: any
  onDismiss?: Handler
  collectiveInfo: any
}

export default function ArtDetailModal(props: iProps) {
  const { chainId, account } = useActiveWeb3React()
  const { onDismiss, params, collectiveInfo } = props
  const { gallery_id, callback } = params
  const [hideDetail, setHideDetail] = useState(false)
  const [message, setMessage] = useState('')
  const [showComment, setShowComment] = useState(true)
  const [artDetails, setArtDetails] = useState<any>(null)
  const [commentData, setCommentData] = useState<any[]>([])
  const onMemberShipCheck = useMembership()
  const { toastSuccess } = useToast()

  // TODO replace owner
  const owner = {
    name: 'saltakira',
    image: null,
    type: 'Admin',
    id: 'saltakira',
    address: '0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7',
  }

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

  const onRecommend = () => {
    API.updateCrown(
      artDetails.gallery_id,
      'gallery',
      artDetails.crown_count > 0 ? 'down' : 'up',
      account,
    ).then((res) => {
      if (res.data.success) {
        setArtDetails({
          ...artDetails,
          crown_count: artDetails.crown_count > 0 ? 0 : 1,
          crown:
            artDetails.crown_count > 0
              ? Number(artDetails.crown) - 1
              : Number(artDetails.crown) + 1,
        })
      }
    })
  }

  const onToggleHideDetail = () => {
    setHideDetail(!hideDetail)
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
      null,
      'gallery',
      message,
      account,
    ).then((res) => {
      const newComment = res.data.comment
      newComment.subComments = []
      const newComments = [...commentData]
      newComments.unshift(newComment)
      setCommentData(newComments)
      setArtDetails({
        ...artDetails,
        commentscount: Number(artDetails.commentscount) + 1,
      })
      setMessage('')
      setShowComment(true)
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
          <div className="galleryDetailHeader">
            <Flex style={{ gridGap: '10px' }} alignItems="center">
              <img
                src={artDetails.creator[0].avatar ?? sampleImg}
                className="creatorAvatar"
                alt={artDetails.creator[0].name}
              />
              <span className="username">{artDetails.creator[0].name}</span>
              <span className="userTag">MEMBER</span>
            </Flex>
            <div className="createTime">
              {getDiffTime(moment(artDetails.createdat))}
            </div>
          </div>
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
            <div className={'detailRight'}>
              <div className={'name'}>{artDetails.title ?? ''}</div>
              <div className={'description'}>
                {artDetails.contractmetadata?.name ?? ''}
              </div>
              <div className={'artDescription'}>
                {artDetails.description ?? ''}
              </div>
              <div className={'dContent'}>
                <div className={'dLabel'}>CREATOR</div>
                <div className={'dText'}>
                  0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7
                </div>
              </div>
              {hideDetail && (
                <>
                  <div className={'dContent'}>
                    <div className={'dLabel'}>CONTRACT ADDRESS</div>
                    <div
                      className={'dText detailLink'}
                      onClick={() =>
                        goToScan(chainId, artDetails.contract.address, 'token')
                      }
                    >
                      {artDetails.contract.address ?? '-'}
                    </div>
                  </div>
                  <div className={'dContent'}>
                    <div className={'dLabel'}>TOKEN ID</div>
                    <div className={'dText'}>
                      {parseInt(artDetails.id.tokenId, 16) ?? '-'}
                    </div>
                  </div>
                  <div className={'dContent'}>
                    <div
                      className={'dLabel detailLink'}
                      onClick={() =>
                        goToOpenSea(
                          chainId,
                          artDetails.contract.address,
                          parseInt(artDetails.id.tokenId, 16),
                        )
                      }
                    >
                      MORE INFO
                    </div>
                  </div>
                </>
              )}
              <div className={'dContent'}>
                {!hideDetail ? (
                  <div
                    className={'dLabel detailAction'}
                    onClick={() => onToggleHideDetail()}
                  >
                    SHOW DETAILS
                  </div>
                ) : (
                  <div
                    className={'dLabel detailAction'}
                    onClick={() => onToggleHideDetail()}
                  >
                    HIDE DETAILS
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className={'dActions'}>
              <Flex style={{ gridGap: '20px' }}>
                <HeartButton
                  active={artDetails.favorite_count > 0}
                  count={artDetails.favorites}
                  size={'sm'}
                  onClick={() => {
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => onFavourite(),
                    )
                  }}
                />
                <WineButton
                  active={artDetails.crown_count > 0}
                  count={artDetails.crown}
                  size="sm"
                  onClick={() => {
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => onRecommend(),
                    )
                  }}
                />
                <CommentButton
                  count={artDetails.commentscount}
                  onClick={onComment}
                />
              </Flex>
              <ShareButton
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const shareLink = window.location.href
                    if ('clipboard' in navigator) {
                      navigator.clipboard.writeText(shareLink.toString())
                    } else {
                      document.execCommand(
                        'copy',
                        false,
                        `${shareLink.toString()}`,
                      )
                    }

                    toastSuccess('Share link is copied', '')
                  }
                }}
              />
            </div>
            {!showComment && (
              <div className={'commentReply'}>
                {owner.image ? (
                  <img
                    className={'userImage'}
                    src={owner.image}
                    alt="user_image"
                  />
                ) : (
                  <div className={'userDefaultImage'} />
                )}
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
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => onReply(),
                    )
                  }
                >
                  Post
                </div>
              </div>
            )}
            {showComment && (
              <div
                className={
                  'detailComments' + (commentData.length ? '' : 'noneComments')
                }
              >
                <div className={'commentList'}>
                  <GalleryCommentCard
                    comments={commentData}
                    depth={0}
                    collectiveID={collectiveInfo.collective_id}
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
                <div className={'commentReply'}>
                  {owner.image ? (
                    <img
                      className={'userImage'}
                      src={owner.image}
                      alt="user_image"
                    />
                  ) : (
                    <div className={'userDefaultImage'} />
                  )}
                  <ExternalInput
                    label=""
                    value={message}
                    type="active"
                    placeholder="Add a comment"
                    onUserInput={(val) => setMessage(val)}
                  />
                  <div
                    className={'replyAction'}
                    onClick={() =>
                      onMemberShipCheck(
                        collectiveInfo.collective_id,
                        account,
                        () => onReply(),
                      )
                    }
                  >
                    Post
                  </div>
                </div>
              </div>
            )}
          </div>
        </ArtDetailContent>
      )}
    </Modal>
  )
}
