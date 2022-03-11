// import { useState } from "react";
import { render } from "react-dom";

let callCount = -1;
let states = [];

function useState(initialValue) {
  let id = ++callCount;

  if (states[id]) {
    return states[id];
  }

  function setValue(value) {
    states[id][0] = value;
    console.log(states);
    rerender();
  }

  let tuple = [initialValue, setValue];
  states.push(tuple);
  return tuple;
}

function App() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>
        Count: {count} {count2}
      </h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

function rerender() {
  callCount = -1;
  render(<App />, document.getElementById("root"));
}

rerender();

export default App;
