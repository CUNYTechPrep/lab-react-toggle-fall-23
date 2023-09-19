import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
   const [selectedBoard, setBoard] =useState(1);

   //const handlerNext = (event)
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard;,
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={add}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
