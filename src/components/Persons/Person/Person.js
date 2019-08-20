import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
  render() {
    console.log('[Person.js] - rendering')
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name}.. a person! I am {this.props.age} years old. - {this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }

}

export default Person;
// export default Radium(person);