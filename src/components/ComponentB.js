import React, { useContext } from "react";
import { CounterCxt } from "../context/CounterContext";
import { NameCxt } from "../context/NameContext";
function ComponentB() {
  const { counter } = useContext(CounterCxt);
  const { name } = useContext(NameCxt);
  return (
    <div>
      <h3>
        counter from the component b {counter} {name}
      </h3>
    </div>
  );
}
export default ComponentB;
