import React from 'react';

const SelectInput = ({ value, onChange, text, options }) => {
  return (
    <select value={value} onChange={onChange} className='text-input'>
      <option value=''>{text}</option>
      {options.map((option, index) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectInput;
