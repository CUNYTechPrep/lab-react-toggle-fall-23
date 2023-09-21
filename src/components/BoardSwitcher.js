import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [board, setBoard] = React.useState(0)
  function clickToggle() {
    setBoard(prevboard => (
      (prevboard + 1) % 5
    ))
  }
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === board;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={clickToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
