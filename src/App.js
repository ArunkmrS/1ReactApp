import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
     return (
     <div className="App">
        <h1>Hi from React!!!</h1>
        <Person name="Arun" age="28"></Person>
        <Person name="Shilpa" age="28">Hobbies: Drinking Tea</Person>
        <Person name="Shubham" age="25"></Person>
     </div>
   );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi from React2'));
  }
}

export default App;
