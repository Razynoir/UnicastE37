import React from 'react';
import ScenarioNode from './components/ScenarioNode';
import ToolBar from './components/ToolBar';
import Dashboard from './components/DashBoard';
import Item from './components/Item';

const AppContent = (props) => {
  var items = [];
  var tradingDeviceButton = "";

  var contentInterface;
  switch (props.currentMode) {
    case "Dashboard":
      contentInterface = <Dashboard />;
      break;
    case "Scenario":
      contentInterface = <ScenarioNode node={props.currentNode} switchNode={props.switchNode} />
    default:

  }

  for(var key in props.items){
    items.push(props.items[key])
  }
  if(props.items["0003C73"]){
    tradingDeviceButton = (<button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0002B94", amountChange: 2}]})}>Use Your DS47 (+2 Stock Chart)</button>)
  }else{
    tradingDeviceButton = (<button className="btn btn-default" onClick={() => props.modifyInventoryWithSpecs({changes: [{id: "0003C73", amountChange: 1}, {id: "0001A00", amountChange: -100}]})}>Buy DS47 Home Market Portal (-100 Dollars, +1 Device)</button>)
  }

  return(
    <div className="container book">
      <ToolBar mode={props.currentMode} switchMode={props.switchMode} />
      {contentInterface}
      {items.map((item, idx) => (<Item key={idx} item={item} />))}

    </div>
  );
}

export default AppContent;
