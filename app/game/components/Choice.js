import React from 'react'
import Item from './Item'
import Wiki from '../full_wiki'

const Choice = (props) => {
  var choice = props.choice;
  var store = props.store;

  var conditionalStatement;
  var conditionalButton;

  if(!!choice.hasCondition && !choice.satisfyCondition(store)){
    var conditionalStatement = choice.requirements.map((item, idx) =>(
      item.isMoreThan?
      <li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> More than <span className="inline-bold">{item.amount}</span> in {Wiki[item.id].name}</li> :
      <li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> Less than <span className="inline-bold">{item.amount}</span> in {Wiki[item.id].name}</li>)
    )
    conditionalButton = (<p className="color-red">You do not meet the requirement.</p>);
  }else{
    function callBack(){
      props.modifyInventoryWithSpecs(choice.storeImpact);
      props.switchNode(choice.nextNode);
    }
    conditionalButton = (<button className="btn btn-default" onClick={callBack}>{choice.buttonText}</button>);
  }
  return (
    <div className="choice-item">
      <h3>{choice.title}</h3>
      <p className="item-note">{choice.note}</p>
      {!!conditionalStatement ? (<p className="inline-requirement">**Requirements:</p>) : ("")}
      <ul className="choice-item-list">
        {conditionalStatement}
      </ul>
      <br/>
      {conditionalButton}
    </div>
  )
}

export default Choice;
