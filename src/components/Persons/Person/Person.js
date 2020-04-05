import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

// import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Person.css';

import withClass from '../../../hoc/WithClass';

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

class Person extends Component {
  constructor(props) {
    super(props);
    this.elInputRef = React.createRef();
  }
  // const throwNewError = () => {
  //   throw new Error("Randon thing to happend in production.");
  // }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputEl.focus();
    this.elInputRef.current.focus();
    console.log(this.context.authenticated)
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {context => 
            context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I m {this.props.age} years old !
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          // ref={(el) => { this.inputEl = el}}
          ref={this.elInputRef}
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};


export default withClass(Person, classes.Person);