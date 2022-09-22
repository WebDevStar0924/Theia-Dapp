import { useModal } from "widgets/Modal";
import CreateForumModal from "./CreateForumModal";

const useForumModal = () => {
  const [onPresentForumModal] = useModal(<CreateForumModal />);
  return { onPresentForumModal };
};

export default useForumModal;
