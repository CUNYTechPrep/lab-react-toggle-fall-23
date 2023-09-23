import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  const [currentBoard, setCurrentBoard] = useState(0);

  const handleToggle = (event) => {
    if(currentBoard >= props.numBoards - 1) {
      setCurrentBoard(0);
    }
    else {
      setCurrentBoard(currentBoard + 1);
    }
    
  }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentBoard;
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
