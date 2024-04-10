import React, { useEffect, useState } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  useEffect(() => {
    console.log('랜더링이 완료되었습니다.');
  }, []);
  const handleCount = () => {
    setCount((prev) => prev + 1);
    console.log('count 값이 변경되었습니다.');
  };
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log('text 값이 변경되었습니다.');
  };
  return (
    <div className='counter'>
      <p>Counter 2</p>
      <hr></hr>
      <h3>{count}</h3>
      <button onClick={handleCount}>+1</button>
      <hr></hr>
      <input onChange={handleInput} type={'text'}></input>
      <h3>{input}</h3>
    </div>
  );
};

export default Counter2;
