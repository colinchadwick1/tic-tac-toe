import React, { useState, useEffect } from "react";
import Square from "./Square";
const initialState = ["", "", "", "", "", "", "", "", ""];
const initialScore = {
  X: 0,
  O: 0,
};


function ThreeBoard() {
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
      
            console.log(gameState[a], "gamestateA");
            return gameState[a];
          }
        }
        return null;
      };
    
      return (
        <div className="app-header">
          <h2 className="heading-text">TIC TAC TOE</h2>
          {isX ?
              <p>X's turn</p>
          :
          <p>O's turn</p> }
    
          <div className="row jc-center">
            <Square
            style = { isX ? {color: 'red'} : {color: 'green'}}
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

export default ThreeBoard;