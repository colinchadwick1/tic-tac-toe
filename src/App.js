import Square from "./components/Square";

function App() {
  return (
    <div className="app-header">
      <h2 className="heading-text">TIC TAC TOE</h2>
      <div className="row jc-center">
        <Square className="border-bottom-right" />
        <Square className="border-bottom-right"/>
        <Square className="border-bottom" />
      </div>
      <div className="row jc-center">
        <Square className="border-bottom-right"/>
        <Square className="border-bottom-right"/>
        <Square className="border-bottom" />
      </div>
      <div className="row jc-center">
        <Square className="border-right"/>
        <Square  className="border-right"/>
        <Square  />
      </div>
    </div>
  );
}

export default App;
