import React,{useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [currNum, setNum] = useState(0)
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currNum;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }
  function clickHandler(){
    setNum((currNum + 1) % props.numBoards);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={clickHandler}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
