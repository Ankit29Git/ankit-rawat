import React from 'react';

export default () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount(count - 1);
  }

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  )
}
