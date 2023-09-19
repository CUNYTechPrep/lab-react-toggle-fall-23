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
  let boards = [];

  const [currSelection, setCurrSelection] = useState(0);

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currSelection;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const toggleBoard = () => {
    if (currSelection === 4) {
      setCurrSelection(0);
    }

    else {
      setCurrSelection(currSelection + 1);
    }
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoard}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
