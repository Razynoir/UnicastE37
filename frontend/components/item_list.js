import React from 'react';
import ScenarioNode from './ScenarioNode';

const ItemList = (props) => {
  var items = [];
  var tradingDeviceButton = "";

  for(var key in props.items){
    items.push(props.items[key])
  }
  if(props.items["0003C73"]){
    tradingDeviceButton = (<button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0002B94", amountChange: 2}]})}>Use Your DS47 (+2 Stock Chart)</button>)
  }else{
    tradingDeviceButton = (<button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0003C73", amountChange: 1}, {id: "0001A00", amountChange: -100}]})}>Buy DS47 Home Market Portal (-100 Dollars, +1 Device)</button>)
  }

  return(
    <div className="container">
      <ScenarioNode node={props.currentNode} switchNode={props.switchNode}/>
      {items.map((item, idx) => (
        <div className="row" key={idx}>
          <img className="item-image" src={item.image_url}/>
          <p>You have <span className="inline-bold">x{item.amount}</span> <span className="inline-bold">{item.name}</span></p>
          <p>{item.description}</p>
          <p className="item-note">{item.note}</p>
        </div>
      ))}

      <button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0001A00", amountChange: 100}]})}>Earn Cash (+ 100 Dollars)</button>
      &nbsp;
      <button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0002B94", amountChange: -10}, {id: "0001A00", amountChange: 20}]})}>Trade Stocks (-10 Stock Charts, + 20 Dollars)</button>
      &nbsp;
      {tradingDeviceButton}
      &nbsp;
      <br/>
      <button className="btn btn-primary" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0004A25", amountChange: 1}, {id: "0001A00", amountChange: -450}]})}>Buy a Night Out (+1 Chance for a Night Out, -450 Dollars)</button>
    </div>
  );
}

export default ItemList;
