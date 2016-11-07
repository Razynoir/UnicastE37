import React from 'react';
import Single from './Single';
import SplitTwo from './SplitTwo';
import Reward from './Reward';
// import Single from './node_components/Single';

const ScenarioNode = (props) => {
  var nodeRendered;
  debugger;
  switch (props.node.type) {
    case "split-two":
      nodeRendered = (<SplitTwo store={props.store} node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
      break;
    case "single":
      nodeRendered = (<Single store={props.store} node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} addJournalEntry={props.addJournalEntry} />);
      break;
    case "reward":
      nodeRendered = (<Reward store={props.store} node={props.node} switchNode={props.switchNode} modifyInventoryWithSpecs={props.modifyInventoryWithSpecs} />);
      break;
    default:
  }
  return (
    <div>
      {nodeRendered}
    </div>);
}

export default ScenarioNode;
