import { useModal } from '../Modal'
import AttendEventModal from './index'

const useAttendEventModal = (eventData?: any) => {
  const [onPresentAttendEventModal] = useModal(<AttendEventModal eventData={eventData} />)
  return { onPresentAttendEventModal }
}


export default useAttendEventModal
