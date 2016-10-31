import { MODIFY_INVENTORY } from './actions'

const _initState = {
  items: {
    "0001A00": {
      id: "0001A00",
      name: "Dollar",
      description: "People disagrees on whether it's the key to happiness.",
      image_url: "http://imgur.com/oaxWsNW",
      amount: 100
    }
  }
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
  debugger;
  switch(action.type){
    case "MODIFY_INVENTORY":
      var newState = $.extend(true, {}, prevState);

      var changes = action.payload.changes;
      changes.forEach(function(item){
        if(newState.items[item.id]){
          newState.items[item.id].amount += item.amountChange;
        }else{
          newState.items[item.id] = item.amountChange;
        }
      });
      return newState;
    default:
      return prevState;
  }
}

export default reducer;
