import { useModal } from "../Modal";
import ImagePreviewModal from "./ImagePreviewModal";

const useImagePreviewModal = () => {
  const [onPresentImagePreviewModal] = useModal(<ImagePreviewModal />, true);
  return { onPresentImagePreviewModal };
};

export default useImagePreviewModal;
