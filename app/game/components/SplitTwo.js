import React from 'react'
import Choice from './Choice'
import Item from './Item'
import Wiki from '../full_wiki'

const SplitTwo = (props) => {
  var store = props.store;
  var currentNode = props.node;
  var rewardList;
  if(currentNode.rewardList){
    rewardList = currentNode.rewardList.map((item, idx) => {
      if(item.amountChange > 0){
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> You gained <span className="inline-bold">{Math.abs(item.amountChange)}</span> in {Wiki[item.id].name}</li>);
      }else{
        return (<li key={idx} className="choice-item-list-item"><Item item={Wiki[item.id]} isSuppressed={true} /> You Lost <span className="inline-bold">{Math.abs(item.amountChange)}</span> in {Wiki[item.id].name}</li>);
      }
    });
  }
  return (
    <div className="row split-two">
      <div className="col-md-6 split-two-media">
        <img className="split-two-img" src={currentNode.image_url} />
      </div>
      <div className="col-md-6 split-two-main">
        <h1>{currentNode.name}</h1>
        <p>{currentNode.description}</p>
        <hr/>
        {rewardList}
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
