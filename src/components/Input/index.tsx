import { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "./@types";
import { InputStyle } from "./style";

const Input = forwardRef(
  (
    { id, label, errors, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputStyle>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
        <span>{errors}</span>
      </InputStyle>
    );
  }
);

export default Input;
