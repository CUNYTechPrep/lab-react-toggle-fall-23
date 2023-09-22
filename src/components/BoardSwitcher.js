import React, {useState} from "react";

let currentState=1;
function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [currentState, setCurrentState] = useState(0);

  const onClickToggle=() =>{
    setCurrentState((prevState)=>(prevState+1)%5);
  }
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentState;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={onClickToggle}>Toggle</button>
    </div>
  );
}
export default BoardSwitcher;
