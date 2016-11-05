import React from 'react'
import Item from './Item'

const Choice = (props) => {
  var choice = props.choice;

  var conditionalStatement;
  var conditionalButton;

  if(!!choice.hasCondition && !choice.satisfyCondition(store)){
    var conditionalStatement = choice.requirements.map((item, idx) =>
      (item.isMoreThan? <li key={idx}>More than {item.amount} {item.name}</li> : <li key={idx}>Less than {item.amount} {item.name}</li>)
    )
    conditionalButton = (<p className="color-red">You do not meet the requirement.</p>);
  }else{
    function callBack(){
      props.modifyInventoryWithSpecs(choice.storeImpact);
      props.switchNode(choice.nextNode);
    }
    conditionalButton = (<button onClick={callBack}>{choice.buttonText}</button>);
  }
  debugger;
  return (
    <div className="choice-item">
      <h3>{choice.title}</h3>
      <p className="item-note">{choice.note}</p>
      <ul>{conditionalStatement}</ul>
      {conditionalButton}
    </div>
  )
}

export default Choice;
