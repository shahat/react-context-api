import React from "react";
import { CounterCxt } from "../context/CounterContext";
function Counter() {
  return (
    <CounterCxt.Consumer>
      {({ counter, increaseCounter, decreaseCounter }) => {
        return (
          <div>
            <h3>counter value is {counter} </h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
          </div>
        );
      }}
    </CounterCxt.Consumer>
  );
}

export default Counter;
