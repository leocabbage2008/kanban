import React from "react";
import Col from ".././Col";

export default function Grid({ content }) {
  const [blocks, setBlocks] = React.useState([
    ["foo", "bar"],
    ["foo", "bar"],
    ["foo", "bar"],
    ["foo", "bar"],
  ]);

  function subHandler(index) {
    const input = prompt();
    if (input.replaceAll(" ", "")) {
      const dup = blocks;
      dup[index].push(input);
      setBlocks([...dup]);
    }
  }
  function nextHandler(index, v) {
    const dup = blocks;
    dup[index].splice(dup[index].indexOf(v), 1);
    dup[index + 1].push(v);
    setBlocks([...dup]);
  }
  function prevHandler(index, v) {
    const dup = blocks;
    dup[index].splice(dup[index].indexOf(v), 1);
    dup[index - 1].push(v);
    setBlocks([...dup]);
  }

  return (
    <div className="grid">
      {content.map((obj) => {
        const index = content.indexOf(obj);
        return (
          <Col
            headerText={obj}
            content={blocks[index]}
            key={index}
            index={index}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            subHandler={() => subHandler(index, blocks[index])}
          />
        );
      })}
    </div>
  );
}
