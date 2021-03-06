import React, {Component} from 'react';

//Don`t see this working .
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log('[ErrorBoundary.js] constructor');
  }

  state ={
    hasError: false,
    errorMessage: ''
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('[ErrorBoundary.js] getDerivedStateFromError');
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error, info) {
    console.log("error here")
  }

  render() {
    console.log('[ErrorBoundary.js] render');
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    }
    return this.props.children; 
  }


}

export default ErrorBoundary;