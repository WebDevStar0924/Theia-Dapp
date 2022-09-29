import API from 'api/api'
import { useMembership } from 'hooks/useMembership'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { checkVideoUrl, getImageLinkFromMetadata } from 'utils'
import defaultProjectIcon from '../../../assets/image/defaultProjectIcon.png'
import { FavouriteIcon } from '../../../components/Svg'
import useActiveWeb3React from '../../../hooks/useActiveWeb3React'
import {
  useArtDetailModal,
  useRemoveArtModal,
  useShareArtModal,
} from '../../../widgets/GalleryModal/useShareArtModal'
import { GalleryWrapper } from '../styles'

interface ArtItemProps {
  art: any
  onClick: () => void
  onFavourite: () => void
}

function ArtItem(props: ArtItemProps) {
  const { art, onClick, onFavourite } = props

  const { animationUrl, metadataImage, mediaImage } =
    getImageLinkFromMetadata(art)
  const [imageLink, updateImageLink] = useState(metadataImage)
  return (
    <div className="artItem">
      <div onClick={onClick}>
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
      <div className="artInfo">
        <div className="artLabels">
          <div className="artName">{art.metadata?.name ?? ''}</div>
        </div>
        <div className="artFavourite" onClick={onFavourite}>
          <FavouriteIcon className="favoriteIcon" />
          {art.crown}
        </div>
      </div>
    </div>
  )
}

export default function GalleryTab() {
  const { galleries, setGalleries, collectiveInfo } =
    useOutletContext<CollectiveContextProps>()
  const { account, chainId } = useActiveWeb3React()
  const onMemberShipCheck = useMembership()
  const { cname, post_id } = useParams()
  const { onPresentArtDetailModal } = useArtDetailModal(collectiveInfo)

  const [sharedNfts, setSharedNfts] = useState<any[]>(galleries)
  const navigate = useNavigate()

  const onShare = (shared: any[]) => {
    setSharedNfts([...sharedNfts, ...shared])
    setGalleries([...sharedNfts, ...shared])
  }
  const onRemove = (removed: any[]) => {
    const shared = sharedNfts.filter(
      (nft) => !removed.find((item) => item.id.tokenId === nft.id.tokenId),
    )
    setSharedNfts(shared)
    setGalleries(shared)
  }

  const { onPresentShareArtModal } = useShareArtModal(
    sharedNfts,
    onShare,
    collectiveInfo,
  )
  const { onPresentRemoveArtModal } = useRemoveArtModal(
    sharedNfts.filter((item) => item.owneraddress === account),
    onRemove,
    collectiveInfo,
  )

  const onShareArt = () => {
    onPresentShareArtModal()
  }

  const onRemoveArt = () => {
    onPresentRemoveArtModal()
  }

  const onClickArt = (art: any) => {
    if (account && chainId) {
      navigate(`/collective/${collectiveInfo.name}/gallery/${art.gallery_id}`)
    }
  }

  const onFavouriteArt = (art: any) => {
    //TODO
    API.updateCrown(
      art.gallery_id,
      'gallery',
      Number(art.crown_count) > 0 ? 'down' : 'up',
      account,
    ).then(() => {
      const nNfts = sharedNfts.map((nft) => {
        if (nft.gallery_id === art.gallery_id) {
          return {
            ...nft,
            crown:
              Number(nft.crown_count) > 0
                ? Number(nft.crown) - 1
                : Number(nft.crown) + 1,
            crown_count: Number(nft.crown_count) > 0 ? '0' : '1',
          }
        }
        return nft
      })
      setSharedNfts(nNfts)
    })
  }

  useEffect(() => {
    if (post_id && collectiveInfo) {
      onPresentArtDetailModal({
        gallery_id: post_id,
        callback: () => navigate(`/collective/${cname}/gallery`),
      })
    }
  }, [post_id, collectiveInfo])

  return (
    <GalleryWrapper>
      <div
        className="shareBtn"
        onClick={() => {
          onMemberShipCheck(collectiveInfo.collective_id, account, () =>
            onShareArt(),
          )
        }}
      >
        SHARE YOUR ART
      </div>
      {sharedNfts.length > 0 && (
        <div
          className="removeBtn"
          onClick={() => {
            onMemberShipCheck(collectiveInfo.collective_id, account, () =>
              onRemoveArt(),
            )
          }}
        >
          REMOVE
        </div>
      )}
      <div className="artList">
        {sharedNfts.map((art, index) => (
          <ArtItem
            key={index}
            art={art}
            onClick={() => onClickArt(art)}
            onFavourite={() => {
              onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                onFavouriteArt(art),
              )
            }}
          />
        ))}
      </div>
    </GalleryWrapper>
  )
}
