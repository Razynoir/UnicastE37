import React from 'react'

const Choice = (props) => {
  var choice = props.choice;

  return (
    <div>
      <h3>{choice.title}</h3>
      <p className="item-note">{choice.note}</p>
      <button onClick={() => props.switchNode(choice.nextNode)}>{choice.buttonText}</button>
    </div>
  )
}

export default Choice;
