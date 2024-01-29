import React from 'react';
import './btn.css';

const FourthButton = ({ children, clickHandler }) => {
  return (
    <button onClick={clickHandler} className='fourthbutton'>
      {children}
    </button>
  );
};

export default FourthButton;
