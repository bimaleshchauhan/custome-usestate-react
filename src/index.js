import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";

const App = () => {
  const [minute, setMinute] = useState(5);
  const [name, setName] = useState("bimal");
  const handleAdd = () => {
    setMinute(minute + 1);
    setName("bimalesh");
  };

  const handleSub = () => {
    setMinute(minute - 1);
  };

  return (
    <div className="App">
      <div>Nmae - {name}</div>
      <button onClick={handleSub}>-</button> {minute}{" "}
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

const states = [];
let call = -1;
function useState(defaultValue) {
  const callId = ++call;
  if (states[callId]) {
    return states[callId];
  }
  const setValue = (newValue) => {
    // assign saomething

    states[callId][0] = newValue;
    renders();
    // rerender
  };
  const data = [defaultValue, setValue];
  states[callId] = data;
  return data;
}

function renders() {
  call = -1;
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}

renders();
