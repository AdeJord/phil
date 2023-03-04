import logo from "./logo.svg";
import { useState } from 'react'
import "./App.css";



function App() {

  let [ result, setResult] = useState(null)
  let genNumber = () => {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  setResult = (randomNumber)
  console.log(randomNumber);
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DICE</h1>
        <button onClick={genNumber}>ROLL DICE</button>
        <div style={{background: 'red'}}>
          <p>Result</p>
          <p>fart {result}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
