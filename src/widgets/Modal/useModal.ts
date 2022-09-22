import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true
): [(params?: any) => void, Handler] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick } = useContext(Context);
  const onPresentCallback = useCallback(
    (params?: any) => {
      onPresent(modal, params);
    },
    [modal, onPresent]
  );

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
