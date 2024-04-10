import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className='counter'>
      <p>Counter 1</p>
      <hr></hr>
      <p>{count}</p>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Counter;
