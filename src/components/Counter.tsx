import { Button } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(10);

  const increment = () => {
    setCounterValue((currValue) => currValue + 1)
  } 
  
  const decrement = () => {
    setCounterValue((currValue) => currValue - 1)
  }
  const reset = () => {
    setCounterValue(0);
  }
  return <section className="mb-10 flex flex-col">
    <h2 className="text-2xl">Count is</h2>
    <p className="text-xl">{counterValue}</p>
    <div className="flex gap-4 mb-4 justify-center">
      <Button onClick={decrement}>- Decrement</Button>
      <Button onClick={increment}>+ Increment</Button>
    </div>
    <div className="flex justify-center">
      <Button onClick={reset}>Reset</Button>
    </div>
  </section>
}

export default Counter;