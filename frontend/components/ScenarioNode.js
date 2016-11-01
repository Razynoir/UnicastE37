import React from 'react';

import SplitTwo from './node_components/SplitTwo';
import Reward from './node_components/Reward';
// import Single from './node_components/Single';

const ScenarioNode = (props) => {
  debugger;
  var nodeRendered;
  switch (props.node.type) {
    case "split-two":
      nodeRendered = (<SplitTwo node={props.node} switchNode={props.switchNode} />);
      break;
    case "single":
      nodeRendered = (<Single node={props.node} switchNode={props.switchNode} />);
      break;
    case "reward":
      nodeRendered = (<Reward node={props.node} switchNode={props.switchNode} />);
      break;
    default:
  }
  return (
    <div>
      {nodeRendered}
    </div>);
}

export default ScenarioNode;
