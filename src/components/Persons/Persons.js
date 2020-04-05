import React, {PureComponent} from 'react';

import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent { 
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   return nextProps.persons !== this.props.persons;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {message: 'message from snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('[Persons.js]', snapshot)
  }

  render() {
    console.log('[Persons.js] render')
    return (
      this.props.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}><Person key={person.id}
          click={this.props.clicked.bind(this, index)}
          name={person.name} 
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}/></ErrorBoundary>
      })
    )
  }
};

export default Persons;