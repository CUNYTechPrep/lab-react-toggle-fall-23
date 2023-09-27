import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const[toggleNumber, setToggle] = useState(0);

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === toggleNumber;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  const toggle = () => {
    if(toggleNumber === (props.numBoards - 1)){
      setToggle(0);
    } else {
      setToggle(toggleNumber + 1);
    }
  }

  return (
      <div>
        <div className={"board-container"}>
          <div className="boards">{boards}</div>
        </div>
        <div className={"button-container"}>
          <button onClick={toggle}>Toggle</button>
        </div>
      </div>
  );
}

export default BoardSwitcher;