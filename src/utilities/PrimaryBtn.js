import React from 'react';
import './btn.css';

const PrimaryBtn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='primary-btn'>
      {children}
    </button>
  );
};

export default PrimaryBtn;
