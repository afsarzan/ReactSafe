import { useState } from "react";

const Counter = () => {
  // let counterValue = 10;
  const [counterValue, setCounterValue] = useState(10);

  const increment = () => {
    setCounterValue(counterValue + 1);
  } 
  
  const decrement = () => {
    setCounterValue(counterValue - 1);
  }
  const reset = () => {
    setCounterValue(0);
  }
  return <section className="mb-10 flex flex-col">
    <h2 className="text-2xl">Count is</h2>
    <p className="text-xl">{counterValue}</p>
    <div className="flex gap-4 mb-4 justify-center">
      <button onClick={decrement}>- Decrement</button>
      <button onClick={increment}>+ Increment</button>
    </div>
    <div className="flex justify-center">
      <button onClick={reset}>Reset</button>
    </div>
  </section>
}

export default Counter;