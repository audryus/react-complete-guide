import React from 'react';

import outputClasses from './UserOutput.css'

const userOutput = props => {
  return (
    <div className={outputClasses.UserOutput}>
      <p>
        User name: {props.userName}
      </p>
      <p>
        I hope I`ll be overwritten.
      </p>
    </div>
  )
};

export default userOutput;