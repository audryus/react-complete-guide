import React from 'react';
// import styled from 'styled-components';

import classes from './Person.css';

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

const person = (props) => {

  const throwNewError = () => {
    throw new Error("Randon thing to happend in production.");
  }

  return (
    <div className={classes.Person}>
      <p onClick={throwNewError}>
        I'm {props.name} and I m {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;