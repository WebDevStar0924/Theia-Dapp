import { useModal } from '../Modal'
import EventCardModal from './index'

const useEventCardModal = (eventData?: any) => {
  const [onPresentEventCardModal] = useModal(
    <EventCardModal data={eventData} />,
  )
  return { onPresentEventCardModal }
}

export default useEventCardModal
