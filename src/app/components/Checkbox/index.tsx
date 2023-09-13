import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";

type CBprops = {
  onChange: (checked: boolean) => void;
  active?: boolean
  children?: React.ReactNode;
};
const Checkbox: React.FC<CBprops> = ({ onChange, active, children }) => {
  const [checked, setChecked] = useState(active);
  const id = v4();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setChecked(checked);
    onChange(checked);
  };

  return (
    <>
      <input
        className="form-check-input me-3 m-0 "
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label mwl " htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default Checkbox;
