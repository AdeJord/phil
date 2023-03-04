import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Container, makeStyles } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "red",
    width: '70vw'
  },
});

function App() {
  const classes = useStyles()
  let [result, setResult] = useState(9);
  let genNumber = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    setResult(randomNumber);
    console.log(randomNumber);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DICE</h1>
        <button onClick={genNumber}>ROLL DICE</button>

        <Container
        className={classes.root}>{result}</Container>
      </header>
    </div>
  );
}

export default App;
