import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My hobbies: Racing </Person>
        <Person name="Stephanie" age="28"/>
      </div>
    );
  }
}

export default App;
