import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [toggle, setToggle] = useState(0);
function aToggle(){
  if(toggle === props.numBoards-1){
    setToggle(0);
  }
  else{
    setToggle(toggle+1);
  }
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === toggle;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={aToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
