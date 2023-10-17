import React from "react";

export const TextInput = ({ value, onChange, name, id, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      required
    />
  );
};

export const EmailInput = ({ value, onChange, name, id, placeholder }) => {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      required
    />
  );
};

export const TextAreaInput = ({ value, onChange, name, id, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      required
    />
  );
};
