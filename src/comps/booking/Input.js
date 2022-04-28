import React from "react";

function Input({
  labelText = "",
  type = "text",
  name = "",
  value = "",
  onChange = null,
  autoFocus = false,
  errorMsg = "",
  animationDelay = "0ms",
}) {
  const inputStyle = {
    animationDelay,
  };
  return (
    <label>
      {labelText}:{" "}
      <input
        type={type}
        autoFocus={autoFocus}
        name={name}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
      <p>{errorMsg}</p>
    </label>
  );
}

export default Input;
