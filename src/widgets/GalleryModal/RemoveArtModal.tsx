import API from 'api/api'
import { CollectiveInfo } from 'pages/CollectiveDetails/types'
import { useState } from 'react'
import { checkVideoUrl, getImageLinkFromMetadata } from 'utils'
import defaultProjectIcon from '../../assets/image/defaultProjectIcon.png'
import { IconButton } from '../../components/Button'
import { MotionButton } from '../../components/MotionButton/styles'
import { CloseIcon } from '../../components/Svg'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { useToast } from '../../hooks/useToast'
import { Modal } from '../Modal'
import { Handler } from '../Modal/types'
import { StyledShareArtContent } from './styles'

interface iProps {
  onDismiss?: Handler
  collectiveInfo?: CollectiveInfo
  nfts: any[]
  onRemove: (nfts: any[]) => any
}

interface ArtItemProps {
  art: any
  checked: boolean
  onClick: () => void
}

function ArtItem(props: ArtItemProps) {
  const { art, checked, onClick } = props
  const { animationUrl, metadataImage, mediaImage } =
    getImageLinkFromMetadata(art)
  const [imageLink, updateImageLink] = useState(metadataImage)

  return (
    <div className="artItem" onClick={onClick}>
      {animationUrl ? (
        <video
          src={animationUrl}
          className={checked ? 'removedArtImage' : 'artImage'}
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
                  className={checked ? 'removedArtImage' : 'artImage'}
                  src={imageLink}
                  alt={'art_image'}
                  onError={() => {
                    updateImageLink(mediaImage)
                  }}
                />
              ) : (
                <video
                  src={imageLink}
                  className={checked ? 'removedArtImage' : 'artImage'}
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
                className={checked ? 'removedArtImage' : 'artImage'}
                src={defaultProjectIcon}
                alt={'art_image'}
              />
            </>
          )}
        </>
      )}
      <div className={checked ? 'artRemoved' : 'artNoneCheck'}>
        {checked && <CloseIcon width="24px" color="primary" fill={'#fff'} />}
      </div>
    </div>
  )
}

export default function RemoveArtModal(props: iProps) {
  const { onDismiss, nfts, onRemove } = props
  const { account } = useActiveWeb3React()
  const { toastError } = useToast()
  const [selectedNftIds, setSelectedNftIds] = useState<Array<string>>([])

  const onClickArt = (nft) => {
    const nftId = nft.id.tokenId
    if (selectedNftIds.includes(nftId)) {
      setSelectedNftIds(selectedNftIds.filter((id) => id !== nftId))
    } else {
      setSelectedNftIds([...selectedNftIds, nftId])
    }
  }

  const onConfirm = async () => {
    const selectedNfts = nfts?.filter((nft) =>
      selectedNftIds.includes(nft.id.tokenId),
    )
    if (account && selectedNfts && selectedNfts.length > 0) {
      try {
        API.removeGalleries(selectedNfts.map((item) => item.gallery_id))
        onRemove(selectedNfts)
        onDismiss && onDismiss()
      } catch (e) {
        toastError('Error', 'Failed to remove nfts. try again!')
      }
    }
  }

  return (
    <Modal
      title={''}
      onDismiss={onDismiss}
      hideCloseButton={true}
      bodyPadding={'28px 32px'}
      width={'990px'}
    >
      <StyledShareArtContent>
        <div className={'title'}>Remove Your Art</div>
        <div className={'description'}>
          Choose the NFTs you would like to stop sharing with all users.
        </div>
        <div className="artList">
          {nfts.map((nft, index) => (
            <ArtItem
              key={index}
              art={nft}
              checked={selectedNftIds.includes(nft.id.tokenId)}
              onClick={() => onClickArt(nft)}
            />
          ))}
        </div>
        <div className={'actions'}>
          <MotionButton
            onClick={onConfirm}
            color={'#FFFFFF'}
            bgColor={'#3538CD'}
            disabled={selectedNftIds.length === 0}
          >
            CONFIRM
          </MotionButton>
        </div>
        <IconButton
          variant="text"
          onClick={onDismiss}
          aria-label="Close the dialog"
          className={'closeBtn'}
        >
          <CloseIcon color="primary" fill={'#101828'} />
        </IconButton>
      </StyledShareArtContent>
    </Modal>
  )
}
