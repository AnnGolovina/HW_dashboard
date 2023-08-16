import { useEffect, useState } from "react"

export const useCounter = (key: number) => {
	const [count, setCount] = useState(key);

	const increment = () => {
		setCount(count + 1);
	}

	const decrement = () => {
		setCount(count -1);
	}
	useEffect(() => {
	}, [count])

	return [count, increment, decrement]
}