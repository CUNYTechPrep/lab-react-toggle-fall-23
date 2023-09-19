// import useState
import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  //declare state
  let [numClicks, setNumClicks] = useState(0);
  //handler function
  const handleClick = (event) => {
    //checks if board is not last one
    if(numClicks !== props.numBoards-1){
      setNumClicks(numClicks + 1);
      console.log(numClicks);
    }else{
      setNumClicks(0);
    }
    
  };
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    //board chosen is numClicks variable
    let isSelected = ii === numClicks;
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
