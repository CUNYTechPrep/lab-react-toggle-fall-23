import React, { useState } from "react";

function Board(props) {
  const className = `board ${props.selected ? "selected" : ""}`;

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  // Initialize state to track the current selection
  const [activeIndex, setActiveIndex] = useState(0);

  // Event handler to toggle the active board
  const handleToggleClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % props.numBoards);
  };

  // Generate the boards based on the activeIndex
  const boards = Array.from({ length: props.numBoards }, (_, index) => (
    <Board key={index} index={index} selected={index === activeIndex} />
  ));

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
