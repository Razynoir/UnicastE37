import { MODIFY_INVENTORY, SWITCH_NODE } from './actions';
import Wiki from './wiki/full_wiki.js';

const _initState = {
  currentNode: Wiki["1001A00"],
  conditions: {},
  attributes: {},
  qualities: {},
  equipments: {},
  items: {
    "0001A00": {
      id: "0001A00",
      name: "Dollar",
      description: "People disagrees on whether it's the key to happiness.",
      note: "Can be used to purchase things or gain favors.",
      image_url: "http://i.imgur.com/oaxWsNW.png",
      amount: 100
    },
    "0002B94": {
      id: "0002B94",
      name: "Stock Chart",
      description: "Source of information.",
      note: "Can be used for trading or favors.",
      image_url: "http://i.imgur.com/Pwqz5wg.png",
      amount: 100
    }
  },
  information: {},
  relationships: {}
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

      var changes = action.payload.changes;
      changes.forEach(function(item){
        if(newState.items[item.id]){
          newState.items[item.id].amount += item.amountChange;
        }else{
          newState.items[item.id] = Wiki[item.id];
          newState.items[item.id].amount = item.amountChange;
        }
      });
      return newState;
    case "SWITCH_NODE":
      var newState = $.extend(true, {}, prevState);
      newState.currentNode = Wiki[action.nextNode];
      return newState;
    default:
      return prevState;
  }
}

export default reducer;
