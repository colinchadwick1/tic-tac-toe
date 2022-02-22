import React, {useState} from "react";
import Square from "./components/Square";
const initialState=["", "", "", "", "", "", "", "", ""]

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isX, setIsX] = useState(false)

  const handleClick=(index) => {
    let strings = Array.from(gameState);
    strings[index] = isX ? "X" : "0";
    setGameState(strings);
    setIsX(!isX)

 

  }


  return (
    <div className="app-header">
      <h2 className="heading-text">TIC TAC TOE</h2>
      <div className="row jc-center">
        <Square className="border-bottom-right" state={gameState[0]} onClick={()=>handleClick(0)}/>
        <Square className="border-bottom-right" state={gameState[1]} onClick={()=>handleClick(1)}/>
        <Square className="border-bottom"  state={gameState[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className="row jc-center">
        <Square className="border-bottom-right" state={gameState[3]} onClick={()=>handleClick(3)}/>
        <Square className="border-bottom-right" state={gameState[4]} onClick={()=>handleClick(4)}/>
        <Square className="border-bottom" state={gameState[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className="row jc-center">
        <Square className="border-right" state={gameState[6]} onClick={()=>handleClick(6)}/>
        <Square  className="border-right" state={gameState[7]} onClick={()=>handleClick(7)}/>
        <Square  state={gameState[8]} onClick={()=>handleClick(8)}/>
      </div>
      <button>Clear Game</button>
    </div>
  );
}

export default App;
