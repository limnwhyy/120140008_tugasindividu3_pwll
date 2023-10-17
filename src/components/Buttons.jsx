import React from "react";
import * as AiIcon from "react-icons/ai";

export const HireButton = ({ name, actions }) => {
  return (
    <button className="hire" onClick={actions}>
      {name}
    </button>
  );
};

export const SendButton = ({ name, actions, conditions, styles }) => {
  return (
    <button className={styles} onClick={actions} disabled={conditions}>
      {name}
      <AiIcon.AiOutlineSend />
    </button>
  );
};

export const ButtonPlus = ({ name, actions }) => {
  return (
    <button className="plus" onClick={actions}>
      {name}
      <AiIcon.AiOutlinePlus />
    </button>
  );
};

export const ButtonMinus = ({ name, actions }) => {
  return (
    <button className="minus" onClick={actions}>
      {name}
      <AiIcon.AiOutlineMinus />
    </button>
  );
};

export const ResetButton = ({ name, actions }) => {
  return (
    <button className="reset" onClick={actions}>
      {name}
      <AiIcon.AiOutlineReload />
    </button>
  );
};
