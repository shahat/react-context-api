import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter.js";
import CounterContextProvider from "./context/CounterContext";
import ComponentA from "./components/ComponentA";
import NameContextProvider from "./context/NameContext";
//import NameContextProvider from "./context/NameContextProvider";
function App() {
  return (
    <div className="App">
      <h1> context api </h1>
      <CounterContextProvider>
        <Counter />
        <NameContextProvider>
          <ComponentA />
        </NameContextProvider>
      </CounterContextProvider>
    </div>
  );
}

export default App;
