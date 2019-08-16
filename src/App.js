import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Dafne", age: 31 },
      { name: "Elfi", age: 59 },
      { name: "Srini", age: 60 }
    ]
  })

  const [otherState, newOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    console.log("okkkk")
    setPersonsState({
      persons: [
        { name: "Dafne DENIZ", age: 31 },
        { name: "Elfi", age: 59 },
        { name: "Srini", age: 600 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm Dafne ;-)</h1>
      <h3>is this really working?</h3>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Special *CaSe*</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

}

export default app;