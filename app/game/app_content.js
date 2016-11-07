import React from 'react';
import ToolBar from './components/ToolBar';
import Dashboard from './components/DashBoard';
import ScenarioNode from './components/ScenarioNode';
import Inventory from './components/Inventory';
import Notifications from './components/Notifications';
import Journal from './components/Journal';

const AppContent = (props) => {
  var items = [];
  var tradingDeviceButton = "";

  var contentInterface;
  switch (props.currentMode) {
    case "Dashboard":
      contentInterface = <Dashboard store={props} />;
      break;
    case "Scenario":
      contentInterface = <ScenarioNode store={props} node={props.currentNode} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />
      break;
    case "Inventory":
      contentInterface = <Inventory store={props} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />
      break;
    case "Journal":
      contentInterface = <Journal chapters={props.chapters} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />
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

  // <Notifications notifications={props.notifications} />
  return(
      <div className="container book">
        <ToolBar mode={props.currentMode} switchMode={props.switchMode} />
        {contentInterface}
      </div>
  );
}

export default AppContent;
