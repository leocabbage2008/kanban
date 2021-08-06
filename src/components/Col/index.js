import React from "react";
import Block from ".././Block";

export default function Col({
  headerText,
  content,
  index,
  nextHandler,
  prevHandler,
  subHandler,
}) {
  return (
    <div className="col">
      <div className="header">{headerText}</div>
      {content.map((text) => {
        return (
          <Block
            text={text}
            index={index}
            key={Math.random()}
            nextHandler={() => nextHandler(index, text)}
            prevHandler={() => prevHandler(index, text)}
          />
        );
      })}
      <button className="add" onClick={subHandler}>
        + Add a card
      </button>
    </div>
  );
}
