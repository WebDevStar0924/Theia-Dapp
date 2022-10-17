import { useModal } from '../../widgets/Modal'
import GifUploadModal from './index'

const useGifUploadModal = () => {
  const [onPresendGifUploadModal] = useModal(<GifUploadModal />)
  return { onPresendGifUploadModal }
}

export default useGifUploadModal
