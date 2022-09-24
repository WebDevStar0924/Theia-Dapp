import API from 'api/api'
import { useLoadNFTs } from 'hooks/useLoadNFTs'
import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { useSelector } from 'react-redux'
import { State } from 'state/types'
import { checkVideoUrl, getImageLinkFromMetadata } from 'utils'
import defaultProjectIcon from '../../assets/image/defaultProjectIcon.png'
import { IconButton } from '../../components/Button'
import { MotionButton } from '../../components/MotionButton/styles'
import { CloseIcon, SpinnerIcon } from '../../components/Svg'
import Checkmark from '../../components/Svg/Icons/Checkmark'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { useToast } from '../../hooks/useToast'
import { Modal } from '../Modal'
import { Handler } from '../Modal/types'
import { StyledShareArtContent } from './styles'

interface iProps {
  onDismiss?: Handler
  collectiveInfo?: any
  sharedNfts: any[]
  onShare: (nfts: any[]) => any
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

      <div className={checked ? 'artChecked' : 'artNoneCheck'}>
        {checked && <Checkmark width={'20px'} fill={'#fff'} />}
      </div>
    </div>
  )
}

export default function ShareArtModal(props: iProps) {
  const { onDismiss, collectiveInfo, sharedNfts, onShare } = props
  const { account } = useActiveWeb3React()
  const { toastError } = useToast()
  const [selectedNftIds, setSelectedNftIds] = useState<Array<string>>([])
  const profileData = useSelector((state: State) => state.profile.data)
  const sharedIds = sharedNfts.map(
    (item) => `${item.contract.address}_${parseInt(item.id.tokenId, 16)}`,
  )

  const { loading, items, hasNextPage, error, loadMore } = useLoadNFTs()

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage: hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  })

  const onClickArt = (nft) => {
    const nftId = `${nft.contract.address}_${parseInt(nft.id.tokenId, 16)}`
    if (selectedNftIds.includes(nftId)) {
      setSelectedNftIds(selectedNftIds.filter((id) => id !== nftId))
    } else {
      setSelectedNftIds([...selectedNftIds, nftId])
    }
  }

  const onConfirm = async () => {
    const selectedNfts = items?.filter((item) =>
      selectedNftIds.includes(
        `${item.contract.address}_${parseInt(item.id.tokenId, 16)}`,
      ),
    )
    if (account && selectedNfts && selectedNfts.length > 0) {
      try {
        const addRes = await API.addGalleries(
          collectiveInfo?.collective_id,
          selectedNfts,
          account,
        )
        const galleryIds = addRes.data.galleryIds
        onShare(
          selectedNfts.filter((item, idx) => {
            item.gallery_id = galleryIds[idx]
            item.owneraddress = account
            item.crown_count = 0
            item.crown = 0
            item.favorite_count = 0
            item.favorite = 0
            item.commentscount = 0
            item.creator = [profileData]
            item.collective_id = collectiveInfo?.collective_id
            return item
          }),
        )
        onDismiss && onDismiss()
      } catch (e) {
        toastError('Error', 'Failed to share nfts. try again!')
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
        <div className={'title'}>Share Your Art</div>
        <div className={'description'}>
          {collectiveInfo
            ? `Choose the NFTs you would like to share with
                    the ${collectiveInfo?.name} community.`
            : `Choose the NFTs you would like to share with all users.`}
        </div>
        <div className="artList" ref={rootRef}>
          {items
            .filter(
              (item) =>
                !sharedIds.includes(
                  `${item.contract.address}_${parseInt(item.id.tokenId, 16)}`,
                ),
            )
            .map((nft, index) => (
              <ArtItem
                key={index}
                art={nft}
                checked={selectedNftIds.includes(
                  `${nft.contract.address}_${parseInt(nft.id.tokenId, 16)}`,
                )}
                onClick={() => onClickArt(nft)}
              />
            ))}
          {hasNextPage && <div ref={sentryRef}>loading</div>}
        </div>
        <div className={'actions'}>
          <MotionButton
            onClick={onConfirm}
            color={'#FFFFFF'}
            bgColor={'#3538CD'}
            disabled={selectedNftIds.length === 0}
          >
            {loading ? <SpinnerIcon className={'loading-icon'} /> : 'CONFIRM'}
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
