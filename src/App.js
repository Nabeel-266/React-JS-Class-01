import "./styles.css";
import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const adviceResponse = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await adviceResponse.json();
    setAdvice(adviceData.slip.advice);
    setCount((prvCount) => prvCount + 1);
    document.querySelector(".advice").classList.remove("hide");
  }

  return (
    <div className="App">
      <h1>Advice</h1>
      <h3>
        Get a random advice by clicking a <strong>take advice</strong> button
      </h3>
      <ShowAdvice advice={advice} />
      <button onClick={getAdvice}>Take Advice</button>
      <CountMessage count={count} />
    </div>
  );
}

function ShowAdvice(props) {
  return (
    <p className="advice hide">
      <q>{props.advice}</q>
    </p>
  );
}

function CountMessage({ count }) {
  return (
    <p className="count">
      You have read <strong>{count}</strong> piece{count > 1 ? "s" : ""} of
      advice
    </p>
  );
}
