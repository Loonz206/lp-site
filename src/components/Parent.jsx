import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [state, setState] = useState("hello");
  const handleClick = () => {
    return state === "hello" ? setState("boob") : setState("hello");
  };
  return (
    <div>
      <h1>{state}</h1>
      <Child handleClick={handleClick} state={state} />
    </div>
  );
};

export default Parent;
