import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [currectSelection, setCurrentSelection] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currectSelection;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const handleClick = (event) => {
    if(currectSelection > 3) setCurrentSelection(0);
    else setCurrentSelection(currectSelection + 1);
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button> 
    </div>
  );
}

export default BoardSwitcher;
