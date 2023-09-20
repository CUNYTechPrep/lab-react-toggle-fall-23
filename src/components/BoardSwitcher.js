import React from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher({ numBoards }) {
  const [toggleIndex, setToggleIndex] = React.useState(0);

  const handleClick = () => {
    setToggleIndex((toggleIndex + 1) % numBoards);
  };
  let boards = [];
  for (let ii = 0; ii < numBoards; ii++) {
    let isSelected = ii === toggleIndex;
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
