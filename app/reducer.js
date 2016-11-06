import { MODIFY_INVENTORY, SWITCH_NODE, SWITCH_MODE } from './actions';
import Wiki from './game/full_wiki';

const _initState = {
  currentMode: "Scenario",
  currentNode: Wiki["1001A00"],
  life_conditions: {},  // such as job, weather and other macro conditions
  attributes: {}, // such as Dominance, Diplomacy, etc.
  modifiers: {}, // such as effect tokens generated by equipments
  qualities: {}, // such as suspicion and stress
  equipments: {
    "0002A00": $.extend({}, Wiki["0002A00"], {amount: 1})
  }, // items that carry functionalities (means)
  items: {  // items that don't carry functionalities (resources)
    "0002B94": {
      id: "0002B94",
      name: "Stock Chart",
      description: "Source of information.",
      note: "Can be used for trading or favors.",
      image_url: "http://i.imgur.com/Pwqz5wg.png",
      amount: 100
    }
  },
  information: {}, // intangible information resources
  relationships: {} // intangible interpersonal resources
}

// In the following format:
// {
//   type: "MODIFY_INVENTORY",
//   payload: {
//     changes: [{id: "0001A00", changeAmount: 100}],
//     log: "Change is done."
//   }
// }

const reducer = (prevState=_initState, action) => {
  switch(action.type){
    case "MODIFY_INVENTORY":
      var newState = $.extend(true, {}, prevState);
      debugger;
      var changes = action.payload;
      if(!(!!changes)){ return prevState; }
      changes.forEach(function(item){
        if(newState[item.category][item.id]){
          newState[item.category][item.id].amount += item.amountChange;
        }else{
          newState[item.category][item.id] = Wiki[item.id];
          newState[item.category][item.id].amount = item.amountChange;
        }
      });
      return newState;
    case "SWITCH_NODE":
      var newState = $.extend(true, {}, prevState);
      newState.currentNode = Wiki[action.nextNode];
      return newState;
    case "SWITCH_MODE":
    debugger;
      var newState = $.extend(true, {}, prevState);
      newState.currentMode = action.newMode;
      return newState;
    default:
      return prevState;
  }
}

export default reducer;
