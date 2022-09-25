import { useModal } from '../Modal'
import EventCreateModal from './EventCreateModal'

const useEventCreateModal = (callback): {
  onPresentEventCreateModal: (params: any) => void
} => {
  const [onPresentEventCreateModal] = useModal(<EventCreateModal callback={callback} />)
  return { onPresentEventCreateModal }
}

export { useEventCreateModal }
