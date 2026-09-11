import './App.css'
import {useSignal} from "@preact/signals-react";

function App() {
  const signal = useSignal(0);
  return <div>
    <h1>React Signals</h1>
    <div>{signal.value}</div>
    <button onClick={() => signal.value = signal.value + 1}>Click</button>
  </div>
}

export default App
