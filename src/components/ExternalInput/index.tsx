import { StyledWrapper } from "./styles";
import { externalInputProps } from "./types";

export default function ExternalInput(
  props: externalInputProps & React.HTMLAttributes<HTMLDivElement>
) {
  const {
    label,
    value,
    onUserInput,
    startIcon,
    endIcon,
    placeholder,
    errorMsg,
    type,
    onClick,
    inputType = "text",
    ...rest
  } = props;

  return (
    <StyledWrapper
      props={props}
      className={props.className ?? ""}
      onClick={onClick}
      onFocus={rest.onFocus}
      onBlur={rest.onBlur}
    >
      {label && <div className={"label"}>{label}</div>}
      <div className={`inputWrapper`}>
        {startIcon && startIcon}
        <input
          value={value}
          placeholder={placeholder}
          type={inputType}
          onChange={(e) => {
            onUserInput && onUserInput(e.target.value);
          }}
          disabled={type === "disabled"}
        />
        {endIcon && endIcon}
      </div>
      {errorMsg && <div className={"errorMsg"}>{errorMsg}</div>}
    </StyledWrapper>
  );
}
