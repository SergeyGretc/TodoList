import React, { ChangeEvent, useState } from "react";

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange"
  > {
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export default Input;
