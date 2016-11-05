import React from 'react'
import Choice from './Choice'

const SplitTwo = (props) => {
  var currentNode = props.node;
  return (
    <div className="row split-two">
      <div className="col-md-6 split-two-media">
        <img className="split-two-img" src={currentNode.image_url} />
      </div>
      <div className="col-md-6 split-two-main">
        <h1>{currentNode.name}</h1>
        <p>{currentNode.description}</p>
        <hr/>
        {currentNode.choices.map((choice, idx) => (<Choice key={idx} choice={choice} switchNode={props.switchNode} />))}
      </div>
    </div>
  )
}

export default SplitTwo;