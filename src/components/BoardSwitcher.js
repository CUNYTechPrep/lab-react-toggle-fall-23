import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  var [numClicks, setNumClicks] = useState(0);

    const handleClick = (event) => {
      if (numClicks === props.numBoards - 1){

        numClicks = 0 
        setNumClicks(numClicks)
      }
      else {
      setNumClicks(numClicks + 1);
      };

      
    }
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === numClicks;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);

  }
  



  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick ={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
