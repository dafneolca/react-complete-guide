import React from 'react';
import '../assignment1.css'

const userOutput = (props) => {
  return (
    <div className="Output">
      <p>Why, sometimes I’ve believed as many as six impossible things before breakfast.</p>
      <p>We are all in the gutter, but some of us are looking at the stars.</p>
      <p>Username: {props.userName} - {props.user}</p>
    </div>
  )

}

export default userOutput;