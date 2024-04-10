import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div className='name'>
      <p>Name</p>
      <hr></hr>
      <input
        onChange={handleName}
        name='myName'
        placeholder='이름을 입력해주세요'
      />
      <input
        onChange={handleNickname}
        name='nickName'
        placeholder='닉네임을 입력해주세요'
      />
      <p>{`이름: ${name === '' ? '아직 이름이 없습니다' : name}`}</p>
      <p>{`닉네임: ${
        nickname === '' ? '아직 닉네임이 없습니다' : nickname
      }`}</p>
    </div>
  );
};

export default Name;
