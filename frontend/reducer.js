import { ADD_ITEM } from './actions'

const _defaultState = {
  items: []
}

const reducer = (oldState, action) => {
  switch(action.type){
    case "ADD_ITEM":
      if(oldState){
        return {
          items: oldState.items.concat({name: action.name})
        };
        return newState;
      }else{
        return _defaultState;
      }
    default:
      return _defaultState;
  }
}

export default reducer;
