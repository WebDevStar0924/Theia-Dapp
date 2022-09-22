import React, { createContext, useState, ReactElement } from "react";
import styled from "styled-components";
import Overlay from "../../components/Overlay/Overlay";
import { Handler } from "./types";

interface ModalsContext {
  onPresent: (node: React.ReactNode, params: any, key?: string) => void;
  onDismiss: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;

export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [modalNode, setModalNode] = useState<React.ReactNode[]>([]);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const [modalParams, setModalParams] = useState<any[]>([]);

  const handlePresent = (node: React.ReactNode, params?: any) => {
    setModalNode([...modalNode, node]);
    setModalParams([...modalParams, params]);
  };

  const handleDismiss = () => {
    modalNode.splice(modalNode.length - 1, 1);
    setModalNode([...modalNode]);
    modalParams.splice(modalParams.length - 1, 1);
    setModalParams([...modalParams]);
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      const params = modalParams[modalParams.length - 1];
      if (params) {
        const { callback } = params;
        if (callback) {
          callback();
        }
      }
      handleDismiss();
    }
  };

  return (
    <Context.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {modalNode.map((node, index) => (
        <ModalWrapper key={`modal_${index}`}>
          <Overlay show onClick={handleOverlayDismiss} />
          {React.isValidElement(node) &&
            React.cloneElement(node as ReactElement<any>, {
              params: modalParams[index],
              onDismiss: handleDismiss,
            })}
        </ModalWrapper>
      ))}
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
