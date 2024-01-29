import React from 'react';
import './btn.css';

const SecondaryBtn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='secondaryBtn'>
      {children}
    </button>
  );
};

export default SecondaryBtn;
