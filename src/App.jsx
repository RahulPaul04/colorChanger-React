import { useState } from 'react';
 
import './App.css';

function App() {
  const [colour, setColour] = useState("blue");

  const change = (val) => {
    setColour(val.toLowerCase());
  };

  const containerStyles = {
    height: '100vh',
    backgroundColor: colour 
  };

  return (
    <div id="container" style={containerStyles} className="d-flex justify-content-evenly align-items-center">
      <button onClick={(e) => change(e.target.innerText)} className="btn btn-primary p-3">
        Blue
      </button>
      <button onClick={(e) => change(e.target.innerText)} className="btn btn-success p-3">
        Green
      </button>
      <button onClick={(e) => change(e.target.innerText)} className="btn btn-danger p-3">
        Red
      </button>
      <button onClick={(e) => change(e.target.innerText)} className="btn btn-warning p-3">
        Yellow
      </button>
    </div>
  );
}

export default App;
