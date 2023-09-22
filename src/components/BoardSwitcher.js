import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [currentBoard, setCurrentBoard] = useState(0);

  const boardToggle = (event) => {
    setCurrentBoard((currentBoard + 1) % props.numBoards)
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={boardToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;