import { useModal } from "../Modal";
import ConvertModal from "./index";

const useConvertModal = (projectID: string, cfAddr: string) => {
  const [onPresentConvertModal] = useModal(
    <ConvertModal cfAddr={cfAddr} projectID={projectID} />
  );
  return { onPresentConvertModal };
};

export default useConvertModal;
