import React from 'react';
import './input.css';

const InputFied = ({ text, type, onChange, value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className='text-input'
      type={type}
      placeholder={text}
    />
  );
};

export default InputFied;
