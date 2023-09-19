import React,{useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selected, setSelected]= useState(0);

  const handleClick=(event)=>{
    if(selected<props.numBoards-1){
      setSelected(selected+1);
    }else{
      setSelected(0);
    }
  }
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected;
    if(ii===selected){
      isSelected= true;
    }
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
