import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import Output from './Assignment-1/UserOutput/UserOutput'
import Input from './Assignment-1/UserInput/UserInput'

class App extends Component {
  stateNew = {
    persons: [
      { name: "Dafne", age: 31 },
      { name: "Elfi", age: 59 },
      { name: "Srini", age: 60 }
    ],
    otherState: 'Some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Elfi", age: 59 },
        { name: "Srini", age: 600 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Dafne", age: 31 },
        { name: event.target.value, age: 59 },
        { name: "Srini", age: 600 }
      ]
    })
  }

  // ASSIGNMENT 1
  state = {
    userNames: [
      { name: "user1" },
      { name: "user2" },
      { name: "Ziggy Marley" }
    ],
    otherState: 'Some other state'
  }

  userChangedHandler = (event) => {
    this.setState({
      userNames: [
        { name: event.target.value },
        { name: "Ky-Mani Marley" },
        { name: "Ziggy Marley" }
      ],
    })
  }

  // switchUserHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName },
  //       { name: "Elfi" },
  //       { name: "Srini" }
  //     ]
  //   })
  // }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    const personContainer = {
      display: 'flex'
    }

    return (
      <div className="App" >
        <h1>Hi, I'm Dafne ;-)</h1>
        <h3>is this really working?</h3>

        {/* <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

        <div style={personContainer}>
          <Person name={this.stateNew.persons[0].name} age={this.stateNew.persons[0].age} />

          <Person name={this.stateNew.persons[1].name} age={this.stateNew.persons[1].age}
            changed={this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, 'Max!!')}
          >Special *CaSe*
          </Person>

          <Person name={this.stateNew.persons[2].name} age={this.stateNew.persons[2].age} />
        </div> */}



        {/* // ASSIGNMENT 1 */}
        <Output userName="User name" user={this.state.userNames[0].name} />
        <Input changed={this.userChangedHandler} user={this.state.userNames[0].name} />

        <Output user={this.state.userNames[1].name} />
        <Input />

        <Output user={this.state.userNames[2].name} />
        <Input />
      </div >
    )
  }

}

export default App;