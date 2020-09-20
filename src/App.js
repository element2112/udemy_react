import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {

  foos = () => 'Bars';

  render(){
    const name = 'John Doe';

    const foo = () => 'Bar';

    return (
      <Fragment>
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Goodbye</h1>
        <h1>{foo()}</h1>
        <h1>Hello {foo()}</h1>
        <h1>Hello {this.foos()}</h1>
      </Fragment>
    );
  }

}

export default App;
