import React from 'react';
import './input.css';

const TeaxtArea = ({ text, type, onChange, value, rows }) => {
  return (
    <textarea
      style={{ resize: 'none' }}
      value={value}
      onChange={onChange}
      className='text-input'
      rows={rows}
      type={type}
      placeholder={text}
    />
  );
};

export default TeaxtArea;
