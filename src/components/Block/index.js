import React from "react";

export default function Block({ nextHandler, prevHandler, text, index }) {
  let next = true;
  let prev = true;
  if (index === 0) {
    prev = false;
  } else if (index === 3) {
    next = false;
  }
  let className = "block ";
  if (next) className += "next";
  if (prev) className += "prev";
  return (
    <div className={className}>
      {prev ? <button onClick={prevHandler}>Prev</button> : ""}
      {text}
      {next ? <button onClick={nextHandler}>Next</button> : ""}
    </div>
  );
}
