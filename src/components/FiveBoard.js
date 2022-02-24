import React, { useState, useEffect } from "react";
import Square from "./Square";
const initialState = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const initialScore = {
  X: 0,
  O: 0,
};

function FiveBoard() {
  const initialScore = {
    X: 0,
    O: 0,
  };
  const [gameState, setGameState] = useState(initialState);
  const [isX, setIsX] = useState(false);
  const [score, setScore] = useState(initialScore);

  const handleClick = (index) => {
    let strings = Array.from(gameState);
    if (strings[index] == "") {
      strings[index] = isX ? "X" : "O";
      setGameState(strings);
      setIsX(!isX);
      console.log(isX);
    }
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} has won`);
      setGameState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [5, 6, 7],
      [6, 7, 8],
      [7, 8, 9],
      [10, 11, 12],
      [11, 12, 13],
      [12, 13, 14],
      [0, 5, 10],
      [1, 6, 11],
      [2, 7, 12],
      [3, 8, 13],
      [4, 9, 14],
      [0, 6, 12],
      [1, 7, 13],
      [2, 8, 14],
      [4, 8, 12],
      [3, 7, 11],
      [2, 6, 10],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        score[gameState[a]]++;

        console.log(gameState[a], "gamestateA");
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      {isX ? <p>X's turn</p> : <p>O's turn</p>}

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
          className="border-bottom-right"
          state={gameState[2]}
          onClick={() => handleClick(2)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[3]}
          onClick={() => handleClick(3)}
        />
        <Square
          className="border-bottom"
          state={gameState[4]}
          onClick={() => handleClick(4)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-bottom-right"
          state={gameState[5]}
          onClick={() => handleClick(5)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[6]}
          onClick={() => handleClick(6)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[7]}
          onClick={() => handleClick(7)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[8]}
          onClick={() => handleClick(8)}
        />
        <Square
          className="border-bottom"
          state={gameState[9]}
          onClick={() => handleClick(9)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-right"
          state={gameState[10]}
          onClick={() => handleClick(10)}
        />
        <Square
          className="border-right"
          state={gameState[11]}
          onClick={() => handleClick(11)}
        />
        <Square
          className="border-right"
          state={gameState[12]}
          onClick={() => handleClick(12)}
        />
        <Square
          className="border-right"
          state={gameState[13]}
          onClick={() => handleClick(13)}
        />

        <Square state={gameState[14]} onClick={() => handleClick(14)} />
      </div>
      <div className="score-board">
        <div className="x-score">{score.X}</div>
        <div className="o-score">{score.O}</div>
      </div>
      <button className="clear" onClick={() => setGameState(initialState)}>
        Clear Game
      </button>
      <button className="clear" onClick={() => setScore(initialScore)}>
        Clear Score
      </button>
    </div>
  );
}

export default FiveBoard;
