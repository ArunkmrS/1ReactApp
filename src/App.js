import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name:"Arun", age: 28},
      { name:"Aditya", age: 23},
      { name:"Shubham", age: 26}
    ]
  }

  switchNameHandler = () => {
  //  console.log("Button Clicked");
  //DONT DO BELOW TO CHANGE OT MUTATE THE STATE, REACT WONT ALLOW
  //this.state.persons[0].name="Arun Kumar";
  this.setState({persons: [
    { name:"Arun Kumar", age: 28},
    { name:"Aditya", age: 23},
    { name:"Shubham", age: 25}
  ]});
  }

  render() {
     return (
     <div className="App">
        <h1>Hi from React!!!</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Drinking Tea</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
     </div>
   );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi from React2'));
  }
}

export default App;
