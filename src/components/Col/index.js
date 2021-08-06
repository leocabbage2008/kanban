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
  const [cont, setCont] = React.useState(content);
  return (
    <div className="col">
      <div className="header">{headerText}</div>
      {cont.map((text) => {
        const i = cont.indexOf(text);
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
