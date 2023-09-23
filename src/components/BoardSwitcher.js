import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }
  if(props.color){
    className += " selected"+ props.color
  }
  return <div className={className} >{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [curr, setCurr] = useState(0)
  const [color, setColor] = useState("blue")

  const handleClick = () => {
    if (curr < props.numBoards - 1) {
      setCurr(curr+1)
    } else {
      setCurr(0)
    }
  }
  const handleDouble = () => {
    if (curr < props.numBoards - 1 || curr < props.numBoards - 2 ) {
      setCurr(curr+2)
    } else {
      setCurr(0)
    }
  }

  for (let i = 0; i < props.numBoards; i++) {
    let isSelected = i === curr;  
    boards.push(<Board index={i} selected={isSelected} color={color} key={i} />);
  }
  
  return (
    <div className="boardDiv">
      <div className="boards">{boards}</div>
      <h4>Toggle</h4>
      <div>
        <button className="toggleButton" onClick={handleClick}>Toggle</button>
        <button className="toggleButton" onClick={handleDouble}>Toggle +2 </button>
      </div>
      <h4>BG Color</h4>
      <div className="colors">
        <button className="toggleButton" onClick={()=>setColor("green")}>Green</button>
        <button className="toggleButton" onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="toggleButton" onClick={()=>setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default BoardSwitcher;
