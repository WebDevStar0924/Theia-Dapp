import { useModal } from "../Modal";
import AttendEventModal from "./index";

const useAttendEventModal = () => {
  const [onPresentAttendEventModal] = useModal(
    <AttendEventModal />
  );
  return { onPresentAttendEventModal };
};

export default useAttendEventModal;
