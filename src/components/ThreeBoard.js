import React, { useState, useEffect } from "react";
import Square from "./Square";

function ThreeBoard() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
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
    }
  };
  useEffect(() => {
    const winner = checkWinner();
    const draw = checkDraw();
    if (winner) {
      alert(`${winner} has won`);
      setGameState(initialState);
    }
    if (draw && !winner) {
      alert("It's a draw");
      setGameState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        score[gameState[a]]++;

        return gameState[a];
      }
    }
    return null;
  };

  const checkDraw = () => {
    let strings = Array.from(gameState);
    const draw = !strings.includes("");
    return draw;
  };
  return (
    <div className="board">
      {isX ? (
        <p>
          <strong>X</strong>'s turn
        </p>
      ) : (
        <p>
          <strong>O</strong>'s turn
        </p>
      )}

      <div className="row">
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
      <div className="row">
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
      <div className="row">
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
      <div className="score-board">
        <div className="x-score">{score.X}</div>
        <div className="o-score">{score.O}</div>
      </div>
      <div className="buttons">
        <button
          className="clear size"
          onClick={() => setGameState(initialState)}
        >
          Clear Game
        </button>
        <button className="clear size" onClick={() => setScore(initialScore)}>
          Clear Score
        </button>
      </div>
    </div>
  );
}

export default ThreeBoard;
