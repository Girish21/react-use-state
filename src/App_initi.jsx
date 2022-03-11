import { useState } from "react";
import { render } from "react-dom";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
