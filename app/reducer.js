import { MODIFY_INVENTORY, SWITCH_NODE, SWITCH_MODE } from './actions';
import Wiki from './game/full_wiki';

const _initState = {
  notifications: [
    {
      type: "storeChange",
      changes: [
        {
          category: "qualities",
          id: "0001A23",
          amountChange: 1,
        },
        {
          category: "items",
          id: "0001A00",
          amountChange: 100,
        }
      ]
    }
  ],
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
      var newState = $.extend(true, {}, prevState);
      if(newState.currentMode == action.newMode && action.newMode == "Scenario"){
        newState.currentNode = Wiki["1001A00"];
      }else{
        newState.currentMode = action.newMode;
      }
      return newState;
    default:
      return prevState;
  }
}

export default reducer;
