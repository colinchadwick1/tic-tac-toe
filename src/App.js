import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import ThreeBoard from "./components/ThreeBoard";
import FiveBoard from "./components/FiveBoard";

function App() {
  const [size, setSize] = useState("three");

  const handleOnClick = (name) => {
    if (name === "three") {
      setSize("three");
    } else if (name === "five") {
      setSize("five");
    }
  };

  return (
    <div className="container">
      <h2 className="heading-text">O's and X's</h2>
      <div className="sizing">
        {size === "three" ? (
          <button
            className="clear"
            name="five"
            onClick={(e) => handleOnClick(e.target.name)}
          >
            5x5
          </button>
        ) : (
          <button
            className="clear"
            name="three"
            onClick={(e) => handleOnClick(e.target.name)}
          >
            3x3
          </button>
        )}
      </div>

      {size === "three" ? <ThreeBoard/> : <FiveBoard/>}
    </div>
  );
}

export default App;
