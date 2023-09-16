import React from "react";
import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [boardSelected, setBoardSelected] = useState(0);

  function handleToggle() {
    if (boardSelected == props.numBoards - 1) {
      setBoardSelected(boardSelected - (props.numBoards - 1));
    } else {
      setBoardSelected(boardSelected + 1);
    }
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === boardSelected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
