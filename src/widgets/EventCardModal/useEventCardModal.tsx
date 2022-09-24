import { useModal } from '../Modal'
import EventCardModal from './index'

const useEventCardModal = () => {
  const [onPresentEventCardModal] = useModal(<EventCardModal />)
  return { onPresentEventCardModal }
}

export default useEventCardModal
