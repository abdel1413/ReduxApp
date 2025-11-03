import { useState } from "react";

export const Grandchild = ({ greeting, response }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{greeting}</h1>
      <h2>{response}</h2>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </>
  );
};