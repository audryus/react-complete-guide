import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "sudo",
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  };

  switchNameHandler = (newName) => {
    //DOnt do this: this.state.persons[0].name = "Maximilliam";
    this.setState({ persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 46 },
      ],
    })
  };

  nameChangerHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 46 },
      ],
    })
  };

  userNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        {/* Not recommended */}
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>
            Switch name
        </button>
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


        <UserInput change={this.userNameChangeHandler} userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="User Name 2"/>
        <UserOutput userName="User Name 3"/>
      </div>
    );
  }
}

export default App;
