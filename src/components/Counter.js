import { React, useContext } from "react";
import { CounterCxt } from "../context/CounterContext";
function Counter() {
  const { counter, increaseCounter, decreaseCounter } = useContext(CounterCxt);
  return (
    <div>
      <h3>counter value is {counter} </h3>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

export default Counter;
