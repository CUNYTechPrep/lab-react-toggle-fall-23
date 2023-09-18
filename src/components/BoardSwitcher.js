import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [isSelected, setIsSelected] = React.useState(0);
  function add() {
    if(isSelected === props.numBoards - 1) setIsSelected(0);
    else setIsSelected(isSelected + 1)
  }
  for (let ii = 0; ii < props.numBoards; ii++) {
    let select = ii === isSelected;
    boards.push(<Board index={ii} selected={select} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={add}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
