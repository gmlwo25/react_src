import React, { useReducer } from "react";
import { useState } from "react";

const reducer = (checked) => !checked;
function Checkbox() {
  const [checked, dispatch] = useReducer(reducer, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={dispatch} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default function Usereducer03() {
  return <Checkbox />;
}
