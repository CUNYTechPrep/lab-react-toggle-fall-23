import React, { useState } from "react";


function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {

  const [activeBoardIndex, setActiveBoardIndex] = useState(0);
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === activeBoardIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const handleToggleClick = () => {
    setActiveBoardIndex((prevIndex) => (prevIndex + 1) % props.numBoards);
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
