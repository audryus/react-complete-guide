import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components';

import AuthContext from '../../context/auth-context';

import cockpitClasses from './Cockpit.css';

import Validation from '../Validation/Validation'
import Chars from '../Chars/Chars';

const StyledButton = styled.button`
  background-color: ${props => props.any ? 'red': 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.any ? 'salmon': 'lightgreen'};
    color: black;
  }
`;

const cockpit = props => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] UseEffect');
    toggleBtnRef.current.click();
    //HTTP request ..
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud');
    // }, 1000)
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] clean up work in useEffect')
    }
  }, []);// <- this empty array, forces this to run only once in the start

  useEffect(() => {
    console.log('[Cockpit.js] Use Effect 2');
    return () => {
      console.log('[Cockpit.js] Clean up work in use effect 2')
    }
  }); 

  const classes = [];

  if (props.personsLength <= 2) {
    classes.push(cockpitClasses.red);
  }
  if (props.personsLength <= 1) {
    classes.push(cockpitClasses.bold);
  }

  let btnClass = [cockpitClasses.Button];
  if (props.showPersons) {
    btnClass.push(cockpitClasses.Red)
  }

  return(
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <hr />

      <input type="text" 
        onChange={props.inputChangeHandler} 
        value={props.userInput}/>
      <p>{props.userInput}</p>
      <Validation inputLength={props.userInput.length} />
      <Chars 
        userInput={props.userInput}
        clicked={props.charsClicked}/>
      <hr/>
      {/* Not recommended 
      <button
        style={style}
        onClick={() => this.switchNameHandler('Maximilian')}>
          Switch name
      </button>
      */}
      <StyledButton
        ref={toggleBtnRef}
        any={props.showPersons}
        onClick={props.togglePersons}>
        Toggle Persons 
      </StyledButton>
      <br/>
      <AuthContext.Consumer>
        {context => 
          <button 
            onClick={context.login}
            className={btnClass.join(' ')}>
              Testin button dynamic classs
          </button>
        }
      </AuthContext.Consumer>
      <br/>
      <button 
        onClick={authContext.login}
        className={btnClass.join(' ')}>
          Other context way
      </button>
      <br/>

      {/* Hard way ... 
      this.state.showPersons ? 
        <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Johnson')}
          changed={this.nameChangerHandler}>
            My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>
        : null
      */}
    </div>
  );
}

export default React.memo(cockpit);