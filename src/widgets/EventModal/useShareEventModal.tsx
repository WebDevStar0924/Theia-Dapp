import { useModal } from "../Modal";
import EventCreateModal from "./EventCreateModal";

const useEventCreateModal = (): {
  onPresentEventCreateModal: (params: any) => void;
} => {
  const [onPresentEventCreateModal] = useModal(<EventCreateModal />);
  return { onPresentEventCreateModal };
};

export { useEventCreateModal };
