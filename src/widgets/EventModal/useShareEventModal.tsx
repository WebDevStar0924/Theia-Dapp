import { useModal } from '../Modal'
import EventCreateModal from './EventCreateModal'

const useEventCreateModal = () => {
  const [onPresentEventCreateModal] = useModal(<EventCreateModal />)
  return { onPresentEventCreateModal }
}

export { useEventCreateModal }
