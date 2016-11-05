import React from 'react';

import SplitTwo from './SplitTwo';
import Reward from './Reward';
// import Single from './node_components/Single';

const ScenarioNode = (props) => {
  debugger;
  var nodeRendered;
  switch (props.node.type) {
    case "split-two":
      nodeRendered = (<SplitTwo node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
      break;
    case "single":
      nodeRendered = (<Single node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
      break;
    case "reward":
      nodeRendered = (<Reward node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
      break;
    default:
  }
  return (
    <div>
      {nodeRendered}
    </div>);
}

export default ScenarioNode;
