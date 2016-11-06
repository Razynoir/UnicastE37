import React from 'react'
import Item from './Item'
import Wiki from '../full_wiki'

const Choice = (props) => {
  var choice = props.choice;
  var store = props.store;

  var impactStatement;
  if(!!choice.storeImpact && choice.storeImpact.length > 0){
    impactStatement = choice.storeImpact.map((item, idx) => {
      if(item.amountChange > 0){
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> Gain <span className="inline-bold">{Math.abs(item.amountChange)}</span> in {Wiki[item.id].name}</li>);
      }else{
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> Lose <span className="inline-bold">{Math.abs(item.amountChange)}</span> in {Wiki[item.id].name}</li>);
      }
    })
  }

  var conditionalStatement;
  if(!!choice.requirements && choice.requirements.length > 0){
    conditionalStatement = choice.requirements.map((item, idx) => {
      if(item.isMoreThan){
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> More than <span className="inline-bold">{item.amount}</span> in {Wiki[item.id].name}</li>);
      }else{
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> Less than <span className="inline-bold">{item.amount}</span> in {Wiki[item.id].name}</li>);
      }
    })
  }

  var conditionalButton;
  if(!!choice.hasCondition && !choice.satisfyCondition(store)){
    conditionalButton = (<p className="color-red">You do not meet the requirement.</p>);
  }else{
    function callBack(){
      props.modifyInventoryWithSpecs(choice.storeImpact);
      props.switchNode(choice.nextNode);
    }
    conditionalButton = (<button className="btn btn-default" onClick={callBack}>{choice.buttonText}</button>);
  }

  var details;
  if(!!impactStatement || !!conditionalStatement){
    var callback = function(e){
      $(e.currentTarget).next().toggle();
    };
    details = (
      <div className="panel panel-default">
        <div className="panel-heading" onClick={callback}>View Details</div>
        <div className="panel-body">
          {!!impactStatement ? (<p className="inline-requirement">**Effect:</p>) : ("")}
          <ul className="choice-effect-list">
          {impactStatement}
          </ul>
          {(!!impactStatement && !!conditionalStatement)? (<hr/>) : ("")}
          {!!conditionalStatement ? (<p className="inline-requirement">**Requirements:</p>) : ("")}
          <ul className="choice-item-list">
          {conditionalStatement}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="choice-item">
      <h3>{choice.title}</h3>
      <p className="item-note">{choice.note}</p>
      {details}
      {conditionalButton}
    </div>
  )
}

export default Choice;
