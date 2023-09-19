import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [index, setIndex] = useState(0); // set up the state variable and setter function

  const handleClick = (event) =>{ // handleClick function
    if(index < props.numBoards-1){ //if the value of the index is less than the number of Boards -1 (3-1 = 2)...
      setIndex(index+1); // then it the setter function will have a parameter value of index+1
    }
    else{
      setIndex(0); //Otherwise, it'll be set to 0
    }
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected; // Edited the line to instead establish the boolean variable
    if(ii === index){  //If the ii variable is equal to the value of index ...
      isSelected = true; //then we state that the isSelected boolean is true. If it's true, when we ...
    }
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button> {/*... when we click on toggle, then it will switch to the next board*/}
    </div>
  );
}

export default BoardSwitcher;
