import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] - app js  constructor')
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Dafne', age: 31 },
      { id: 'vasdf1', name: 'Elfi', age: 59 },
      { id: 'asdf11', name: 'Srini', age: 60 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] - get drived state from props", props)
    console.log("[App.js] - get drived state from props", state)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] - component did mount')
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log(p.id);
      console.log(id);
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    console.log('[App.js] - render')
    if (this.state.showPersons) {
      persons = (<Persons
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}
        persons={this.state.persons}
      />);
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
