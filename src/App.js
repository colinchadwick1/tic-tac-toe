import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import ThreeBoard from "./components/ThreeBoard";
import FourBoard from "./components/FourBoard";


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
  <>
  <button 
  name="three"
  onClick={(e => handleOnClick(e.target.name))} >Three</button>
  <button 
  name="five"
  onClick={(e => handleOnClick(e.target.name))} >Five</button>
  {size === "three" ? (
    <ThreeBoard></ThreeBoard>

  ):(

  <FourBoard></FourBoard>
  )}
  </>
  );
}

export default App;
