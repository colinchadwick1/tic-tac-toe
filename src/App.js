import React, { useState, useEffect } from "react";
import Square from "./components/Square";
const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isX, setIsX] = useState(false);

  const handleClick = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isX ? "X" : "0";
    setGameState(strings);
    setIsX(!isX);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} has won`);
      setGameState(initialState);
    }
  }, [gameState]);

  const checkWinner =()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a];
      }
  }
  return null;

  }


  return (
    <div className="app-header">
      <h2 className="heading-text">TIC TAC TOE</h2>
      <div className="row jc-center">
        <Square
          className="border-bottom-right"
          state={gameState[0]}
          onClick={() => handleClick(0)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[1]}
          onClick={() => handleClick(1)}
        />
        <Square
          className="border-bottom"
          state={gameState[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-bottom-right"
          state={gameState[3]}
          onClick={() => handleClick(3)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[4]}
          onClick={() => handleClick(4)}
        />
        <Square
          className="border-bottom"
          state={gameState[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-right"
          state={gameState[6]}
          onClick={() => handleClick(6)}
        />
        <Square
          className="border-right"
          state={gameState[7]}
          onClick={() => handleClick(7)}
        />
        <Square state={gameState[8]} onClick={() => handleClick(8)} />
      </div>
      <button className="clear" onClick={() => setGameState(initialState)}>
        Clear Game
      </button>
    </div>
  );
}

export default App;
