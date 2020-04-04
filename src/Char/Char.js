import React from 'react'

import charClasses from './Char.css';

const char = props => {
  return (
    <div className={charClasses.Char} onClick={props.click}>
      {props.character}
    </div>
  );
};

export default char;  