import React, { ChangeEvent, FC, HTMLAttributes } from "react";
import { validation } from "../helpers/validation";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  editable?: boolean;
  value: string;
  handleChangeValue: (value: string) => void;
  name: string;
  type?: "number" | "string";
  style?: { [key: string]: string };
}

const Input: FC<InputProps> = ({
  editable = true,
  value,
  handleChangeValue,
  name,
  type = "string",
  style,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let content = e.target.value;
    if (
      (type === "number" && validation.isNumber(content)) ||
      type === "string"
    ) {
      handleChangeValue(content);
    } else {
      handleChangeValue(value);
    }
  };

  return (
    <input
      style={{
        ...style,
        border: "none",
        backgroundColor: "white",
        padding: "1rem",
      }}
      name={name}
      disabled={!editable}
      placeholder="input something"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
