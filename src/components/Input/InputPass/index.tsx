import { forwardRef, ForwardedRef, useState } from "react";
import { IInputProps } from "../@types";
import { InputPassStyle } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputPass = forwardRef(
  (
    { id, label, errors, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [typeInput, setTypeInput] = useState("password");

    const changeType = () => {
      if (typeInput === "password") {
        setTypeInput("text");
      } else {
        setTypeInput("password");
      }
    };

    return (
      <InputPassStyle>
        <label htmlFor={id}>{label}</label>
        <div>
          <input id={id} type={typeInput} {...rest} ref={ref} />
          <button type="button" onClick={changeType}>
            {typeInput === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <span>{errors}</span>
      </InputPassStyle>
    );
  }
);

export default InputPass;
