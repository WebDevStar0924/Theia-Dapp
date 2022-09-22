import React from "react";
import getExternalLinkProps from "../../utils/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({
  startIcon,
  endIcon,
  children,
  external,
  isLoading,
  disabled,
  fontFamily,
  color,
  ...props
}) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton
      {...internalProps}
      {...props}
      isLoading={isLoading}
      disabled={isDisabled}
      fontFamily={fontFamily}
      color={color}
    >
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon as React.ReactElement<any>, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon as React.ReactElement<any>, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};

export default Button;
