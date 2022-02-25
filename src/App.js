import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import ThreeBoard from "./components/ThreeBoard";
import FiveBoard from "./components/FiveBoard";


function App() {
  const [size, setSize] = useState("three")

  const handleOnClick = (name) => {
    if (name === "three") {
      setSize("three");
      console.log(size)
    } else if (name === "five") {
      setSize("five");
      console.log(size)
    }
  };

return (
  <div className="wrapper">
        <h2 className="heading-text">O's and X's</h2>
        {size === "three" ? (
          <button 
          className="size"
          name="five"
          onClick={(e => handleOnClick(e.target.name))} >5x5</button>

        ) : (
          <button 
          className="size"
          name="three"
          onClick={(e => handleOnClick(e.target.name))} >3x3</button>
        )}
  

  {size === "three" ? (
    <ThreeBoard></ThreeBoard>

  ):(

  <FiveBoard></FiveBoard>
  )}
  </div>
  );
}

export default App;
