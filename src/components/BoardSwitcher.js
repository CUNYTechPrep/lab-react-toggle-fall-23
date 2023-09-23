import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

// using useState
function BoardSwitcher(props) {
  const [selectBoard, setSelectBoard] = useState(0);
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  // iterate through each of the array
  // function to make the button move
  // initially I thought of only going (selectBoard + 1) but then it gets stuck so we need to reset
  const handleClick = () => {
    if (selectBoard + 1 < props.numBoards) {
      setSelectBoard(selectBoard + 1);
    } else {
      // resets after the 4th index
      setSelectBoard(0);
    }
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
