import React from "react";

type BUprops = {
  filter: string;
  changeFilter: Function;
  keyType: string;
};

const Button: React.FC<BUprops> = ({ filter, changeFilter, keyType }) => {
  return (
    <button
      className={filter === keyType ? "btn btn-primary" : "btn btn-light"}
      onClick={() => {
        changeFilter(keyType);
      }}
    >
      {keyType}
    </button>
  );
};

export default Button;
