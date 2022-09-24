import { CollectiveInfo } from 'pages/CollectiveDetails/types'
import { useModal } from '../Modal'
import ArtDetailModal from './ArtDetailModal'
import RemoveArtModal from './RemoveArtModal'
import ShareArtConnectModal from './ShareArtConnectModal'
import ShareArtMemberModal from './ShareArtMemberModal'
import ShareArtModal from './ShareArtModal'

const useShareArtConnectModal = (
  communityName?: string,
): {
  onPresentShareArtConnectModal: () => void
} => {
  const [onPresentShareArtConnectModal] = useModal(
    <ShareArtConnectModal communityName={communityName} />,
  )
  return { onPresentShareArtConnectModal }
}

const useShareArtMemberModal = (): {
  onPresentShareArtMemberModal: () => void
} => {
  const [onPresentShareArtMemberModal] = useModal(<ShareArtMemberModal />)
  return { onPresentShareArtMemberModal }
}

const useShareArtModal = (
  sharedNfts: Array<any>,
  onShare: (nfts: Array<any>) => void,
  collectiveInfo?: CollectiveInfo,
): {
  onPresentShareArtModal: () => void
} => {
  const [onPresentShareArtModal] = useModal(
    <ShareArtModal
      collectiveInfo={collectiveInfo}
      sharedNfts={sharedNfts}
      onShare={onShare}
    />,
  )
  return { onPresentShareArtModal }
}

const useRemoveArtModal = (
  nfts: Array<any>,
  onRemove: (nfts: Array<any>) => void,
  collectiveInfo?: CollectiveInfo,
): {
  onPresentRemoveArtModal: () => void
} => {
  const [onPresentRemoveArtModal] = useModal(
    <RemoveArtModal
      collectiveInfo={collectiveInfo}
      nfts={nfts}
      onRemove={onRemove}
    />,
  )
  return { onPresentRemoveArtModal }
}

const useArtDetailModal = (
  collectiveInfo: CollectiveInfo,
): {
  onPresentArtDetailModal: (params: any) => void
} => {
  const [onPresentArtDetailModal] = useModal(
    <ArtDetailModal collectiveInfo={collectiveInfo} />,
  )
  return { onPresentArtDetailModal }
}

export {
  useShareArtConnectModal,
  useShareArtMemberModal,
  useShareArtModal,
  useRemoveArtModal,
  useArtDetailModal,
}
