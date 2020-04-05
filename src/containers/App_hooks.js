import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  });
  const switchNameHandler = () => {
    //DOnt do this: this.state.persons[0].name = "Maximilliam";
    setPersonState({ persons: [
        { name: 'Maxine', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 46 },
      ],
    })
  };
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
};

export default app;
