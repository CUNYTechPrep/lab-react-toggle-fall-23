// import React from "react";
import { useState, React } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [currentSelection, setCurrentSelection] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentSelection;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const handleToggle = () => { 
    setCurrentSelection((currentSelection + 1) % props.numBoards);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
