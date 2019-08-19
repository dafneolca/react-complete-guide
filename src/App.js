import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import Output from './Assignment-1/UserOutput/UserOutput'
import Input from './Assignment-1/UserInput/UserInput'

class App extends Component {
  state = {
    persons: [
      { key: "aasd3", name: "Dafne", age: 31 },
      { key: "aasd30", name: "Elfi", age: 59 },
      { key: "aasd03", name: "Srini", age: 60 }
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  togglePersonsHandler = () => {
    console.log(this.state.showPersons);
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
    console.log(this.state.showPersons);
  }

  deletePersonHandler = (personIndex) => {
    // console.log("delete");
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div style={personContainer}>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.key} />
          })}
        </div>
      )
    }

    return (
      <div className="App" >
        <h1>Hi, I'm Dafne ;-)</h1>
        <h3>is this really working?</h3>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div >
    )
  }

}

export default App;