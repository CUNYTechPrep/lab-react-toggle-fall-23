import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}
let state=0;

function BoardSwitcher(props) {
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    state=ii%5;
    let isSelected = state === 0;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
