import React, {useState} from "react";

//const [selected, setSelected] = useState()
function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }
  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [selected, setSelected] = useState(0)//instantiate it with 0

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected; //changing the value allows changing of isSelected
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  function changeSelected(){
    setSelected(prevSelected => {
      if (prevSelected < boards.length - 1){
        return prevSelected + 1
      }
      return 0
    })
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={changeSelected}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
