import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoard, setSelectedBoard] = useState(0); // 1. State to track the currently selected board

  const toggleBoard = () => {  // 2. Event handler for the toggle button
    setSelectedBoard((prevBoard) => (prevBoard + 1) % props.numBoards);
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard; // Updated this line
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoard}>Toggle</button>  // 3. Attached the event handler to the button
    </div>
  );
}

export default BoardSwitcher;
