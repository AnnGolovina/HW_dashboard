import React, {useState} from "react";
import { useCounter } from "../../hooks/useCounter";


export const Counter = () => {
	const [count, increment, decrement] = useCounter(0);
  return (
	<div>
		<h3>Counter: {count}</h3>
		<button onClick={() => increment()}>Increment</button>
		<button onClick={() => decrement()}>Decrement</button>
		</div>
  )
}
