import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterContextProvider from "./context/CounterContext";
function App() {
  return (
    <div className="App">
      <h1> context api </h1>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </div>
  );
}

export default App;
