import React from "react";
import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {

  //Use useState() to keep track of change
  const [getState, setState] = useState(0)

  //onClick handler, update state + 1 and pass props.numBoards
  const handleClick = ()=> {
    setState((getState + 1) %props.numBoards);
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === getState;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;