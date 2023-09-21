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
  let boards = [];
  const switcher = () => {
      if (toggle < props.numBoards-1) {
        setToggle(toggle + 1);
      }
      else {
        setToggle(0);
      }
    }

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === toggle;  
    
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={switcher}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
