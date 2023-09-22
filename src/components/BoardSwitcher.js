import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  const [selected, setSelected] = useState(0);
  const toggle = () => {
    if(selected > 3)
      setSelected(0);
    else
      setSelected((selected + 1));
  }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
