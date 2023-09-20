import React from "react";
import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}> {props.index + 1} </div>;
}

function BoardSwitcher(props) {

  //Set state to 0;
  const [state, setState] = useState(0);

  /*
  console.log("boards index is: " + boards[state].props.index);
  console.log("boards selected is: " + boards[state].props.selected);
  */

  //boards array
  let boards = [];

  //Must get state referenced to a variable to be able to get selected to change index.
  //let num get the initial value of state. 
  let num = state;

  //Reduce memory usage.
  for (let i = 0; i < props.numBoards; i++) {
    //let boolean variable isSelected get the current index of boards array and see if it matches num.
    let isSelected = i === num;
    boards.push(<Board index={i} selected={isSelected} key={i} />);
  }

  function handleClick() {
    //Update state of selected index to the next index. Wrap around back to the first board if over boards length.
    setState((num) => (num + 1) % props.numBoards);

    //console.log(num);
  };

  return (
    <div>
      <div className="boards">{boards}</div>

      <button onClick= {handleClick}>Toggle</button>
    </div>
  );

}

export default BoardSwitcher;
