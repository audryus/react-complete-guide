import React, { Component } from 'react';
import appClasses from './App.css';

import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary/Auxiliary';

import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      auth: false,
      changeCounter: 0,
      userInput: '',
      username: "sudo",
      showCockpit: true, 
      persons: [
        { id: Math.ceil(Math.random() * 1000), name: 'Max', age: 28 },
        { id: Math.ceil(Math.random() * 1000), name: 'Manu', age: 29 },
        { id: Math.ceil(Math.random() * 1000), name: 'Stephanie', age: 26 },
      ],
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;

  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangerHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personID);
    const personsArr = [...this.state.persons];
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    personsArr[personIndex] = person;

    this.setState({ persons: personsArr });

    this.setState((prevState, props) => {
      return {
        changeCounter: prevState.changeCounter + 1
      }
    })

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


  loginHandler = () => {
    this.setState((prevState, props) => {
      return {auth: !prevState.auth}
    });
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangerHandler}
            isAuth={this.state.auth}
          />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {this.setState({showCockpit: !this.state.showCockpit})}}
        >Toggle Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.auth, login: this.loginHandler}}>
          {this.state.showCockpit ? <Cockpit 
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersons={this.togglePersonHandler}
            inputChangeHandler={this.inputChangeHandler}
            userInput={this.state.userInput}
            charsClicked={this.deleteCharHandler}
          /> : null }
          {persons}
        </AuthContext.Provider>
        <UserInput change={this.userNameChangeHandler} userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="User Name 2"/>
        <UserOutput userName="User Name 3"/>
      </Aux>
    );
  }
}

export default withClass(App, appClasses.App);
