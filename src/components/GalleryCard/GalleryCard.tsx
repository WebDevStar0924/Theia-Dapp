import API from 'api/api'
import { CommentButton } from 'components/CommentButton'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { ShareButton } from 'components/ShareButton'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMembership } from 'hooks/useMembership'
import { useToast } from 'hooks/useToast'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { checkVideoUrl, getDiffTime } from 'utils'

import sampleImg from '../../assets/image/defaultProjectIcon.png'
import { Card, GalleryCardWrapper } from './styles'
interface iProps {
  data: any
  onUpdateGallery: (gallery: any) => void
  onClick: () => void
}

export default function GalleryCardCard(props: iProps) {
  const { data, onUpdateGallery, onClick } = props
  const {
    gallery_id,
    creator,
    createdat,
    favorites,
    favorite_count,
    title,
    commentscount,
    media,
  } = data
  let imageLink = null
  if (media[0]) {
    if (media[0].thumbnail) {
      imageLink = media[0].thumbnail
    } else if (media[0].gateway) {
      imageLink = media[0].gateway
    } else if (media[0].raw) {
      imageLink = media[0].raw
    }
  }
  const { account } = useActiveWeb3React()
  const onMemberShipCheck = useMembership()
  const { cname, ctab } = useParams()
  const { toastSuccess } = useToast()

  const handleLike = (action) => {
    API.updateFavorite(gallery_id, 'gallery', action, account).then(
      (res: any) => {
        if (res.data.success) {
          onUpdateGallery({
            ...data,
            favorites:
              action === 'up' ? Number(favorites) + 1 : Number(favorites) - 1,
            favorite_count: action === 'up' ? 1 : 0,
          })
        }
      },
    )
  }
  return (
    <Card onClick={onClick}>
      <GalleryCardWrapper>
        <div className="galleryCardHeader">
          <Flex style={{ gridGap: '10px' }} alignItems="center">
            <img
              src={creator[0].avatar ?? sampleImg}
              className="creatorAvatar"
              alt={creator[0].name}
            />
            <span className="username">{creator[0].name}</span>
            <span className="userTag">MEMBER</span>
          </Flex>
          <div className="createTime">{getDiffTime(moment(createdat))}</div>
        </div>
        <div className="galleryTitle">{title}</div>
        <div className="galleryImg">
          {imageLink && (
            <>
              {!checkVideoUrl(imageLink) ? (
                <img src={imageLink} alt={title} />
              ) : (
                <video src={imageLink} />
              )}
            </>
          )}
        </div>
        <div className="galleryActions">
          <Flex style={{ gridGap: '20px' }}>
            <HeartButton
              count={favorites}
              onClick={(e) => {
                e.stopPropagation()
                onMemberShipCheck(data.collective_id, account, () =>
                  handleLike(favorite_count > 0 ? 'down' : 'up'),
                )
              }}
              active={favorite_count > 0}
              size={'lg'}
            />
            <CommentButton count={commentscount} />
          </Flex>
          <ShareButton
            onClick={(e) => {
              e.stopPropagation()
              if (typeof window !== 'undefined') {
                const shareLink =
                  window.location.protocol +
                  '//' +
                  window.location.host +
                  `/collective/${cname}/${ctab}/${gallery_id}`
                if ('clipboard' in navigator) {
                  navigator.clipboard.writeText(shareLink.toString())
                } else {
                  document.execCommand('copy', false, `${shareLink.toString()}`)
                }
                toastSuccess('Share link is copied', '')
              }
            }}
          />
        </div>
      </GalleryCardWrapper>
    </Card>
  )
}
