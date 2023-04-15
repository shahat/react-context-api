import React, { createContext, useState } from "react";

export const CounterCxt = createContext(0); //  here we create the context
CounterCxt.displayName = "counter";
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  const value = { counter, increaseCounter, decreaseCounter };
  return (
    <CounterCxt.Provider value={value}>{props.children}</CounterCxt.Provider>
  );
};

export default CounterContextProvider;

/* 
in thecod code apove proviss the data in are inside tha counterContectProvider 



*/
