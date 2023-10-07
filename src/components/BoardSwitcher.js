import { useState } from "react";
import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}


function BoardSwitcher(props) {
  const [selectBoard, setSelectBoard]= useState(0);
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }
  function toggle(){
    setSelectBoard( (selectBoard+ 1)%props.numBoards);
  }
  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
