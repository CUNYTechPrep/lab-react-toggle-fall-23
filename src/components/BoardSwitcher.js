/* I apologize. This is my first time working with forks with github. I thought
I was supossed to create a react project simillar to the demonstrated version.
I did not understand I was supossed to build on the previous github repo, but now I 
know and I wont make the mistake again. */

import React, { useState, version } from 'react';

function Square({ number, isActive }) {
  const squareStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '80px',
    margin: '20px',
    fontSize: '30px',
    border: isActive ? '7px solid blue' : '7px solid grey'
  };

  return (
    <div style={squareStyle}>{number}</div>
  )
}

function Button({ onClick }) {
  return (
    <button onClick={onClick}>Toggle</button>
  )
}

export default function App() {
  const [activeSquareIndex, setActiveSquareIndex] = useState(0);

  const toggle = () => {
    setActiveSquareIndex((activeSquareIndex + 1) % 5)
  }

  const display = {
    display: 'flex',
    flexDirection: 'row'
  }
  return (
    <div>
      <div style={display}>
        <Square number={1} isActive={1 === activeSquareIndex}></Square>
        <Square number={2} isActive={2 === activeSquareIndex}></Square>
        <Square number={3} isActive={3 === activeSquareIndex}></Square>
        <Square number={4} isActive={4 === activeSquareIndex}></Square>
        <Square number={5} isActive={0 === activeSquareIndex}></Square>
      </div>
      <Button onClick={toggle}></Button>
    </div>
  )
};