import React from "react";

const Input = ({ type, placeholder, isUpdate, value }) => {
  return (
    <input
      type={type}
      className="border rounded-md p-2 outline-none bg-transparent"
      placeholder={placeholder}
      defaultValue={isUpdate ? value : ""}
    />
  );
};

export default Input;
