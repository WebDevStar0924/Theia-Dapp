import React, { useContext } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  bgColor?: string;
  width?: string;
  borderRadius?:string;
  onHandleDismiss ?: () => void;
}

const StyledModal = styled.div<{
  bgColor?: string;
  width?: string;
  borderRadius?: string;
}>`
  background: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.modal.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "8px")};
  width: 100%;
  max-height: 90vh;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  position: relative;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: ${({ width }) => (width ? width : "auto")};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 48px 8px 48px;
  font-weight: 700;

  .closeBtn {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "48px",
  borderRadius = "8px",
  bgColor,
  width,  
}) => {
  const { isDark } = useContext(ThemeContext);
  const onHandleDismiss = () => onDismiss;
  return (
    <StyledModal bgColor={bgColor} width={width} borderRadius={borderRadius}>
      {title !== "" && (
        <ModalHeader>
          <ModalTitle>
            {onBack && (
              <IconButton
                variant="text"
                onClick={onBack}
                area-label="go back"
                mr="8px"
              >
                <ArrowBackIcon
                  color="primary"
                  fill={isDark ? "#FFFFFF" : "#101828"}
                />
              </IconButton>
            )}
            <Heading as={"div"}>{title}</Heading>
          </ModalTitle>
          {!hideCloseButton && (
            <IconButton
              variant="text"
              onClick={onDismiss}
              aria-label="Close the dialog"
              className={"closeBtn"}
            >
              <CloseIcon
                color="primary"
                fill={isDark ? "#FFFFFF" : "#101828"}
              />
            </IconButton>
          )}
           
        </ModalHeader>
      )}
      <Flex flexDirection="column" p={bodyPadding}>
        {children}
      </Flex>
    </StyledModal>
  );
};

Modal.defaultProps = {
  hideCloseButton: false,
  onBack: undefined,
  bodyPadding: "0 48px 48px",
};

export default Modal;
