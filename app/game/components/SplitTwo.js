import React from 'react'
import Choice from './Choice'

const SplitTwo = (props) => {
  debugger;
  var store = props.store;
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
        {
          currentNode.choices.map((choice, idx) => {
            if(!choice.hasDisplayCondition || (choice.hasDisplayCondition && choice.satisfyDisplayCondition(store))){
              return(<Choice store={store} key={idx} choice={choice} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
            }else{
              return("");
            }
          })
        }

      </div>
    </div>
  )
}

export default SplitTwo;
