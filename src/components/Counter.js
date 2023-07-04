import React from 'react'

const Counter = () => {
  const [counter, setCounter] = React.useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <>
    {/* THIRD change made. We are changing the IDs from "ID" to "data-testid". After testing, we will change this back. */}
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={incrementCounter}> Up</button>
      <button data-testid="button-down" onClick={decrementCounter}>Down</button>
    </>
  )
}

export default Counter