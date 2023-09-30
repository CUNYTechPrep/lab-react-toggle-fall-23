import React, { useState } from "react";

function Board(props) {
  const increment = () => {
    props.setTracker(props.index);
  };

  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className} onClick={increment}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [tracker, setTracker] = useState(0);

  const toggleBoard = () => {
    setTracker((tracker + 1) % props.numBoards);
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === tracker;
    boards.push(<Board index={ii} selected={isSelected} key={ii} setTracker={setTracker} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoard}>Toggle</button>
      <div>Count: {tracker + 1}</div>
    </div>
  );
}

export default BoardSwitcher;
