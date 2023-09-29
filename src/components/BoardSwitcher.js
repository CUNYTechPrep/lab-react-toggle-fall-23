import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  const toggleBoard = () => {
    setSelectedBoardIndex((prevIndex) => {
   
      return (prevIndex + 1) % props.numBoards;
    });
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    const isSelected = ii === selectedBoardIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoard}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
