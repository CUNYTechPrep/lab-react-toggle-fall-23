import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}


function BoardSwitcher(props) {
  let [selected, setSelected] = useState(0);
  let boards = [];

  const handleTogle = (event) =>{
    if(selected < boards.length - 1){
      setSelected(selected+=1)
    }
    else{
      setSelected(0)
    }
    console.log(selected)
  }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleTogle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
