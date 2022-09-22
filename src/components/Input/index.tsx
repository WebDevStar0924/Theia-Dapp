import { StyledInputWrapper } from "./styles";
import { StyledInput } from "../CurrencyInputPanel/NumericalInput";

export default function Input({ value, onUserInput, placeholder, ...rest }) {
  return (
    <StyledInputWrapper {...rest}>
      <StyledInput
        {...rest}
        value={value}
        onChange={(event) => {
          // replace commas with periods, because we exclusively uses period as the decimal separator
          onUserInput(event.target.value);
        }}
        autoComplete="off"
        autoCorrect="off"
        type="text"
        placeholder={placeholder}
        spellCheck="false"
        fontSize="16px"
      />
    </StyledInputWrapper>
  );
}
