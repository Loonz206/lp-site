/* eslint-disable react/prop-types */
import React from "react";

const Child = props => {
  const { state, handleClick } = props;
  return (
    <div>
      <h1 className={state === "hello" ? "active" : "inactive"}>Child</h1>
      <button type="button" onClick={() => handleClick()}>
        Click Me
      </button>
    </div>
  );
};

export default Child;
