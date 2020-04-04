import React, { Component } from 'react';
import styled from 'styled-components';
import appClasses from './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Validation from './Validation/Validation'
import Char from './Char/Char'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

class App extends Component {
  state = {
    userInput: '',
    username: "sudo",
    persons: [
      { id: Math.ceil(Math.random() * 1000), name: 'Max', age: 28 },
      { id: Math.ceil(Math.random() * 1000), name: 'Manu', age: 29 },
      { id: Math.ceil(Math.random() * 1000), name: 'Stephanie', age: 26 },
    ],
  };

  nameChangerHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personID);
    const personsArr = [...this.state.persons];
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    personsArr[personIndex] = person;

    this.setState({ persons: personsArr });
  };

  userNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    //Changes the original array.
    //const persons = this.state.persons;
    
    //Creates a new array to be manipulated
    //const persons = this.state.persons.slice();

    //Using spread
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   display: 'block',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = [appClasses.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}><Person key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangerHandler(event, person.id)}/></ErrorBoundary>
          })}
        </div>
      );
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass.push(appClasses.Red)
    }

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        click={() => this.deleteCharHandler(index)}/>
    });

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(appClasses.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(appClasses.bold);
    }

    return (
      <div className={appClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <hr />

        <input type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
        <hr/>
        {/* Not recommended 
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>
            Switch name
        </button>
        */}
        <StyledButton
          any={this.state.showPersons}
          onClick={this.togglePersonHandler}>
          Toggle Persons 
        </StyledButton>
        <br/>
        <button 
          className={btnClass.join(' ')}>
            Testin button dynamic classs
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
        {persons}

        <UserInput change={this.userNameChangeHandler} userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="User Name 2"/>
        <UserOutput userName="User Name 3"/>
      </div>
    );
  }
}

export default App;
